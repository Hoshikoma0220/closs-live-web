"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';  // ヘッダーをインポート
import Footer from '@/components/Footer';  // フッターをインポート

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('アカウントについて');
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('category', category);
    if (file) {
      formData.append('file', file);
    }

    const response = await fetch('/api/sendMail', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert('送信に失敗しました。もう一度お試しください。');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <Header />  {/* ヘッダーを追加 */}

      {/* 背景にぼかしエフェクトのある円形を追加 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full filter blur-2xl"></div>
      </div>

      <main className="container mx-auto py-12 flex-grow relative z-10" style={{ paddingTop: '120px' }}>
        <h1 className="text-4xl font-bold mb-8 text-center">お問い合わせ</h1>
        <p className="mb-6 text-red-500 text-center">
          企業からの問い合わせはこちらのフォームではなく、
          <a href="mailto:contact_company@closslive.com" className="underline text-blue-600">
            contact_company@closslive.com
          </a>
          にお願いします。
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white text-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 relative z-10">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                名前
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                メールアドレス
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                問い合わせ内容
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="アカウントについて">アカウントについて</option>
                <option value="機能について">機能について</option>
                <option value="バグ報告について">バグ報告について</option>
                <option value="著作権について">著作権について</option>
                <option value="ユーザーの安全に関する問い合わせ">ユーザーの安全に関する問い合わせ</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                メッセージ
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={5}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                ファイルをアップロード (任意)
              </label>
              <input
                id="file"
                type="file"
                onChange={handleFileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                送信
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-green-500 text-white p-4 rounded relative z-10">
            送信が完了しました。メッセージが送信されました。
          </div>
        )}
      </main>
      <Footer />  {/* フッターを追加 */}
    </div>
  );
};

export default ContactForm;
