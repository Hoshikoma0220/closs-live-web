// src/components/Header.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" passHref>
          <motion.a className="text-2xl font-bold text-gray-800 hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Closs Live
          </motion.a>
        </Link>
        <div className="flex items-center space-x-4">
          <motion.a 
            href="#" 
            className="text-gray-800 hover:text-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            運営
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-800 hover:text-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            機能
          </motion.a>
          <motion.a 
            href="#" 
            className="text-gray-800 hover:text-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            問い合わせ
          </motion.a>
          <motion.a 
            href="#" 
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            新規登録
          </motion.a>
          <motion.a 
            href="#" 
            className="px-4 py-2 border border-gray-600 text-gray-600 rounded hover:bg-gray-600 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ログイン
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
