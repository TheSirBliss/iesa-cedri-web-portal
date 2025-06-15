
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import IesaItalia from '@/components/IesaItalia';
import IesaMondo from '@/components/IesaMondo';
import Archive from '@/components/Archive';
import Testimonials from '@/components/Testimonials';
import NewsEvents from '@/components/NewsEvents';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <IesaItalia />
      <IesaMondo />
      <Archive />
      <Testimonials />
      <NewsEvents />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
