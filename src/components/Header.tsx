'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 w-full transition-all duration-300 z-10 h-[72px]',
        scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <nav className="flex justify-between items-center text-white py-4 px-6 h-full">
        <span className="text-2xl font-bold">Blorix</span>
        <button className="bg-neutral-200 text-black font-bold px-4 py-2 rounded-md hover:bg-neutral-100 cursor-pointer transition-colors duration-200">
          Suscribirme
        </button>
      </nav>
    </header>
  );
};
