'use client';

import { Link } from '@/i18n/routing';

export default function ExpFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-exp-black text-exp-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-exp-yellow text-exp-black font-bold text-2xl px-4 py-2 rounded-lg">
                exp
              </div>
            </div>
            <p className="text-exp-white/70 text-sm leading-relaxed">
              <span className="text-exp-yellow font-semibold">Expérience Collective</span> - 
              L'agence qui transforme vos ambitions en réalité. Marketing, stratégie et transformation digitale.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-exp-white/10 hover:bg-exp-yellow rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-exp-white/10 hover:bg-exp-yellow rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-exp-white/10 hover:bg-exp-yellow rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-exp-yellow font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-exp-yellow font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  Stratégie & CMO
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  Image de Marque
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  Expérience Client
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  Mesure de Performance
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  Appels d'Offres
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-exp-yellow font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-exp-yellow mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-exp-white/70 text-sm">
                  123 Rue de l'Innovation<br />
                  Montréal, QC H3B 2Y5
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-exp-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@experience-collective.com" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  contact@experience-collective.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-exp-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15141234567" className="text-exp-white/70 hover:text-exp-yellow transition-colors text-sm">
                  +1 (514) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-exp-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-exp-white/50 text-sm">
              © {currentYear} Expérience Collective. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="/legal" className="text-exp-white/50 hover:text-exp-yellow transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="/privacy" className="text-exp-white/50 hover:text-exp-yellow transition-colors text-sm">
                Confidentialité
              </Link>
              <Link href="/cookies" className="text-exp-white/50 hover:text-exp-yellow transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="h-1 bg-gradient-to-r from-exp-yellow via-exp-teal to-exp-yellow"></div>
    </footer>
  );
}
