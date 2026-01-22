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
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-thin text-white mb-12 leading-tight tracking-tight">
            Notre{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-exp-black">raison</span>
              <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow -z-0"></span>
            </span>
            {' '}d'être
          </h2>
          <p className="text-2xl text-gray-300 font-light leading-relaxed">
            Nous croyons que chaque organisation a une histoire unique à raconter. 
            Notre mission est de vous aider à la révéler, à la partager et à la faire vivre 
            à travers des expériences qui marquent les esprits et transforment les intentions en actions.
          </p>
        </div>
      </section>

      {/* Section Photo avec texte superposé - Ampoule avec idée */}
      <section className="relative h-screen bg-exp-black">
        <Image
          src="/assets/photos/ampoule-idee.png"
          alt="Les yeux, les oreilles grand ouverts"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-exp-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-6xl font-thin text-white mb-6 leading-tight tracking-tight">
              Les yeux, les oreilles{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-exp-black">grand ouverts</span>
                <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow -z-0"></span>
              </span>
            </h2>
            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
              Nous écoutons, observons et comprenons avant d'agir. 
              C'est dans cette attention que naissent les meilleures solutions.
            </p>
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
              <span className="relative z-10 text-exp-black">vision</span>
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
