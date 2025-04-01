// my-portfolio/components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">MyPortfolio</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link href="#about" className="hover:text-blue-700">About</Link>
          <Link href="#projects" className="hover:text-blue-700">Projects</Link>
          <Link href="#contact" className="hover:text-blue-700">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
