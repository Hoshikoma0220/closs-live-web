// src/components/Hero.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-white relative z-10">
        {isClient && (
          <>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              さあ、あなたが輝ける場所へ
            </motion.h1>
            <div className="mt-6 flex space-x-4">
              <motion.a
                href="#"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                新規登録
              </motion.a>
              <motion.a
                href="#"
                className="px-6 py-3 border border-gray-600 text-gray-600 rounded hover:bg-gray-600 hover:text-white transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ログイン
              </motion.a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
