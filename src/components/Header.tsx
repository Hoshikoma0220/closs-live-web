import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-white via-gray-100 to-white bg-opacity-90 shadow-lg z-50 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* ロゴ部分 */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="hover:text-blue-600 transition duration-300">
            Closs Live
          </Link>
        </div>

        {/* ナビゲーションリンク */}
        <div className="flex items-center space-x-6">
          <Link href="/operating" className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out">
            運営
          </Link>
          <Link href="/features" className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out">
            機能
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out">
            問い合わせ
          </Link>

          {/* 新規登録ボタン */}
          <Link href="/register" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            新規登録
          </Link>

          {/* ログインボタン */}
          <Link href="/login" className="px-4 py-2 border border-gray-600 text-gray-600 rounded-full hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out">
            ログイン
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
