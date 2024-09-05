// src/components/Header.tsx
"use client";

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Closs Live</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/operating" className="text-gray-800 hover:text-blue-600">運営</Link>
          <Link href="#" className="text-gray-800 hover:text-blue-600">機能</Link>
          <Link href="#" className="text-gray-800 hover:text-blue-600">問い合わせ</Link>
          <Link href="#" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">新規登録</Link>
          <Link href="#" className="px-4 py-2 border border-gray-600 text-gray-600 rounded hover:bg-gray-600 hover:text-white transition">ログイン</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
