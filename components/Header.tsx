// my-portfolio/components/Header.tsx
import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push('/'); //update url to reflect the home page
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-blue-800" onClick={handleScrollToTop}>MyPortfolio</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link href="#about" className="hover:text-blue-700">About</Link>
          <Link href="#projects" className="hover:text-blue-700">Projects</Link>
          <Link href="#contact" className="hover:text-blue-700">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
