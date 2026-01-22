'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function ExpFooter() {
  return (
    <footer className="bg-exp-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo à gauche - 2 colonnes */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center group">
              <div className="relative h-16 w-auto">
                <Image
                  src="/assets/Logo/Final/ExpC_Lc inv.png"
                  alt="Expérience Collective"
                  width={200}
                  height={75}
                  className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>

          {/* Section CTA au milieu-gauche - 4 colonnes */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white text-lg font-light leading-relaxed">
              Discutons ensemble d'une stratégie à la hauteur de vos ambitions
            </h3>
            <Link href="/contact">
              <button className="border border-white bg-gray-200 text-gray-800 px-6 py-2 rounded-full text-sm font-light hover:bg-gray-300 transition-colors">
                Contactez-nous
              </button>
            </Link>
            <div>
              <Link href="/legal" className="text-white hover:text-exp-yellow transition-colors text-sm font-light">
                Politiques de confidentialité
              </Link>
            </div>
          </div>

          {/* Navigation au milieu-droite - 4 colonnes */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              {/* Colonne 1 */}
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services" className="text-white hover:text-exp-yellow transition-colors text-sm font-light">
                      Nos services
                    </Link>
                  </li>
                  <li>
                    <Link href="/a-propos" className="text-white hover:text-exp-yellow transition-colors text-sm font-light">
                      À propos de nous
                    </Link>
                  </li>
                  <li>
                    <Link href="/realisations" className="text-white hover:text-exp-yellow transition-colors text-sm font-light">
                      Nos réalisations
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Colonne 2 */}
              <div>
                <ul className="space-y-3">
                  <li>
                    <Link href="/partenaires" className="text-white hover:text-exp-yellow transition-colors text-sm font-light">
                      Nos partenaires
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources" className="text-white hover:text-exp-yellow transition-colors text-sm font-light">
                      Nos ressources
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-white hover:text-exp-yellow transition-colors text-sm font-light">
                      Nous joindre
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section Réseaux sociaux en bas-droite - 2 colonnes */}
          <div className="lg:col-span-2">
            <div className="flex flex-col items-end lg:items-start">
              <p className="text-white text-sm font-light mb-3">Suivez-nous</p>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-exp-yellow hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-exp-yellow hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://experiencecollective.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-exp-yellow hover:text-white transition-colors"
                  aria-label="Site web"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.53-7-3.23-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 text-exp-yellow hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
