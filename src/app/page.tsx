// src/app/page.tsx
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Slider />
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
