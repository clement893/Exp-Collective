'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Select from '@/components/ui/Select';
import Input from '@/components/ui/Input';

const projects = [
  {
    id: 1,
    title: 'Transformation digitale - TechCorp',
    date: '2024',
    service: 'Expérience client',
    client: 'TechCorp Inc.',
    objective: 'Optimiser le parcours client et augmenter la conversion de 50%',
    description: 'Refonte complète de l'expérience digitale avec une approche centrée sur l'utilisateur. Mise en place d'outils d'analyse avancés et optimisation continue basée sur les données.',
  },
  {
    id: 2,
    title: 'Repositionnement de marque - InnovSolutions',
    date: '2024',
    service: 'Image de marque',
    client: 'InnovSolutions',
    objective: 'Créer une identité de marque moderne et différenciante',
    description: 'Développement d'une nouvelle identité visuelle, stratégie de marque complète et campagne de lancement multi-canal. Résultat : +200% de notoriété en 6 mois.',
  },
  {
    id: 3,
    title: 'Stratégie de croissance - GrowthLab',
    date: '2023',
    service: 'Accompagnement stratégique',
    client: 'GrowthLab',
    objective: 'Accélérer la croissance et structurer l'organisation marketing',
    description: 'CMO on demand pendant 12 mois pour définir et exécuter la stratégie de croissance. Mise en place d'une équipe marketing performante et de processus optimisés.',
  },
  {
    id: 4,
    title: 'Dashboard analytique - DataFlow',
    date: '2023',
    service: 'Mesure de performance',
    client: 'DataFlow',
    objective: 'Centraliser et visualiser les KPIs critiques en temps réel',
    description: 'Conception et développement d'un tableau de bord personnalisé intégrant toutes les sources de données. Automatisation des rapports et alertes intelligentes.',
  },
  {
    id: 5,
    title: 'Appel d'offres gouvernemental - PublicServices',
    date: '2023',
    service: 'Appels d'offres',
    client: 'PublicServices',
    objective: 'Remporter un contrat gouvernemental stratégique',
    description: 'Accompagnement complet de l'analyse des exigences à la rédaction de la proposition. Résultat : contrat remporté avec la note la plus élevée.',
  },
  {
    id: 6,
    title: 'Campagne de lancement - EcoTech',
    date: '2022',
    service: 'Image de marque',
    client: 'EcoTech',
    objective: 'Lancer un nouveau produit sur un marché compétitif',
    description: 'Stratégie de lancement 360° incluant branding, campagne digitale, relations publiques et événementiel. Plus de 10 000 leads qualifiés générés.',
  },
];

export default function RealisationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService = selectedService === 'all' || project.service === selectedService;
    const matchesYear = selectedYear === 'all' || project.date === selectedYear;
    
    return matchesSearch && matchesService && matchesYear;
  });

  return (
    <div className="min-h-screen bg-exp-white">
      {/* Hero Section */}
      <section className="py-20 bg-exp-black text-exp-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              De la vision à <span className="bg-exp-yellow text-exp-black px-2">la réussite</span>
            </h1>
            <p className="text-xl text-exp-white/80">
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-exp-black/5 border-b border-exp-gray/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-bold text-exp-black mb-2">
                  Rechercher
                </label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Mot-clé, client..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Service Filter */}
              <div>
                <label htmlFor="service" className="block text-sm font-bold text-exp-black mb-2">
                  Service
                </label>
                <Select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full"
                >
                  <option value="all">Tous les services</option>
                  <option value="Accompagnement stratégique">Accompagnement stratégique</option>
                  <option value="Image de marque">Image de marque</option>
                  <option value="Expérience client">Expérience client</option>
                  <option value="Mesure de performance">Mesure de performance</option>
                  <option value="Appels d'offres">Appels d'offres</option>
                </Select>
              </div>

              {/* Year Filter */}
              <div>
                <label htmlFor="year" className="block text-sm font-bold text-exp-black mb-2">
                  Année
                </label>
                <Select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full"
                >
                  <option value="all">Toutes les années</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </Select>
              </div>
            </div>

            {/* Reset Button */}
            {(searchTerm || selectedService !== 'all' || selectedYear !== 'all') && (
              <div className="mt-4 text-center">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedService('all');
                    setSelectedYear('all');
                  }}
                  className="text-exp-gray hover:text-exp-black"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-exp-gray">Aucun projet ne correspond à vos critères de recherche.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-exp-yellow">
                    <div className="p-6 space-y-4">
                      {/* Project Image Placeholder */}
                      <div className="w-full h-48 bg-gradient-to-br from-exp-yellow/20 to-exp-teal/20 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-exp-yellow mb-2">
                            <span className="bg-exp-yellow text-exp-black px-3 py-1 rounded">exp</span>
                          </div>
                          <p className="text-sm text-exp-gray">Image du projet</p>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="inline-block px-3 py-1 bg-exp-yellow text-exp-black text-xs font-bold rounded-full">
                            {project.service}
                          </span>
                          <span className="text-sm text-exp-gray">{project.date}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-exp-black group-hover:text-exp-yellow transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm text-exp-gray">
                          <span className="font-semibold">Client :</span> {project.client}
                        </p>
                        
                        <p className="text-sm text-exp-gray">
                          <span className="font-semibold">Objectif :</span> {project.objective}
                        </p>
                        
                        <p className="text-exp-gray leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button 
                          variant="ghost" 
                          className="text-exp-black hover:text-exp-yellow group-hover:translate-x-2 transition-transform"
                        >
                          Voir le détail →
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-exp-black text-exp-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Preuves & <span className="bg-exp-yellow text-exp-black px-2">Résultats</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-exp-yellow mb-2">50+</div>
                <p className="text-exp-white/80">Projets réalisés</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-exp-yellow mb-2">95%</div>
                <p className="text-exp-white/80">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-exp-yellow mb-2">+150%</div>
                <p className="text-exp-white/80">Croissance moyenne</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-exp-yellow mb-2">6 ans</div>
                <p className="text-exp-white/80">D'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-exp-black mb-12 text-center">
              Ce que disent nos <span className="bg-exp-yellow px-2">clients</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 border-2 border-exp-gray/20">
                <div className="space-y-4">
                  <div className="flex gap-1 text-exp-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-exp-gray italic text-sm">
                    "Des résultats exceptionnels qui ont dépassé toutes nos attentes."
                  </p>
                  <p className="font-bold text-exp-black text-sm">Marie D., TechCorp</p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-exp-gray/20">
                <div className="space-y-4">
                  <div className="flex gap-1 text-exp-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-exp-gray italic text-sm">
                    "Une équipe professionnelle et à l'écoute. Un vrai partenariat."
                  </p>
                  <p className="font-bold text-exp-black text-sm">Jean T., GrowthLab</p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-exp-gray/20">
                <div className="space-y-4">
                  <div className="flex gap-1 text-exp-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-exp-gray italic text-sm">
                    "L'expertise et la créativité dont nous avions besoin."
                  </p>
                  <p className="font-bold text-exp-black text-sm">Sophie L., InnovSolutions</p>
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
            Prêt à écrire votre histoire de succès ?
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
