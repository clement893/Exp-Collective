import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'À Propos - Expérience Collective',
  description: 'Découvrez l'histoire, la vision et l'équipe derrière Expérience Collective.',
};

const teamMembers = [
  {
    id: 1,
    name: 'Sophie Laval',
    role: 'Fondatrice & Stratège en chef',
    bio: 'Avec plus de 15 ans d'expérience en marketing stratégique, Sophie guide les entreprises vers l'excellence.',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Marc Dubois',
    role: 'Directeur Créatif',
    bio: 'Passionné par l'innovation et le design, Marc transforme les idées en expériences visuelles mémorables.',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Julie Chen',
    role: 'Experte en Transformation Digitale',
    bio: 'Spécialiste de l'expérience client et des technologies émergentes, Julie pilote la transformation digitale.',
    linkedin: '#',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-exp-white">
      {/* Hero Section */}
      <section className="py-20 bg-exp-black text-exp-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Qui <span className="bg-exp-yellow text-exp-black px-2">sommes-nous</span> ?
            </h1>
            <p className="text-xl text-exp-white/80">
              Une équipe passionnée dédiée à transformer vos ambitions en réalité
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-exp-black">
                  Notre <span className="bg-exp-yellow px-2">histoire</span>
                </h2>
                <p className="text-lg text-exp-gray leading-relaxed">
                  Fondée en 2018, <span className="font-bold text-exp-black">Expérience Collective</span> est née 
                  d'une vision simple mais puissante : créer une agence où la stratégie, la créativité et les données 
                  se rencontrent pour générer un impact réel et mesurable.
                </p>
                <p className="text-lg text-exp-gray leading-relaxed">
                  Depuis nos débuts, nous avons accompagné des dizaines d'entreprises dans leur transformation, 
                  de la startup ambitieuse à la grande organisation établie. Chaque projet est une nouvelle 
                  opportunité d'apprendre, d'innover et de repousser les limites du possible.
                </p>
              </div>
              
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-exp-yellow/30 to-exp-teal/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-exp-yellow mb-4">
                      <span className="bg-exp-yellow text-exp-black px-4 py-2 rounded-lg">exp</span>
                    </div>
                    <p className="text-2xl text-exp-black/60">Depuis 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-20 bg-exp-black text-exp-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Notre <span className="bg-exp-yellow text-exp-black px-2">vision</span> et nos valeurs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <Card className="bg-exp-white/10 border-2 border-exp-yellow/30 hover:border-exp-yellow transition-colors">
                <div className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-exp-yellow rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-exp-white">Innovation</h3>
                  <p className="text-exp-white/80">
                    Nous repoussons constamment les limites pour trouver des solutions créatives et avant-gardistes.
                  </p>
                </div>
              </Card>

              {/* Value 2 */}
              <Card className="bg-exp-white/10 border-2 border-exp-yellow/30 hover:border-exp-yellow transition-colors">
                <div className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-exp-yellow rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-exp-white">Collaboration</h3>
                  <p className="text-exp-white/80">
                    Nous croyons en la force du collectif et travaillons main dans la main avec nos clients.
                  </p>
                </div>
              </Card>

              {/* Value 3 */}
              <Card className="bg-exp-white/10 border-2 border-exp-yellow/30 hover:border-exp-yellow transition-colors">
                <div className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-exp-yellow rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-exp-white">Excellence</h3>
                  <p className="text-exp-white/80">
                    Nous visons l'excellence dans tout ce que nous faisons, avec rigueur et passion.
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-xl text-exp-white/80 leading-relaxed">
                Notre vision est de devenir le <span className="text-exp-yellow">partenaire stratégique de référence</span> pour 
                les entreprises qui osent innover et transformer leur industrie. Nous croyons qu'en combinant 
                <span className="text-exp-yellow"> écoute active</span>, <span className="text-exp-yellow">expertise pointue</span> et 
                <span className="text-exp-yellow"> engagement total</span>, nous pouvons créer un impact durable et mesurable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-exp-black mb-4 text-center">
              Notre <span className="bg-exp-yellow px-2">équipe</span>
            </h2>
            <p className="text-xl text-exp-gray text-center mb-12">
              Des experts passionnés qui mettent leur talent au service de votre succès
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.id} className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-exp-yellow">
                  <div className="p-6 space-y-4">
                    {/* Avatar Placeholder */}
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-exp-yellow to-exp-teal rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-exp-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-exp-black">{member.name}</h3>
                      <p className="text-sm text-exp-yellow font-semibold mb-2">{member.role}</p>
                      <p className="text-exp-gray leading-relaxed">{member.bio}</p>
                    </div>
                    
                    <div className="flex justify-center">
                      <a 
                        href={member.linkedin} 
                        className="w-10 h-10 bg-exp-black hover:bg-exp-yellow text-exp-white hover:text-exp-black rounded-lg flex items-center justify-center transition-colors"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-exp-black/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-exp-black mb-12 text-center">
              Nos <span className="bg-exp-yellow px-2">clients</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-center text-exp-gray">
                    <div className="text-4xl font-bold mb-2">Logo</div>
                    <p className="text-sm">Client {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-exp-black mb-12 text-center">
              Témoignages & <span className="bg-exp-yellow px-2">histoires de succès</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-exp-gray/20">
                <div className="space-y-4">
                  <div className="flex gap-1 text-exp-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-exp-gray italic">
                    "Travailler avec Expérience Collective a été transformateur pour notre entreprise. Leur approche 
                    stratégique et leur créativité ont dépassé toutes nos attentes."
                  </p>
                  <div>
                    <p className="font-bold text-exp-black">Catherine Leblanc</p>
                    <p className="text-sm text-exp-gray">VP Marketing, InnovateTech</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-exp-gray/20">
                <div className="space-y-4">
                  <div className="flex gap-1 text-exp-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-exp-gray italic">
                    "Une équipe exceptionnelle qui comprend vraiment nos besoins. Les résultats parlent d'eux-mêmes : 
                    +150% de croissance en 18 mois."
                  </p>
                  <div>
                    <p className="font-bold text-exp-black">Alexandre Roy</p>
                    <p className="text-sm text-exp-gray">Fondateur, GrowthLab</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-exp-yellow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-exp-black mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-exp-black/80 mb-8 max-w-2xl mx-auto">
            Faites le premier pas vers vos objectifs
          </p>
          <Link href="/exp/contact">
            <Button size="lg" className="bg-exp-black text-exp-white hover:bg-exp-black/90 font-bold px-12 py-6 text-lg">
              Passez à l'action !
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
