'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Implement API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-exp-white">
      {/* Hero Section */}
      <section className="py-20 bg-exp-black text-exp-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lancez votre projet <span className="bg-exp-yellow text-exp-black px-2">avec nous</span>
            </h1>
            <p className="text-xl text-exp-white/80">
              Faites le premier pas vers vos objectifs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-exp-black mb-6">
                  Nos <span className="bg-exp-yellow px-2">coordonnées</span>
                </h2>
                <p className="text-lg text-exp-gray mb-8">
                  Nous sommes impatients de discuter de votre projet et de découvrir comment nous pouvons vous aider à atteindre vos objectifs.
                </p>
              </div>

              <Card className="p-6 space-y-6 border-2 border-exp-gray/20">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-exp-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-exp-black mb-1">Adresse</h3>
                    <p className="text-exp-gray">
                      Montréal, Québec<br />
                      Canada
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-exp-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-exp-black mb-1">Courriel</h3>
                    <a href="mailto:info@experience-collective.com" className="text-exp-teal hover:text-exp-yellow transition-colors">
                      info@experience-collective.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-exp-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-exp-black mb-1">Téléphone</h3>
                    <a href="tel:+15141234567" className="text-exp-teal hover:text-exp-yellow transition-colors">
                      +1 (514) 123-4567
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-exp-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-exp-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-exp-black mb-1">Horaire</h3>
                    <p className="text-exp-gray">
                      Lundi - Vendredi: 9h00 - 17h00<br />
                      Samedi - Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-exp-black mb-4">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-exp-black hover:bg-exp-yellow text-exp-white hover:text-exp-black rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-exp-black hover:bg-exp-yellow text-exp-white hover:text-exp-black rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-exp-black hover:bg-exp-yellow text-exp-white hover:text-exp-black rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 border-2 border-exp-gray/20">
                <h2 className="text-3xl font-bold text-exp-black mb-6">
                  Envoyez-nous un <span className="bg-exp-yellow px-2">message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-exp-black mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom"
                      className="w-full"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-exp-black mb-2">
                      Adresse courriel *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      className="w-full"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-exp-black mb-2">
                      Sujet *
                    </label>
                    <Select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="accompagnement-strategique">Accompagnement stratégique</option>
                      <option value="image-de-marque">Image de marque et marketing</option>
                      <option value="experience-client">Expérience client</option>
                      <option value="mesure-performance">Mesure de performance</option>
                      <option value="appels-offres">Appels d'offres</option>
                      <option value="autre">Autre</option>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-exp-black mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Parlez-nous de votre projet..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-exp-yellow text-exp-black hover:bg-exp-yellow/90 font-bold"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-exp-green/10 border border-exp-green rounded-lg text-exp-green">
                      Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                      Une erreur s'est produite. Veuillez réessayer ou nous contacter directement par courriel.
                    </div>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-exp-black/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-exp-black mb-8 text-center">
              Notre <span className="bg-exp-yellow px-2">emplacement</span>
            </h2>
            <div className="w-full h-96 bg-exp-gray/20 rounded-2xl overflow-hidden">
              {/* TODO: Integrate Google Maps */}
              <div className="w-full h-full flex items-center justify-center text-exp-gray">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>Carte Google Maps à intégrer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
