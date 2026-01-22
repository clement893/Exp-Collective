'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Transformation digitale - TechCorp',
    date: '2024',
    service: 'Expérience client',
    client: 'TechCorp Inc.',
    objective: 'Optimiser le parcours client et augmenter la conversion de 50%',
    description: "Refonte complète de l'expérience digitale avec une approche centrée sur l'utilisateur. Mise en place d'outils d'analyse avancés et optimisation continue basée sur les données.",
    image: '/assets/realisations/projet-1.webp',
    results: ['+50% conversion', '+35% satisfaction', '2M€ revenus'],
  },
  {
    id: 2,
    title: 'Repositionnement de marque - InnovSolutions',
    date: '2024',
    service: 'Image de marque',
    client: 'InnovSolutions',
    objective: 'Créer une identité de marque moderne et différenciante',
    description: "Développement d'une nouvelle identité visuelle, stratégie de marque complète et campagne de lancement multi-canal. Résultat : +200% de notoriété en 6 mois.",
    image: '/assets/realisations/projet-2.jpg',
    results: ['+200% notoriété', '15 prix design', 'Top 10 marques'],
  },
  {
    id: 3,
    title: 'Stratégie de croissance - GrowthLab',
    date: '2023',
    service: 'Accompagnement stratégique',
    client: 'GrowthLab',
    objective: "Accélérer la croissance et structurer l'organisation marketing",
    description: "CMO on demand pendant 12 mois pour définir et exécuter la stratégie de croissance. Mise en place d'une équipe marketing performante et de processus optimisés.",
    image: '/assets/realisations/projet-3.jpg',
    results: ['+150% croissance', '12 mois CMO', '8 recrutements'],
  },
  {
    id: 4,
    title: 'Dashboard analytique - DataFlow',
    date: '2023',
    service: 'Mesure de performance',
    client: 'DataFlow',
    objective: 'Centraliser et visualiser les KPIs critiques en temps réel',
    description: "Conception et développement d'un tableau de bord personnalisé intégrant toutes les sources de données. Automatisation des rapports et alertes intelligentes.",
    image: '/assets/realisations/projet-4.jpg',
    results: ['-80% temps analyse', '20 KPIs live', '100% automatisé'],
  },
  {
    id: 5,
    title: "Appel d'offres gouvernemental - PublicServices",
    date: '2023',
    service: "Appels d'offres",
    client: 'PublicServices',
    objective: 'Remporter un contrat gouvernemental stratégique',
    description: "Accompagnement complet de l'analyse des exigences à la rédaction de la proposition. Résultat : contrat remporté avec la note la plus élevée.",
    image: '/assets/realisations/projet-5.jpg',
    results: ['Note 98/100', '5M€ contrat', '3 ans durée'],
  },
  {
    id: 6,
    title: 'Campagne de lancement - EcoTech',
    date: '2022',
    service: 'Image de marque',
    client: 'EcoTech',
    objective: 'Lancer un nouveau produit sur un marché compétitif',
    description: 'Stratégie de lancement 360° incluant branding, campagne digitale, relations publiques et événementiel. Plus de 10 000 leads qualifiés générés.',
    image: '/assets/realisations/projet-6.jpg',
    results: ['10K leads', '+300% trafic', '50 médias'],
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 bg-exp-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-thin mb-6 leading-tight tracking-tight">
              De la vision à{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-exp-black font-bold">la réussite</span>
                <span className="absolute inset-x-0 top-0 h-full bg-exp-yellow -z-0"></span>
              </span>
            </h1>
            <p className="text-xl text-white/70 font-light">
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                  Rechercher
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Mot-clé, client..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-exp-yellow focus:border-transparent transition-all"
                />
              </div>

              {/* Service Filter */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service
                </label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-exp-yellow focus:border-transparent transition-all"
                >
                  <option value="all">Tous les services</option>
                  <option value="Accompagnement stratégique">Accompagnement stratégique</option>
                  <option value="Image de marque">Image de marque</option>
                  <option value="Expérience client">Expérience client</option>
                  <option value="Mesure de performance">Mesure de performance</option>
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                  Année
                </label>
                <select
                  id="year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-exp-yellow focus:border-transparent transition-all"
                >
                  <option value="all">Toutes les années</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay avec badge service */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-4 py-2 bg-exp-yellow text-exp-black text-sm font-bold rounded-full shadow-lg">
                        {project.service}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-4 py-2 bg-exp-black text-exp-yellow text-sm font-bold rounded-full shadow-lg">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-exp-black mb-3 group-hover:text-exp-yellow transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-exp-black">Client :</span> {project.client}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-exp-black">Objectif :</span> {project.objective}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.results.map((result, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {result}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full px-6 py-3 bg-exp-black text-exp-yellow font-bold rounded-lg hover:bg-exp-yellow hover:text-exp-black transition-all duration-300 group-hover:shadow-lg">
                      Voir le détail →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No results message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-400 font-light">
                  Aucun projet ne correspond à vos critères de recherche
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-exp-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-thin text-center mb-16">
              Preuves & Résultats
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-exp-yellow mb-2">50+</div>
                <div className="text-white/70 font-light">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-exp-yellow mb-2">95%</div>
                <div className="text-white/70 font-light">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-exp-yellow mb-2">+150%</div>
                <div className="text-white/70 font-light">Croissance moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-exp-yellow mb-2">6 ans</div>
                <div className="text-white/70 font-light">D'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-thin text-center text-exp-black mb-16">
              Ce que disent nos clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                  "Des résultats exceptionnels qui ont dépassé toutes nos attentes."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-exp-yellow to-yellow-600 flex items-center justify-center text-exp-black font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-medium text-exp-black">Marie D.</div>
                    <div className="text-sm text-gray-600">TechCorp</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                  "Une équipe professionnelle et à l'écoute. Un vrai partenariat."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <div className="font-medium text-exp-black">Jean T.</div>
                    <div className="text-sm text-gray-600">GrowthLab</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
                  "L'expertise et la créativité dont nous avions besoin."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-exp-yellow to-yellow-600 flex items-center justify-center text-exp-black font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-medium text-exp-black">Sophie L.</div>
                    <div className="text-sm text-gray-600">InnovSolutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-exp-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-thin mb-6 leading-tight">
              Prêt à écrire votre histoire de succès ?
            </h2>
            <p className="text-xl text-white/70 font-light mb-10">
              Faites le premier pas vers vos objectifs
            </p>
            <Link href="/contact">
              <button className="px-10 py-4 bg-exp-yellow text-exp-black font-bold text-lg rounded-lg hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Passez à l'action !
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
