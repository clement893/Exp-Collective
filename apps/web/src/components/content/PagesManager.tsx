/**
 * Pages Manager Component
 *
 * Modern CRUD interface for managing content pages with improved design and UX.
 *
 * @component
 */
'use client';

import { useState } from 'react';
import { logger } from '@/lib/logger';
import { Card, DataTable, Button, Modal, Input, Textarea, Badge, Alert } from '@/components/ui';
import type { Column } from '@/components/ui/DataTable';
import { Plus, Edit, Trash2, Eye, FileText, Search, Calendar, Globe, Archive, FileEdit } from 'lucide-react';
import { Link } from '@/i18n/routing';

export interface Page extends Record<string, unknown> {
  id: number;
  title: string;
  slug: string;
  content: string;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface PagesManagerProps {
  pages?: Page[];
  onPageCreate?: (page: Omit<Page, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  onPageUpdate?: (id: number, page: Partial<Page>) => Promise<void>;
  onPageDelete?: (id: number) => Promise<void>;
  className?: string;
}

/**
 * Pages Manager Component
 *
 * Modern design with improved UX for managing content pages.
 */
export default function PagesManager({
  pages = [],
  onPageCreate,
  onPageUpdate,
  onPageDelete,
  className,
}: PagesManagerProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    status: 'draft' as Page['status'],
  });

  // Filter pages based on search query
  const filteredPages = pages.filter((page) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      page.title.toLowerCase().includes(query) ||
      page.slug.toLowerCase().includes(query) ||
      page.content.toLowerCase().includes(query)
    );
  });

  const columns: Column<Page>[] = [
    {
      key: 'title',
      label: 'Titre',
      sortable: true,
      render: (_value: unknown, page: Page) => (
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-foreground truncate">{page.title || 'Sans titre'}</div>
            <div className="text-xs text-muted-foreground truncate">/{page.slug}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Statut',
      sortable: true,
      render: (_value: unknown, page: Page) => {
        const statusConfig: Record<
          Page['status'],
          { label: string; variant: 'default' | 'success' | 'warning' | 'danger'; color: string }
        > = {
          draft: {
            label: 'Brouillon',
            variant: 'default',
            color: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
          },
          published: {
            label: 'Publié',
            variant: 'success',
            color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
          },
          archived: {
            label: 'Archivé',
            variant: 'warning',
            color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
          },
        };
        const config = statusConfig[page.status];
        return (
          <Badge variant={config.variant} className={config.color}>
            {config.label}
          </Badge>
        );
      },
    },
    {
      key: 'updated_at',
      label: 'Dernière modification',
      sortable: true,
      render: (_value: unknown, page: Page) => {
        const date = new Date(page.updated_at);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        let dateDisplay: string;
        if (diffDays === 0) {
          dateDisplay = "Aujourd'hui";
        } else if (diffDays === 1) {
          dateDisplay = 'Hier';
        } else if (diffDays < 7) {
          dateDisplay = `Il y a ${diffDays} jours`;
        } else {
          dateDisplay = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
        }

        return (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{dateDisplay}</span>
          </div>
        );
      },
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (_value: unknown, page: Page) => (
        <div className="flex items-center gap-2">
          {page.status === 'published' && (
            <Link href={`/pages/${page.slug}`} target="_blank">
              <Button variant="ghost" size="sm" title="Voir la page">
                <Eye className="w-4 h-4" />
              </Button>
            </Link>
          )}
          <Link href={`/pages/${page.slug}/edit`}>
            <Button variant="ghost" size="sm" title="Modifier">
              <Edit className="w-4 h-4" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleDelete(page.id)}
            title="Supprimer"
            className="text-danger-600 hover:text-danger-700 dark:text-danger-400 dark:hover:text-danger-300"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  const handleCreate = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      status: 'draft',
    });
    setSelectedPage(null);
    setError(null);
    setIsCreateModalOpen(true);
  };

  const handleEdit = (page: Page) => {
    setFormData({
      title: page.title,
      slug: page.slug,
      content: page.content,
      status: page.status,
    });
    setSelectedPage(page);
    setError(null);
    setIsEditModalOpen(true);
  };

  const handleView = (page: Page) => {
    if (page.status === 'published') {
      window.open(`/pages/${page.slug}`, '_blank');
    } else {
      logger.log('View page:', page);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette page ? Cette action est irréversible.')) {
      return;
    }
    try {
      if (onPageDelete) {
        await onPageDelete(id);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Échec de la suppression de la page');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      if (selectedPage && onPageUpdate) {
        await onPageUpdate(selectedPage.id, formData);
        setIsEditModalOpen(false);
      } else if (onPageCreate) {
        await onPageCreate(formData);
        setIsCreateModalOpen(false);
      }
      setFormData({
        title: '',
        slug: '',
        content: '',
        status: 'draft',
      });
      setSelectedPage(null);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Échec de l\'enregistrement de la page');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (value: string) => {
    setFormData({
      ...formData,
      title: value,
      slug: formData.slug || generateSlug(value),
    });
  };

  // Stats
  const stats = {
    total: pages.length,
    published: pages.filter((p) => p.status === 'published').length,
    draft: pages.filter((p) => p.status === 'draft').length,
    archived: pages.filter((p) => p.status === 'archived').length,
  };

  return (
    <div className={className}>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10 border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total</p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{stats.total}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/10 border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400">Publiées</p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">{stats.published}</p>
            </div>
            <Globe className="w-8 h-8 text-green-500 dark:text-green-400" />
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/20 dark:to-gray-900/10 border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Brouillons</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.draft}</p>
            </div>
            <FileEdit className="w-8 h-8 text-gray-500 dark:text-gray-400" />
          </div>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/10 border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Archivées</p>
              <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">{stats.archived}</p>
            </div>
            <Archive className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
          </div>
        </Card>
      </div>

      {/* Main Content Card */}
      <Card
        className="shadow-lg"
        header={
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Pages de contenu</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Gérez vos pages de contenu et créez de nouvelles pages
              </p>
            </div>
            <Button onClick={handleCreate} variant="primary" size="lg" className="w-full sm:w-auto">
              <Plus className="w-5 h-5 mr-2" />
              Nouvelle page
            </Button>
          </div>
        }
      >
        {error && (
          <div className="mb-6">
            <Alert variant="error" onClose={() => setError(null)}>
              {error}
            </Alert>
          </div>
        )}

        {/* Search Bar */}
        {pages.length > 0 && (
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher une page par titre, slug ou contenu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredPages.length === 0 && !isSubmitting && (
          <div className="py-16 text-center">
            {pages.length === 0 ? (
              <>
                <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
                  <FileText className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Aucune page pour le moment</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Commencez par créer votre première page de contenu. Vous pourrez ensuite la modifier, la publier et la gérer facilement.
                </p>
                <Button onClick={handleCreate} variant="primary" size="lg">
                  <Plus className="w-5 h-5 mr-2" />
                  Créer ma première page
                </Button>
              </>
            ) : (
              <>
                <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Aucun résultat trouvé</h3>
                <p className="text-muted-foreground mb-6">
                  Aucune page ne correspond à votre recherche "{searchQuery}"
                </p>
                <Button onClick={() => setSearchQuery('')} variant="outline">
                  Réinitialiser la recherche
                </Button>
              </>
            )}
          </div>
        )}

        {/* Pages Table */}
        {filteredPages.length > 0 && (
          <div className="overflow-x-auto">
            <DataTable
              data={filteredPages}
              columns={columns}
              pageSize={10}
              searchable={false}
              className="min-w-full"
            />
          </div>
        )}
      </Card>

      {/* Create Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Créer une nouvelle page"
        size="lg"
        footer={
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setIsCreateModalOpen(false)}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'Création...' : 'Créer la page'}
            </Button>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Titre de la page *
            </label>
            <Input
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ex: À propos de nous"
              required
              className="text-base"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Le titre qui apparaîtra sur la page et dans les résultats de recherche
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Slug (URL) *
            </label>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">/</span>
              <Input
                value={formData.slug}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    slug: e.target.value,
                  })
                }
                placeholder="a-propos-de-nous"
                required
                className="flex-1 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Identifiant URL-friendly (ex: a-propos-de-nous). Généré automatiquement à partir du titre si laissé vide.
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Contenu
            </label>
            <Textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  content: e.target.value,
                })
              }
              placeholder="Rédigez le contenu de votre page ici..."
              rows={12}
              className="text-base"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Vous pouvez utiliser du HTML ou du texte brut. Un éditeur de texte riche sera disponible prochainement.
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Statut
            </label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as Page['status'],
                })
              }
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            >
              <option value="draft">Brouillon - Non visible publiquement</option>
              <option value="published">Publié - Visible publiquement</option>
              <option value="archived">Archivé - Masqué mais conservé</option>
            </select>
          </div>
        </form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Modifier la page"
        size="lg"
        footer={
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setIsEditModalOpen(false)}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'Enregistrement...' : 'Enregistrer les modifications'}
            </Button>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Titre de la page *
            </label>
            <Input
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Ex: À propos de nous"
              required
              className="text-base"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Slug (URL) *
            </label>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">/</span>
              <Input
                value={formData.slug}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    slug: e.target.value,
                  })
                }
                placeholder="a-propos-de-nous"
                required
                className="flex-1 text-base"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Attention : Changer le slug peut casser les liens existants vers cette page.
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Contenu
            </label>
            <Textarea
              value={formData.content}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  content: e.target.value,
                })
              }
              placeholder="Rédigez le contenu de votre page ici..."
              rows={12}
              className="text-base"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Statut
            </label>
            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as Page['status'],
                })
              }
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            >
              <option value="draft">Brouillon - Non visible publiquement</option>
              <option value="published">Publié - Visible publiquement</option>
              <option value="archived">Archivé - Masqué mais conservé</option>
            </select>
          </div>
        </form>
      </Modal>
    </div>
  );
}
