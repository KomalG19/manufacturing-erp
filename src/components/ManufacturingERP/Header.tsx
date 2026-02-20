"use client";

import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-shadow bg-white ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-sky-800">BizPlus<span className="text-sky-400">ERP</span></h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#modules" className="text-sm text-slate-600 hover:text-sky-700">Features</a>
          <a href="#offer" className="text-sm text-slate-600 hover:text-sky-700">Offers</a>
          <a href="#faq" className="text-sm text-slate-600 hover:text-sky-700">FAQ</a>
          <div className="text-sm text-sky-700 font-semibold">+91 70 30 32 3838</div>
          <a href="#contact" className="ml-2 inline-flex items-center bg-gradient-to-r from-sky-700 to-sky-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">Book Free Consultation</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="open menu" className="p-2 text-sky-700">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
