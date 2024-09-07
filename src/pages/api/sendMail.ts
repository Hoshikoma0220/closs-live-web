import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { Fields, Files } from 'formidable'; // formidableの型をインポート
import nodemailer from 'nodemailer';

// formidableがデフォルトでファイルを解析する設定
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = formidable({ multiples: true });

    // err, fields, filesの型を明示的に指定
    form.parse(req, async (err: Error | null, fields: Fields, files: Files) => {
      if (err) {
        res.status(500).json({ message: 'ファイル解析エラーが発生しました' });
        return;
      }

      const { name, email, message, category } = fields;

      // `email` が配列の可能性があるので、最初の要素を使用
      const emailAddress = Array.isArray(email) ? email[0] : email;

      // ファイルを取得
      const file = files.file as formidable.File | undefined;

      // Nodemailerの設定
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your-email@example.com', // あなたのメールアドレス
          pass: 'your-email-password',   // メールのパスワード
        },
      });

      const mailOptions = {
        from: emailAddress, // `emailAddress` を使用して、単一のメールアドレスにする
        to: 'your-email@example.com', // 受信先のメールアドレス
        subject: `お問い合わせ: ${name} (${category})`,
        text: `メッセージ: ${message}\n\nカテゴリ: ${category}\n\n名前: ${name}\nメール: ${email}`,
        attachments: file
          ? [
              {
                filename: file.originalFilename || '', // filename が null の場合は空文字にする
                path: file.filepath,
              },
            ]
          : [],
      };

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'メールが正常に送信されました' });
      } catch (error) {
        console.error('メール送信エラー:', error);
        res.status(500).json({ message: 'メール送信エラーが発生しました' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
