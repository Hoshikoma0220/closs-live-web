import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-24 text-center overflow-hidden">
      {/* 背景に動きのある複数の円形を追加 */}
      <div className="absolute inset-0 opacity-20">
        {/* 円形や波状の形を複数追加 */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-2/3 right-1/3 w-72 h-72 bg-gradient-to-r from-blue-400 to-green-400 rounded-full filter blur-2xl opacity-30"></div>
        <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full filter blur-2xl opacity-40"></div>
      </div>

      <h1 className="text-5xl font-bold mb-6 z-10 relative">さあ、あなたが輝ける場所へ</h1>

      {/* ボタンを中央に配置し、ホバーアニメーションを追加 */}
      <div className="mt-8 space-x-4 z-10 relative">
        {/* 新規登録ボタン */}
        <Link href="/register" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          新規登録
        </Link>

        {/* ログインボタン */}
        <Link href="/login" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          ログイン
        </Link>
      </div>
    </section>
  );
};

export default Hero;
