"use client";

import React from 'react';
import Header from '@/components/Header';  // 共通のヘッダー
import Footer from '@/components/Footer';  // 共通のフッター

const OperatingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-gray-300 text-gray-900">
      <Header />

      {/* 背景装飾 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 opacity-30 rounded-full blur-2xl"></div>

      {/* メインコンテンツ */}
      <main className="container mx-auto py-16 relative z-10" style={{ paddingTop: '120px' }}>
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">運営情報</h1>

        {/* 運営団体セクション */}
        <section className="mb-12 bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 text-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">運営団体</h2>
          <p className="text-lg mb-4">Team-FanLaboは、プログラミングで世界を豊かにしていきます。また学生向けプログラミングチームとして活動を行っています。</p>
          <p><strong>設立:</strong> 2024年9月</p>
          <p><strong>代表者:</strong> 星狛 つらら</p>
          <p><strong>所属メンバー:</strong> 1名</p>
          <p><strong>事業内容:</strong> アプリケーション開発、クリエイティブ事業</p>
          <p className="mt-4 text-blue-600">
            詳しいことについては <a href="https://team-fanlabo.com" className="underline hover:text-blue-800 transition">team-fanlabo.com</a> をご覧ください。
          </p>
        </section>

        {/* サポートとお問い合わせセクション */}
        <section className="mb-12 bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 text-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">サポートとお問い合わせ</h2>
          <p className="text-lg mb-4">お問い合わせやサポートが必要な場合は、以下の方法でご連絡ください。</p>
          <ul className="list-disc list-inside text-lg">
            <li>アカウントに関する問い合わせ: support@team-fanlabo.com</li>
            <li>全般の問い合わせ: support@closslive.com</li>
            <li>電話番号: 090-6114-7265</li>
          </ul>
        </section>

        {/* 運営のポリシーセクション */}
        <section className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 text-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">運営のポリシー</h2>
          <p className="text-lg mb-4">私たちのサービスは、安全で信頼できる環境を提供することを目指しています。運営ポリシーについては、以下のリンクから詳細をご覧ください。</p>
          <a href="/policy" className="text-blue-600 underline hover:text-blue-800 transition">運営ポリシーを見る</a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OperatingPage;
