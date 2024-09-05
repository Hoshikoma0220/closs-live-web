// src/components/Features.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: '使いやすい', description: 'シンプルで直感的なUIを提供します。' },
  { title: '高パフォーマンス', description: '迅速で信頼性の高いサービスを提供します。' },
  { title: '安全性', description: '最新のセキュリティ基準を満たしています。' },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
