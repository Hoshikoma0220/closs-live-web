// src/app/operating/page.tsx
"use client";

import React from 'react';
import Header from '@/components/Header';  // 共通のヘッダー
import Footer from '@/components/Footer';  // 共通のフッター

const OperatingPage: React.FC = () => {
  return (
    <div>
      <Header />
      {/* ヘッダーの高さに合わせてさらに余白を追加 */}
      <main className="container mx-auto py-12" style={{ paddingTop: '120px' }}>
        <h1 className="text-4xl font-bold mb-8">運営情報</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">運営団体</h2>
          <p>Team-FanLaboは、イノベーションとクリエイティブな力で新しい可能性を追求する企業です。最新の技術と柔軟なアプローチで、個人や法人のニーズに応え、持続可能な成長を目指しています。</p>
          <p>住所: 東京都渋谷区恵比寿1-2-3</p>
          <p>設立: 2021年4月</p>
          <p>代表者: 山田 太郎</p>
          <p>従業員数: 50名</p>
          <p>事業内容: ITサービス、アプリケーション開発、クリエイティブ事業</p>
          <p className="mt-4">詳しいことについては <a href="https://team-fanlabo.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">team-fanlabo.com</a> をご覧ください。</p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">サポートとお問い合わせ</h2>
          <p>お問い合わせやサポートが必要な場合は、以下の方法でご連絡ください。</p>
          <ul className="list-disc list-inside">
            <li>アカウントに関する問い合わせ: support@team-fanlabo.com</li>
            <li>全般の問い合わせ: support@closslive.com</li>
            <li>電話番号: 090-6114-7265</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">運営のポリシー</h2>
          <p>私たちのサービスは、安全で信頼できる環境を提供することを目指しています。運営ポリシーについては、以下のリンクから詳細をご覧ください。</p>
          <a href="/policy" className="text-blue-600 hover:underline">運営ポリシーを見る</a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OperatingPage;
