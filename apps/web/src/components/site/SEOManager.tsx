/**
 * SEO Manager Component
 * 
 * Component for managing SEO settings
 * 
 * @component
 */

'use client';

import { useState, useEffect } from 'react';
import { Card, Button, Input, Textarea, LoadingSkeleton, Alert } from '@/components/ui';
import { seoAPI, type SEOSettings } from '@/lib/api/seo';
import { Save } from 'lucide-react';
import { useToast } from '@/lib/toast';

export default function SEOManager() {
  const { success: showSuccessToast, error: showErrorToast } = useToast();
  const [settings, setSettings] = useState<SEOSettings>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await seoAPI.getSettings();
      setSettings(data.settings || {});
    } catch (err) {
      const errorMessage = 'Erreur lors du chargement des paramètres SEO';
      setError(errorMessage);
      console.error(err);
      showErrorToast(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setError(null);
      setSuccess(false);
      await seoAPI.updateSettings(settings);
      setSuccess(true);
      showSuccessToast('Paramètres SEO sauvegardés avec succès');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      const errorMessage = 'Erreur lors de la sauvegarde';
      setError(errorMessage);
      showErrorToast(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <LoadingSkeleton variant="card" count={3} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert variant="success" onClose={() => setSuccess(false)}>
          Paramètres SEO sauvegardés avec succès
        </Alert>
      )}

      {/* Paramètres généraux */}
      <Card title="Paramètres Généraux">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Titre du site
            </label>
            <Input
              value={settings.title || ''}
              onChange={(e) => setSettings({ ...settings, title: e.target.value })}
              placeholder="Titre SEO (max 60 caractères)"
              maxLength={60}
            />
            <p className="text-xs text-muted-foreground mt-1">
              {settings.title?.length || 0}/60 caractères
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Description
            </label>
            <Textarea
              value={settings.description || ''}
              onChange={(e) => setSettings({ ...settings, description: e.target.value })}
              placeholder="Description SEO (max 160 caractères)"
              maxLength={160}
              rows={3}
            />
            <p className="text-xs text-muted-foreground mt-1">
              {settings.description?.length || 0}/160 caractères
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Mots-clés
            </label>
            <Input
              value={settings.keywords || ''}
              onChange={(e) => setSettings({ ...settings, keywords: e.target.value })}
              placeholder="mot-clé1, mot-clé2, mot-clé3"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Séparez les mots-clés par des virgules
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Robots
            </label>
            <Input
              value={settings.robots || 'index, follow'}
              onChange={(e) => setSettings({ ...settings, robots: e.target.value })}
              placeholder="index, follow"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Exemples: index, follow | noindex, nofollow
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              URL Canonique
            </label>
            <Input
              value={settings.canonical_url || ''}
              onChange={(e) => setSettings({ ...settings, canonical_url: e.target.value })}
              placeholder="https://example.com"
              type="url"
            />
          </div>
        </div>
      </Card>

      {/* Open Graph */}
      <Card title="Open Graph (Facebook, LinkedIn)">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Titre OG
            </label>
            <Input
              value={settings.og_title || ''}
              onChange={(e) => setSettings({ ...settings, og_title: e.target.value })}
              placeholder="Titre pour les réseaux sociaux"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Description OG
            </label>
            <Textarea
              value={settings.og_description || ''}
              onChange={(e) => setSettings({ ...settings, og_description: e.target.value })}
              placeholder="Description pour les réseaux sociaux"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Image OG
            </label>
            <Input
              value={settings.og_image || ''}
              onChange={(e) => setSettings({ ...settings, og_image: e.target.value })}
              placeholder="URL de l'image (1200x630px recommandé)"
              type="url"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Type OG
            </label>
            <Input
              value={settings.og_type || 'website'}
              onChange={(e) => setSettings({ ...settings, og_type: e.target.value })}
              placeholder="website, article, etc."
            />
          </div>
        </div>
      </Card>

      {/* Twitter Card */}
      <Card title="Twitter Card">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Type de carte Twitter
            </label>
            <Input
              value={settings.twitter_card || 'summary_large_image'}
              onChange={(e) => setSettings({ ...settings, twitter_card: e.target.value })}
              placeholder="summary_large_image"
            />
            <p className="text-xs text-muted-foreground mt-1">
              summary, summary_large_image
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Titre Twitter
            </label>
            <Input
              value={settings.twitter_title || ''}
              onChange={(e) => setSettings({ ...settings, twitter_title: e.target.value })}
              placeholder="Titre pour Twitter"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Description Twitter
            </label>
            <Textarea
              value={settings.twitter_description || ''}
              onChange={(e) => setSettings({ ...settings, twitter_description: e.target.value })}
              placeholder="Description pour Twitter"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Image Twitter
            </label>
            <Input
              value={settings.twitter_image || ''}
              onChange={(e) => setSettings({ ...settings, twitter_image: e.target.value })}
              placeholder="URL de l'image (1200x675px recommandé)"
              type="url"
            />
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={isSaving}
        >
          <Save className="w-4 h-4 mr-2" />
          {isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
        </Button>
      </div>
    </div>
  );
}
