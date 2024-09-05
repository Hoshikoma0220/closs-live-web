// src/components/Slider.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: "全く新しい総合型SNS",
    description: "動画投稿、配信、つぶやきもこれ一つ\nすべてを統合した新しいSNSプラットフォーム",
    videoSrc: "/path-to-your-video1.mp4",
  },
  {
    title: "クリエーターが育つための画期的な機能",
    description: "クリエーターがもっと輝けるようサポートを行っていきます。",
    videoSrc: "/path-to-your-video2.mp4",
  },
  {
    title: "ファン✕クリエーター",
    description: "ファンとクリエーターがつながる新しい体験。",
    videoSrc: "/path-to-your-video3.mp4",
  },
  {
    title: "AIを活用した安心安全のプラットフォーム",
    description: "AI技術を活用し、安心して使える環境を提供します。",
    videoSrc: "/path-to-your-video4.mp4",
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000); // 8秒ごとに自動スクロール

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative flex items-center justify-between w-full h-screen">
      <button onClick={handlePrev} className="absolute left-0 z-10 px-4 py-2 bg-gray-800 text-white rounded">
        &#8592;
      </button>

      <div className="flex w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-row items-center w-full h-full"
          >
            <div className="w-1/2 p-8 text-left mx-12">
              <h2 className="text-4xl font-bold mb-4 whitespace-pre-line">{slides[currentSlide].title}</h2>
              <p className="text-lg whitespace-pre-line">{slides[currentSlide].description}</p>
            </div>
            <div className="w-1/2">
              <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={slides[currentSlide].videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={handleNext} className="absolute right-0 z-10 px-4 py-2 bg-gray-800 text-white rounded">
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
