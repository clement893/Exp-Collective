/**
 * CMS Dashboard Component
 * 
 * Main dashboard component for CMS management with statistics, quick actions, and activity feed.
 * 
 * @component
 */

'use client';

import { useState, useEffect } from 'react';
import { Card, StatsCard, Button, LoadingSkeleton, Grid, Stack, Alert } from '@/components/ui';
import { Link } from '@/i18n/routing';
import { 
  FileText, 
  BookOpen, 
  Image, 
  Folder, 
  Tag, 
  Calendar, 
  Layout,
  Activity,
  Settings,
  Eye,
  Clock
} from 'lucide-react';
import { useAuthStore } from '@/lib/store';
import { cmsAPI, type CMSStats, type ActivityItem } from '@/lib/api/cms';

export interface CMSDashboardProps {
  className?: string;
}

export default function CMSDashboard({ className }: CMSDashboardProps) {
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<CMSStats>({
    totalPages: 0,
    totalPosts: 0,
    totalMedia: 0,
    totalCategories: 0,
    totalTags: 0,
    scheduledContent: 0,
    pendingReview: 0,
  });
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);

  useEffect(() => {
    loadData();
    // Rafraîchir les données toutes les 30 secondes
    const interval = setInterval(() => {
      loadData();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Charger les statistiques et l'activité en parallèle
      const [statsData, activityData] = await Promise.all([
        cmsAPI.getStats().catch((err) => {
          console.error('Failed to load CMS stats:', err);
          // Retourner des valeurs par défaut en cas d'erreur
          return {
            totalPages: 0,
            totalPosts: 0,
            totalMedia: 0,
            totalCategories: 0,
            totalTags: 0,
            scheduledContent: 0,
            pendingReview: 0,
          };
        }),
        cmsAPI.getActivity(10).catch((err) => {
          console.error('Failed to load CMS activity:', err);
          return [];
        }),
      ]);

      setStats(statsData);
      setRecentActivity(activityData);
    } catch (err) {
      console.error('Failed to load CMS data:', err);
      setError('Erreur lors du chargement des données. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    { 
      label: 'Nouvelle Page', 
      href: '/content/pages?new=true', 
      icon: FileText, 
      variant: 'primary' as const,
      description: 'Créer une nouvelle page'
    },
    { 
      label: 'Nouvel Article', 
      href: '/content/posts?new=true', 
      icon: BookOpen, 
      variant: 'primary' as const,
      description: 'Créer un nouvel article de blog'
    },
    { 
      label: 'Upload Média', 
      href: '/content/media?upload=true', 
      icon: Image, 
      variant: 'secondary' as const,
      description: 'Téléverser un fichier média'
    },
    { 
      label: 'Gérer Menus', 
      href: '/dashboard/site/menus', 
      icon: Settings, 
      variant: 'secondary' as const,
      description: 'Gérer les menus de navigation'
    },
  ];

  const contentLinks = [
    {
      title: 'Pages',
      description: 'Gérer les pages statiques',
      href: '/content/pages',
      icon: FileText,
      iconColor: 'text-primary-600 dark:text-primary-400',
      count: stats.totalPages,
    },
    {
      title: 'Articles',
      description: 'Gérer les articles de blog',
      href: '/content/posts',
      icon: BookOpen,
      iconColor: 'text-secondary-600 dark:text-secondary-400',
      count: stats.totalPosts,
    },
    {
      title: 'Médias',
      description: 'Bibliothèque de médias',
      href: '/content/media',
      icon: Image,
      iconColor: 'text-success-600 dark:text-success-400',
      count: stats.totalMedia,
    },
    {
      title: 'Catégories',
      description: 'Organiser le contenu',
      href: '/content/categories',
      icon: Folder,
      iconColor: 'text-warning-600 dark:text-warning-400',
      count: stats.totalCategories,
    },
    {
      title: 'Tags',
      description: 'Gérer les tags',
      href: '/content/tags',
      icon: Tag,
      iconColor: 'text-info-600 dark:text-info-400',
      count: stats.totalTags,
    },
    {
      title: 'Templates',
      description: 'Modèles de contenu',
      href: '/content/templates',
      icon: Layout,
      iconColor: 'text-primary-600 dark:text-primary-400',
    },
    {
      title: 'Planification',
      description: 'Contenu planifié',
      href: '/content/schedule',
      icon: Calendar,
      iconColor: 'text-secondary-600 dark:text-secondary-400',
      count: stats.scheduledContent,
    },
  ];

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'À l\'instant';
    if (diffMins < 60) return `Il y a ${diffMins} min`;
    if (diffHours < 24) return `Il y a ${diffHours} h`;
    if (diffDays < 7) return `Il y a ${diffDays} j`;
    return date.toLocaleDateString('fr-FR');
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'page':
        return FileText;
      case 'post':
        return BookOpen;
      case 'media':
        return Image;
      default:
        return Activity;
    }
  };

  const getActivityColor = (action: string) => {
    switch (action) {
      case 'published':
        return 'text-success-600 dark:text-success-400';
      case 'created':
        return 'text-primary-600 dark:text-primary-400';
      case 'updated':
        return 'text-info-600 dark:text-info-400';
      default:
        return 'text-muted-foreground';
    }
  };

  if (isLoading) {
    return (
      <div className={className}>
        <Grid columns={{ mobile: 1, tablet: 2, desktop: 4 }} gap="normal" className="mb-6">
          <LoadingSkeleton variant="card" className="h-32" />
          <LoadingSkeleton variant="card" className="h-32" />
          <LoadingSkeleton variant="card" className="h-32" />
          <LoadingSkeleton variant="card" className="h-32" />
        </Grid>
        <LoadingSkeleton variant="card" count={2} />
      </div>
    );
  }

  return (
    <div className={className}>
      {error && (
        <Alert variant="error" onClose={() => setError(null)} className="mb-6">
          {error}
        </Alert>
      )}

      {/* Statistiques principales */}
      <Grid columns={{ mobile: 1, tablet: 2, desktop: 4 }} gap="normal" className="mb-6">
        <Link href="/content/pages" className="block">
          <StatsCard
            title="Pages"
            value={stats.totalPages}
            icon={<FileText className="w-6 h-6" />}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          />
        </Link>
        <Link href="/content/posts" className="block">
          <StatsCard
            title="Articles"
            value={stats.totalPosts}
            icon={<BookOpen className="w-6 h-6" />}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          />
        </Link>
        <Link href="/content/media" className="block">
          <StatsCard
            title="Médias"
            value={stats.totalMedia}
            icon={<Image className="w-6 h-6" />}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          />
        </Link>
        <Link href="/content/schedule" className="block">
          <StatsCard
            title="Planifiés"
            value={stats.scheduledContent}
            icon={<Calendar className="w-6 h-6" />}
            className="hover:shadow-lg transition-shadow cursor-pointer"
          />
        </Link>
      </Grid>

      <Grid columns={{ mobile: 1, tablet: 2 }} gap="loose" className="mb-6">
        {/* Actions rapides */}
        <Card title="Actions Rapides">
          <Stack gap="normal">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.href} href={action.href}>
                  <Button variant={action.variant} className="w-full justify-start gap-3 h-auto py-3">
                    <Icon className="w-5 h-5" />
                    <div className="text-left flex-1">
                      <div className="font-semibold">{action.label}</div>
                      <div className="text-xs opacity-90">{action.description}</div>
                    </div>
                  </Button>
                </Link>
              );
            })}
          </Stack>
        </Card>

        {/* Activité récente */}
        <Card title="Activité Récente">
          {recentActivity.length > 0 ? (
            <Stack gap="normal">
              {recentActivity.map((activity) => {
                const ActivityIcon = getActivityIcon(activity.type);
                const getActivityLink = () => {
                  if (activity.type === 'page' && activity.resource_slug) {
                    // Essayer de trouver la page dans la liste pour avoir l'ID
                    return `/content/pages`;
                  }
                  if (activity.type === 'post') {
                    // Utiliser l'ID pour aller à la page d'édition
                    return `/content/posts/${activity.resource_id}/edit`;
                  }
                  if (activity.type === 'media') {
                    return `/content/media`;
                  }
                  return null;
                };
                const activityLink = getActivityLink();
                const content = (
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                    <ActivityIcon className={`w-5 h-5 mt-0.5 ${getActivityColor(activity.action)}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {activity.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.action === 'published' ? 'Publié' : 
                         activity.action === 'created' ? 'Créé' : 
                         activity.action === 'updated' ? 'Modifié' : activity.action} par {activity.author}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      {formatDate(activity.timestamp)}
                    </div>
                  </div>
                );
                
                return activityLink ? (
                  <Link key={activity.id} href={activityLink}>
                    {content}
                  </Link>
                ) : (
                  <div key={activity.id}>
                    {content}
                  </div>
                );
              })}
            </Stack>
          ) : (
            <div className="text-center py-8">
              <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-sm text-muted-foreground">Aucune activité récente</p>
            </div>
          )}
        </Card>
      </Grid>

      {/* Liens rapides vers le contenu */}
      <Card title="Gestion de Contenu">
        <Grid columns={{ mobile: 2, tablet: 3, desktop: 4 }} gap="normal">
          {contentLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className="group p-4 border border-border rounded-lg hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md transition-all bg-background"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-muted/50 group-hover:bg-primary-50 dark:group-hover:bg-primary-950/30 transition-colors ${link.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {link.count !== undefined && (
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30 px-2 py-1 rounded-full">
                      {link.count}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1">
                  {link.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {link.description}
                </p>
              </Link>
            );
          })}
        </Grid>
      </Card>

      {/* Contenu en attente de révision */}
      {stats.pendingReview > 0 && (
        <Card 
          title="Contenu en Attente" 
          className="mt-6 border-warning-200 dark:border-warning-800 bg-warning-50/50 dark:bg-warning-950/20"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-warning-600 dark:text-warning-400" />
              <div>
                <p className="font-semibold text-foreground">
                  {stats.pendingReview} élément{stats.pendingReview > 1 ? 's' : ''} en attente de révision
                </p>
                <p className="text-sm text-muted-foreground">
                  Contenu en brouillon nécessitant une révision
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="/content/pages">
                <Button variant="secondary" size="sm">
                  Voir les pages
                </Button>
              </Link>
              <Link href="/content/posts">
                <Button variant="secondary" size="sm">
                  Voir les articles
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
