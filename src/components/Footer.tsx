// src/components/Footer.tsx
"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-center items-center space-x-8">
        <p>&copy; {new Date().getFullYear()} Team-FanLabo. All rights reserved.</p>
        <a href="#" className="text-gray-400 hover:text-white">利用規約</a>
        <a href="#" className="text-gray-400 hover:text-white">プライバシーポリシー</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          GitHub
        </a>
        <a href="https://note.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
          note
        </a>
      </div>
    </footer>
  );
};

export default Footer;
