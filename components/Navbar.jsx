'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Requires lucide-react

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm border-gray-200 bg-gray-900/80 backdrop-blur-sm transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Name */}
          <Link href="/" className="text-xl font-bold text-blue-500 hover:text-blue-600 transition">
            Sumit Bansode
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-100 hover:text-blue-500 hover:border-blue-500 transition"
                >
                  {link.label}
                </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-100 hover:text-blue-500 px-2 py-1 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
                
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
