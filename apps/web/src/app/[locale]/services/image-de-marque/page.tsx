import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Image de Marque & Marketing - Expérience Collective',
  description: 'Création d\'identités visuelles distinctives et stratégies de marque percutantes pour vous démarquer.',
};

export default function ImageDeMarquePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-exp-black overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <div className="absolute inset-0 bg-gradient-radial from-exp-yellow/12 via-exp-yellow/6 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-exp-yellow rounded-full blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-exp-teal rounded-full blur-3xl opacity-10 animate-float-slow"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="text-6xl font-light text-white mb-8 leading-tight">
            Image de Marque &{' '}
            <span className="relative inline-block">
              <span className="relative z-10 font-medium">Marketing</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
          </h1>
          <p className="text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            Créez une identité visuelle{' '}
            <span className="relative inline-block">
              <span className="relative z-10">distinctive</span>
              <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
            </span>
            {' '}qui marque les esprits et génère de l'engagement
          </p>
        </div>
      </section>

      {/* Section Description */}
      <section className="py-48 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <h2 className="text-5xl font-light text-exp-black mb-10 leading-tight">
                Une marque qui{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 font-medium">vous ressemble</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-loose font-light">
                Votre marque est bien plus qu'un logo. C'est l'essence de votre entreprise, ce qui vous rend unique et mémorable. Nous créons des identités visuelles cohérentes qui racontent votre histoire et résonnent avec votre audience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Du positionnement stratégique à la création graphique, en passant par le ton de voix et les guidelines, nous développons des{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">écosystèmes de marque complets</span>
                  <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
                </span>
                {' '}qui s'adaptent à tous vos points de contact.
              </p>
            </div>
            <div className="bg-gray-50 p-12 rounded-2xl">
              <h3 className="text-2xl font-medium text-exp-black mb-8">Nos expertises</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Identité visuelle</h4>
                    <p className="text-gray-600 font-light">Logo, palette de couleurs, typographie, éléments graphiques</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Positionnement de marque</h4>
                    <p className="text-gray-600 font-light">Définition de votre proposition de valeur unique</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Guide de marque</h4>
                    <p className="text-gray-600 font-light">Documentation complète pour une application cohérente</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-exp-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-exp-black mb-2">Refonte de marque</h4>
                    <p className="text-gray-600 font-light">Modernisation et évolution de votre identité existante</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Livrables */}
      <section className="py-48 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-light text-exp-black mb-6 leading-tight">
              Ce que vous{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-medium">recevez</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Un écosystème complet pour déployer votre marque avec{' '}
              <span className="relative inline-block">
                <span className="relative z-10">cohérence</span>
                <span className="absolute inset-0 bg-exp-yellow -z-0"></span>
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-4">Guide de marque</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Document complet avec toutes les règles d'utilisation de votre identité visuelle
              </p>
            </Card>

            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-4">Fichiers sources</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Tous les fichiers éditables (AI, PSD, Figma) pour une flexibilité maximale
              </p>
            </Card>

            <Card className="bg-white p-12 rounded-xl shadow-sm hover:shadow-lg transition-all duration-700 border border-gray-100 hover:border-exp-yellow/50 hover:-translate-y-2">
              <div className="w-16 h-16 bg-exp-yellow/20 rounded-xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-exp-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-exp-black mb-4">Templates</h3>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Modèles prêts à l'emploi pour vos documents, présentations et réseaux sociaux
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-48 px-6 bg-exp-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-exp-black text-2xl font-light">+</div>
          <div className="absolute top-20 right-20 text-exp-black text-xl font-light">+</div>
          <div className="absolute bottom-20 left-20 text-exp-black text-3xl font-light">+</div>
          <div className="absolute bottom-40 right-1/4 text-exp-black text-2xl font-light">+</div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-medium text-exp-black mb-8 leading-tight">
            Prêt à créer une marque{' '}
            <span className="italic font-light">inoubliable</span> ?
          </h2>
          <p className="text-xl text-exp-black/80 mb-14 font-light leading-relaxed">
            Discutons de votre vision et créons ensemble une identité qui vous démarque
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-exp-teal hover:bg-exp-black text-white px-12 py-5 text-base font-medium rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                Démarrons votre projet
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="secondary"
                size="lg"
                className="bg-transparent hover:bg-exp-black/10 text-exp-black px-12 py-5 text-base font-medium rounded-xl border-2 border-exp-black hover:border-exp-black transition-all duration-500 transform hover:scale-105"
              >
                Voir tous les services
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
