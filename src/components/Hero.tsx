// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-white relative z-10">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to Closs Live
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8"
        >
          Discover and share amazing videos with the world.
        </motion.p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
