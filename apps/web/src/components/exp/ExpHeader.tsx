'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';

export default function ExpHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Logo "exp" avec fond jaune */}
              <div className="bg-exp-yellow text-exp-black font-bold text-xl px-3 py-1.5 rounded-lg transform group-hover:scale-105 transition-transform duration-300">
                exp
              </div>
            </div>
            <div className="hidden md:block">
              <div className="font-medium text-exp-black text-base">
                expérience collective
              </div>
              <div className="text-xs text-gray-500 italic">
                L'encre jaune qui se dilue
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 font-normal hover:text-exp-black transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-exp-yellow group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-exp-black text-white hover:bg-exp-yellow hover:text-exp-black font-medium px-6 py-2.5 rounded-lg transition-all duration-300 border border-exp-black">
                Passez à l'action
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-exp-yellow/10 transition-colors"
          >
            <svg
              className="w-6 h-6 text-exp-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-exp-gray/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 font-normal hover:text-exp-black transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-exp-black text-white hover:bg-exp-yellow hover:text-exp-black font-medium rounded-lg transition-all duration-300">
                  Passez à l'action
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
