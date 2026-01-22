import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import ServicesSection from '@/components/sections/ServicesSection';

export const metadata: Metadata = {
  title: 'Expérience Collective - L\'encre jaune qui se dilue',
  description: 'Comprendre pour oser. Oser pour comprendre.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Grand 'e' jaune avec logo superposé */}
      <section className="relative min-h-screen flex items-center justify-center bg-exp-black overflow-hidden">
        {/* Grand 'e' jaune en arrière-plan */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[80%] h-[80%] max-w-[1200px]">
            <Image
              src="/assets/e infusion/e infusion V3 copie.png"
              alt=""
              fill
              className="object-contain opacity-90"
              priority
            />
          </div>
        </div>

        {/* Contenu superposé */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Logo à gauche */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-2xl">
                <Image
                  src="/assets/Logo/Final/ExpC_Lc inv.png"
                  alt="Expérience Collective"
                  width={800}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Tagline à droite */}
            <div className="text-left">
              <p className="text-3xl lg:text-4xl text-white font-light leading-relaxed">
                Comprendre pour oser,
                <br />
                oser pour comprendre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services - Fond blanc */}
      <ServicesSection />

      {/* Section Raison d'être - Fond noir avec image d'arrière-plan */}
      <section className="relative py-40 px-6 bg-exp-black overflow-hidden">
        {/* Image d'arrière-plan subtile */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/assets/e infusion/e infusion V3 copie.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl font-thin text-white mb-8 leading-tight tracking-tight text-center">
            Notre{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-exp-black font-bold">raison</span>
              <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow -z-0"></span>
            </span>
            {' '}d'être
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed text-center max-w-4xl mx-auto mb-16">
            Chez Expérience Collective, nous accompagnons les partenaires à chaque étape de leur croissance et projets, et développons des stratégies sur mesure qui visent l'innovation, l'engagement et la transformation. Nos actions reposent sur trois piliers qui sont nos valeurs et animent tous nos projets.
          </p>
          
          {/* Cartes de valeurs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Valeur 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-exp-yellow transition-all duration-300 group">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-exp-yellow text-exp-black font-bold text-sm rounded">
                  Valeur
                </span>
              </div>
              <p className="text-gray-300 font-light leading-relaxed">
                Nous croyons que chaque organisation a une histoire unique à raconter. Notre mission est de vous aider à la révéler, à la partager et à la faire vivre à travers des expériences qui marquent les esprits.
              </p>
            </div>
            
            {/* Valeur 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-exp-yellow transition-all duration-300 group">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-exp-yellow text-exp-black font-bold text-sm rounded">
                  Valeur
                </span>
              </div>
              <p className="text-gray-300 font-light leading-relaxed">
                Nous écoutons avec attention, observons avec curiosité et comprenons avec empathie. C'est dans cette attention que naissent les meilleures solutions et les stratégies les plus impactantes.
              </p>
            </div>
            
            {/* Valeur 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-exp-yellow transition-all duration-300 group">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-exp-yellow text-exp-black font-bold text-sm rounded">
                  Valeur
                </span>
              </div>
              <p className="text-gray-300 font-light leading-relaxed">
                Nous transformons les intentions en actions concrètes et mesurables. Chaque projet est une opportunité de créer un impact durable et de générer une valeur authentique pour nos partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Écoute - Layout asymétrique avec style quote */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Éléments graphiques décoratifs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-exp-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-exp-yellow/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Guillemet géant en haut à gauche */}
            <div className="relative">
              <div className="absolute -top-8 -left-4 text-exp-yellow text-[200px] font-serif leading-none opacity-20 select-none">
                “
              </div>
              
              {/* Contenu principal - Layout asymétrique */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Colonne gauche - Titre avec accent jaune */}
                <div className="lg:col-span-5">
                  <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-block">
                      <div className="px-6 py-2 bg-exp-black text-exp-yellow text-sm font-bold tracking-wider rounded-full">
                        NOTRE APPROCHE
                      </div>
                    </div>
                    
                    {/* Titre avec éléments graphiques */}
                    <div className="relative">
                      <h2 className="text-5xl lg:text-6xl font-thin text-exp-black leading-tight">
                        Les yeux, les oreilles{' '}
                        <span className="relative inline-block">
                          <span className="relative z-10 text-exp-black font-bold">grand ouverts</span>
                          <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow -z-0"></span>
                        </span>
                      </h2>
                      
                      {/* Ligne décorative */}
                      <div className="mt-8 flex items-center gap-4">
                        <div className="w-20 h-1 bg-exp-yellow"></div>
                        <div className="w-12 h-1 bg-exp-yellow/50"></div>
                        <div className="w-8 h-1 bg-exp-yellow/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Colonne droite - Citation avec design moderne */}
                <div className="lg:col-span-7">
                  <div className="relative">
                    {/* Carte avec ombre et bordure */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl shadow-2xl border-l-8 border-exp-yellow">
                      <blockquote className="space-y-6">
                        <p className="text-2xl lg:text-3xl text-gray-800 font-light leading-relaxed italic">
                          Nous écoutons, observons et comprenons avant d'agir.
                        </p>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                          C'est dans cette attention que naissent les meilleures solutions.
                        </p>
                      </blockquote>
                      
                      {/* Icônes décoratives */}
                      <div className="mt-8 flex gap-6">
                        <div className="flex items-center gap-3 text-gray-400">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span className="text-sm font-medium">Observer</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                          </svg>
                          <span className="text-sm font-medium">Écouter</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Cercle décoratif en arrière-plan */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-exp-yellow rounded-full opacity-20 blur-xl -z-10"></div>
                  </div>
                </div>
              </div>
              
              {/* Guillemet géant en bas à droite */}
              <div className="absolute -bottom-12 right-0 text-exp-yellow text-[200px] font-serif leading-none opacity-20 select-none">
                ”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages - Fond blanc avec images */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-thin text-exp-black mb-20 text-center leading-tight tracking-tight">
            Ce qu'ils disent de nous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Témoignage 1 */}
            <div className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-exp-yellow to-yellow-600 flex items-center justify-center text-exp-black text-3xl font-medium shadow-lg">
                  M
                </div>
                <div>
                  <div className="font-medium text-exp-black text-lg">Marie Tremblay</div>
                  <div className="text-sm text-gray-600 font-light">Directrice Marketing</div>
                  <div className="text-xs text-exp-yellow font-medium">TechCorp</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                "Expérience Collective a transformé notre approche marketing. 
                Leur capacité à comprendre nos enjeux et à proposer des solutions innovantes 
                a dépassé toutes nos attentes."
              </p>
            </div>

            {/* Témoignage 2 */}
            <div className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-3xl font-medium shadow-lg">
                  J
                </div>
                <div>
                  <div className="font-medium text-exp-black text-lg">Jean Dubois</div>
                  <div className="text-sm text-gray-600 font-light">PDG</div>
                  <div className="text-xs text-exp-yellow font-medium">Innovation Plus</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                "Une équipe à l'écoute, créative et stratégique. 
                Ils ont su donner vie à notre vision et créer une identité de marque 
                qui nous ressemble vraiment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Fond noir */}
      <section className="py-32 px-6 bg-exp-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-thin text-white mb-8 leading-tight tracking-tight">
            Prêt à transformer votre{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-exp-black font-bold">vision</span>
              <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow -z-0"></span>
            </span>
            {' '}en réalité ?
          </h2>
          <p className="text-xl text-gray-300 font-light mb-12">
            Discutons de vos ambitions et découvrons ensemble comment nous pouvons vous aider.
          </p>
          <Link href="/contact">
            <button className="bg-exp-yellow text-exp-black px-10 py-4 rounded-full text-lg font-medium hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Contactez-nous
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
