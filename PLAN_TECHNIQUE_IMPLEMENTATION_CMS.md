# Plan Technique d'Implémentation : Transformation Dashboard → CMS

## 📋 Vue d'Ensemble

Ce document contient le plan technique détaillé pour transformer le dashboard en CMS de gestion du site. Chaque étape est documentée avec les fichiers exacts à créer/modifier et la structure de code.

---

## 🎯 Objectif

Transformer `/dashboard` en hub CMS centralisé avec :
1. Vue d'ensemble enrichie avec statistiques CMS
2. Intégration des routes `/content/*` dans la navigation
3. Nouvelles fonctionnalités de gestion du site
4. Configuration centralisée

---

## 📦 Phase 1 : Fondations - Dashboard CMS Principal

### Tâche 1.1 : Créer le composant CMSDashboard

**Fichier à créer :** `apps/web/src/components/dashboard/CMSDashboard.tsx`

**Structure :**
```typescript
'use client';

import { useState, useEffect } from 'react';
import { Card, StatsCard, Button, LoadingSkeleton, Grid, Stack } from '@/components/ui';
import { PageHeader } from '@/components/layout';
import { Link } from '@/i18n/routing';
import { 
  FileText, 
  BookOpen, 
  Image, 
  Folder, 
  Tag, 
  Calendar, 
  Layout,
  Plus,
  TrendingUp,
  Activity,
  Settings,
  Eye
} from 'lucide-react';
import { useAuthStore } from '@/lib/store';
import { pagesAPI, postsAPI, mediaAPI } from '@/lib/api';
import MotionDiv from '@/components/motion/MotionDiv';

export interface CMSStats {
  totalPages: number;
  totalPosts: number;
  totalMedia: number;
  totalCategories: number;
  totalTags: number;
  scheduledContent: number;
  recentActivity: ActivityItem[];
  pendingReview: number;
}

export interface ActivityItem {
  id: string;
  type: 'page' | 'post' | 'media';
  title: string;
  action: 'created' | 'updated' | 'published';
  author: string;
  timestamp: string;
}

export interface CMSDashboardProps {
  className?: string;
}

export default function CMSDashboard({ className }: CMSDashboardProps) {
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<CMSStats>({
    totalPages: 0,
    totalPosts: 0,
    totalMedia: 0,
    totalCategories: 0,
    totalTags: 0,
    scheduledContent: 0,
    recentActivity: [],
    pendingReview: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setIsLoading(true);
      // Charger les statistiques depuis les APIs
      const [pages, posts, media] = await Promise.all([
        pagesAPI.list(0, 1).catch(() => []),
        postsAPI.list(0, 1).catch(() => []),
        mediaAPI.list(0, 1).catch(() => []),
      ]);

      // TODO: Implémenter les endpoints de stats
      // const statsResponse = await cmsAPI.getStats();
      
      setStats({
        totalPages: pages.length > 0 ? 100 : 0, // Placeholder
        totalPosts: posts.length > 0 ? 50 : 0, // Placeholder
        totalMedia: media.length > 0 ? 200 : 0, // Placeholder
        totalCategories: 0,
        totalTags: 0,
        scheduledContent: 0,
        recentActivity: [],
        pendingReview: 0,
      });
    } catch (error) {
      console.error('Failed to load CMS stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    { label: 'Nouvelle Page', href: '/content/pages?new=true', icon: FileText, variant: 'primary' as const },
    { label: 'Nouvel Article', href: '/content/posts?new=true', icon: BookOpen, variant: 'primary' as const },
    { label: 'Upload Média', href: '/content/media?upload=true', icon: Image, variant: 'secondary' as const },
    { label: 'Gérer Menus', href: '/dashboard/site/menus', icon: Settings, variant: 'secondary' as const },
  ];

  if (isLoading) {
    return (
      <div className={className}>
        <LoadingSkeleton variant="card" count={4} />
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Statistiques principales */}
      <Grid columns={{ mobile: 1, tablet: 2, desktop: 4 }} gap="normal" className="mb-6">
        <StatsCard
          title="Pages"
          value={stats.totalPages}
          icon={<FileText className="w-6 h-6" />}
          href="/content/pages"
        />
        <StatsCard
          title="Articles"
          value={stats.totalPosts}
          icon={<BookOpen className="w-6 h-6" />}
          href="/content/posts"
        />
        <StatsCard
          title="Médias"
          value={stats.totalMedia}
          icon={<Image className="w-6 h-6" />}
          href="/content/media"
        />
        <StatsCard
          title="Planifiés"
          value={stats.scheduledContent}
          icon={<Calendar className="w-6 h-6" />}
          href="/content/schedule"
        />
      </Grid>

      <Grid columns={{ mobile: 1, tablet: 2 }} gap="loose">
        {/* Actions rapides */}
        <Card title="Actions Rapides">
          <Stack gap="normal">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.href} href={action.href}>
                  <Button variant={action.variant} className="w-full justify-start gap-3">
                    <Icon className="w-5 h-5" />
                    {action.label}
                  </Button>
                </Link>
              );
            })}
          </Stack>
        </Card>

        {/* Activité récente */}
        <Card title="Activité Récente">
          {stats.recentActivity.length > 0 ? (
            <Stack gap="normal">
              {stats.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Activity className="w-5 h-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {activity.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.action} par {activity.author}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(activity.timestamp).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </Stack>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-8">
              Aucune activité récente
            </p>
          )}
        </Card>
      </Grid>

      {/* Liens rapides vers le contenu */}
      <Card title="Gestion de Contenu" className="mt-6">
        <Grid columns={{ mobile: 2, tablet: 3, desktop: 4 }} gap="normal">
          <Link href="/content/pages" className="p-4 border border-border rounded-lg hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h3 className="font-semibold text-foreground">Pages</h3>
            </div>
            <p className="text-sm text-muted-foreground">Gérer les pages</p>
          </Link>
          
          <Link href="/content/posts" className="p-4 border border-border rounded-lg hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <h3 className="font-semibold text-foreground">Articles</h3>
            </div>
            <p className="text-sm text-muted-foreground">Gérer les articles</p>
          </Link>

          <Link href="/content/media" className="p-4 border border-border rounded-lg hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Image className="w-5 h-5 text-success-600 dark:text-success-400" />
              <h3 className="font-semibold text-foreground">Médias</h3>
            </div>
            <p className="text-sm text-muted-foreground">Bibliothèque média</p>
          </Link>

          <Link href="/content/categories" className="p-4 border border-border rounded-lg hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-2">
              <Folder className="w-5 h-5 text-warning-600 dark:text-warning-400" />
              <h3 className="font-semibold text-foreground">Catégories</h3>
            </div>
            <p className="text-sm text-muted-foreground">Organiser le contenu</p>
          </Link>
        </Grid>
      </Card>
    </div>
  );
}
```

### Tâche 1.2 : Créer l'API client CMS

**Fichier à créer :** `apps/web/src/lib/api/cms.ts`

**Structure :**
```typescript
/**
 * CMS API
 * API client for CMS dashboard statistics and operations
 */

import { apiClient } from './client';
import { extractApiData } from './utils';

export interface CMSStats {
  totalPages: number;
  totalPosts: number;
  totalMedia: number;
  totalCategories: number;
  totalTags: number;
  scheduledContent: number;
  pendingReview: number;
}

export interface ActivityItem {
  id: string;
  type: 'page' | 'post' | 'media';
  title: string;
  action: 'created' | 'updated' | 'published' | 'deleted';
  author: string;
  author_id: number;
  timestamp: string;
  resource_id: number;
  resource_slug?: string;
}

export interface ActivityResponse {
  items: ActivityItem[];
  total: number;
}

/**
 * CMS API client
 */
export const cmsAPI = {
  /**
   * Get CMS statistics
   */
  getStats: async (): Promise<CMSStats> => {
    const response = await apiClient.get<CMSStats>('/v1/cms/stats');
    const data = extractApiData<CMSStats>(response);
    if (!data) {
      throw new Error('Failed to load CMS stats');
    }
    return data;
  },

  /**
   * Get recent activity
   */
  getActivity: async (limit = 10): Promise<ActivityItem[]> => {
    const response = await apiClient.get<ActivityResponse>('/v1/cms/activity', {
      params: { limit },
    });
    const data = extractApiData<ActivityResponse>(response);
    if (!data || !data.items) {
      return [];
    }
    return data.items;
  },

  /**
   * Get pending review items
   */
  getPendingReview: async (): Promise<number> => {
    const response = await apiClient.get<{ count: number }>('/v1/cms/pending-review');
    const data = extractApiData<{ count: number }>(response);
    return data?.count || 0;
  },
};
```

### Tâche 1.3 : Modifier la page dashboard principale

**Fichier à modifier :** `apps/web/src/app/[locale]/dashboard/page.tsx`

**Modifications :**
- Remplacer le contenu actuel par l'import et l'utilisation de `CMSDashboard`
- Conserver la structure de base avec `ErrorBoundary` et `PageHeader`

**Code :**
```typescript
'use client';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

import { useAuthStore } from '@/lib/store';
import { PageHeader } from '@/components/layout';
import { ErrorBoundary } from '@/components/errors/ErrorBoundary';
import MotionDiv from '@/components/motion/MotionDiv';
import CMSDashboard from '@/components/dashboard/CMSDashboard';
import { useTranslations } from 'next-intl';

function DashboardContent() {
  const { user } = useAuthStore();
  const t = useTranslations('dashboard');

  return (
    <MotionDiv variant="slideUp" duration="normal" className="space-y-2xl">
      <MotionDiv variant="fade" delay={100}>
        <PageHeader
          title={t('title') || `Bienvenue, ${user?.name || 'Utilisateur'} !`}
          description={t('description') || "Centre de gestion du contenu et du site"}
          breadcrumbs={[
            { label: 'Accueil', href: '/' },
            { label: 'Dashboard CMS' },
          ]}
        />
      </MotionDiv>

      <MotionDiv variant="slideUp" delay={200}>
        <CMSDashboard />
      </MotionDiv>
    </MotionDiv>
  );
}

export default function DashboardPage() {
  return (
    <ErrorBoundary>
      <DashboardContent />
    </ErrorBoundary>
  );
}
```

### Tâche 1.4 : Créer les endpoints backend pour les stats CMS

**Fichier à créer :** `backend/app/api/v1/endpoints/cms.py`

**Structure :**
```python
"""
CMS API Endpoints
Dashboard statistics and activity
"""

from typing import List
from fastapi import APIRouter, Depends, Query
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func, and_

from app.models.page import Page
from app.models.post import Post
from app.models.file import File
from app.models.tag import Category
from app.models.user import User
from app.dependencies import get_current_user, get_db

router = APIRouter()


class CMSStats(BaseModel):
    totalPages: int
    totalPosts: int
    totalMedia: int
    totalCategories: int
    totalTags: int
    scheduledContent: int
    pendingReview: int


class ActivityItem(BaseModel):
    id: str
    type: str  # page, post, media
    title: str
    action: str  # created, updated, published, deleted
    author: str
    author_id: int
    timestamp: str
    resource_id: int
    resource_slug: str | None = None


class ActivityResponse(BaseModel):
    items: List[ActivityItem]
    total: int


@router.get("/cms/stats", response_model=CMSStats, tags=["cms"])
async def get_cms_stats(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Get CMS statistics"""
    # Count pages
    pages_result = await db.execute(select(func.count(Page.id)))
    total_pages = pages_result.scalar() or 0

    # Count posts
    posts_result = await db.execute(select(func.count(Post.id)))
    total_posts = posts_result.scalar() or 0

    # Count media files
    media_result = await db.execute(select(func.count(File.id)))
    total_media = media_result.scalar() or 0

    # Count categories
    categories_result = await db.execute(select(func.count(Category.id)))
    total_categories = categories_result.scalar() or 0

    # Count tags (from tag model)
    from app.models.tag import Tag
    tags_result = await db.execute(select(func.count(Tag.id)))
    total_tags = tags_result.scalar() or 0

    # Count scheduled content (posts/pages with future published_at)
    from datetime import datetime
    scheduled_pages = await db.execute(
        select(func.count(Page.id)).where(
            and_(
                Page.status == 'draft',
                Page.published_at > datetime.utcnow()
            )
        )
    )
    scheduled_posts = await db.execute(
        select(func.count(Post.id)).where(
            and_(
                Post.status == 'draft',
                Post.published_at > datetime.utcnow()
            )
        )
    )
    scheduled_content = (scheduled_pages.scalar() or 0) + (scheduled_posts.scalar() or 0)

    # Count pending review (draft content)
    pending_pages = await db.execute(
        select(func.count(Page.id)).where(Page.status == 'draft')
    )
    pending_posts = await db.execute(
        select(func.count(Post.id)).where(Post.status == 'draft')
    )
    pending_review = (pending_pages.scalar() or 0) + (pending_posts.scalar() or 0)

    return CMSStats(
        totalPages=total_pages,
        totalPosts=total_posts,
        totalMedia=total_media,
        totalCategories=total_categories,
        totalTags=total_tags,
        scheduledContent=scheduled_content,
        pendingReview=pending_review,
    )


@router.get("/cms/activity", response_model=ActivityResponse, tags=["cms"])
async def get_cms_activity(
    limit: int = Query(10, ge=1, le=100),
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Get recent CMS activity"""
    activities: List[ActivityItem] = []

    # Get recent pages
    pages_result = await db.execute(
        select(Page, User)
        .join(User, Page.user_id == User.id)
        .order_by(Page.updated_at.desc())
        .limit(limit)
    )
    for page, user in pages_result.all():
        activities.append(ActivityItem(
            id=f"page_{page.id}",
            type="page",
            title=page.title,
            action="published" if page.status == "published" else "updated",
            author=user.name or user.email,
            author_id=user.id,
            timestamp=page.updated_at.isoformat(),
            resource_id=page.id,
            resource_slug=page.slug,
        ))

    # Get recent posts
    posts_result = await db.execute(
        select(Post, User)
        .join(User, Post.user_id == User.id)
        .order_by(Post.updated_at.desc())
        .limit(limit)
    )
    for post, user in posts_result.all():
        activities.append(ActivityItem(
            id=f"post_{post.id}",
            type="post",
            title=post.title,
            action="published" if post.status == "published" else "updated",
            author=user.name or user.email,
            author_id=user.id,
            timestamp=post.updated_at.isoformat(),
            resource_id=post.id,
            resource_slug=post.slug if hasattr(post, 'slug') else None,
        ))

    # Sort by timestamp and limit
    activities.sort(key=lambda x: x.timestamp, reverse=True)
    activities = activities[:limit]

    return ActivityResponse(
        items=activities,
        total=len(activities),
    )


@router.get("/cms/pending-review", response_model=dict, tags=["cms"])
async def get_pending_review(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """Get count of items pending review"""
    pending_pages = await db.execute(
        select(func.count(Page.id)).where(Page.status == 'draft')
    )
    pending_posts = await db.execute(
        select(func.count(Post.id)).where(Post.status == 'draft')
    )
    count = (pending_pages.scalar() or 0) + (pending_posts.scalar() or 0)
    return {"count": count}
```

### Tâche 1.5 : Enregistrer les routes CMS dans le router

**Fichier à modifier :** `backend/app/api/v1/router.py`

**Ajout :**
```python
# Register CMS endpoints
from app.api.v1.endpoints import cms
api_router.include_router(
    cms.router,
    tags=["cms"]
)
```

---

## 📦 Phase 2 : Intégration Navigation et Routes

### Tâche 2.1 : Mettre à jour la navigation

**Fichier à modifier :** `apps/web/src/lib/navigation/index.tsx`

**Modifications :**
- Ajouter un groupe "CMS" avec les liens vers le contenu
- Réorganiser la structure pour mettre le CMS en avant

**Code à ajouter :**
```typescript
// Dans getNavigationConfig, après le Dashboard
{
  name: 'CMS',
  icon: <FolderKanban className="w-5 h-5" />,
  items: [
    {
      name: 'Vue d\'ensemble',
      href: '/dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      name: 'Pages',
      href: '/content/pages',
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: 'Articles',
      href: '/content/posts',
      icon: <FileCheck className="w-5 h-5" />,
    },
    {
      name: 'Médias',
      href: '/content/media',
      icon: <Image className="w-5 h-5" />,
    },
    {
      name: 'Catégories',
      href: '/content/categories',
      icon: <Folder className="w-5 h-5" />,
    },
    {
      name: 'Tags',
      href: '/content/tags',
      icon: <Tag className="w-5 h-5" />,
    },
  ],
  collapsible: true,
  defaultOpen: true,
},
```

### Tâche 2.2 : Créer les routes de gestion du site

**Fichiers à créer :**

1. **`apps/web/src/app/[locale]/dashboard/site/menus/page.tsx`**
```typescript
'use client';

import { PageHeader, PageContainer } from '@/components/layout';
import { MenusManager } from '@/components/site/MenusManager';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function MenusPage() {
  return (
    <ProtectedRoute>
      <PageContainer>
        <PageHeader
          title="Gestion des Menus"
          description="Créez et gérez les menus de navigation du site"
          breadcrumbs={[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Site', href: '/dashboard/site' },
            { label: 'Menus' },
          ]}
        />
        <div className="mt-8">
          <MenusManager />
        </div>
      </PageContainer>
    </ProtectedRoute>
  );
}
```

2. **`apps/web/src/app/[locale]/dashboard/site/seo/page.tsx`**
```typescript
'use client';

import { PageHeader, PageContainer } from '@/components/layout';
import { SEOManager } from '@/components/site/SEOManager';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

export default function SEOPage() {
  return (
    <ProtectedRoute>
      <PageContainer>
        <PageHeader
          title="Configuration SEO"
          description="Configurez les paramètres SEO du site"
          breadcrumbs={[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Site', href: '/dashboard/site' },
            { label: 'SEO' },
          ]}
        />
        <div className="mt-8">
          <SEOManager />
        </div>
      </PageContainer>
    </ProtectedRoute>
  );
}
```

---

## 📦 Phase 3 : Composants de Gestion du Site

### Tâche 3.1 : Créer le composant MenusManager

**Fichier à créer :** `apps/web/src/components/site/MenusManager.tsx`

**Structure :**
```typescript
'use client';

import { useState, useEffect } from 'react';
import { Card, Button, LoadingSkeleton, Alert } from '@/components/ui';
import { menusAPI } from '@/lib/api/menus';
import { Plus, Edit, Trash2, Menu as MenuIcon } from 'lucide-react';

export interface Menu {
  id: number;
  name: string;
  location: 'header' | 'footer' | 'sidebar';
  items: MenuItem[];
  created_at: string;
  updated_at: string;
}

export interface MenuItem {
  id: string;
  label: string;
  url: string;
  target?: string;
  children?: MenuItem[];
}

export default function MenusManager() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMenus();
  }, []);

  const loadMenus = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await menusAPI.list();
      setMenus(data);
    } catch (err) {
      setError('Erreur lors du chargement des menus');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce menu ?')) return;
    
    try {
      await menusAPI.delete(id);
      await loadMenus();
    } catch (err) {
      setError('Erreur lors de la suppression');
    }
  };

  if (isLoading) {
    return <LoadingSkeleton variant="card" count={3} />;
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Menus</h2>
        <Button variant="primary" onClick={() => {/* TODO: Open create modal */}}>
          <Plus className="w-4 h-4 mr-2" />
          Nouveau Menu
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menus.map((menu) => (
          <Card key={menu.id} title={menu.name}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MenuIcon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground capitalize">
                  {menu.location}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {menu.items.length} élément(s)
              </p>

              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {/* TODO: Open edit modal */}}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Modifier
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(menu.id)}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Supprimer
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {menus.length === 0 && (
        <Card>
          <div className="text-center py-12">
            <MenuIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Aucun menu créé</p>
          </div>
        </Card>
      )}
    </div>
  );
}
```

### Tâche 3.2 : Créer l'API client pour les menus

**Fichier à créer :** `apps/web/src/lib/api/menus.ts`

**Structure :**
```typescript
/**
 * Menus API
 * API client for navigation menus
 */

import { apiClient } from './client';
import { extractApiData } from './utils';

export interface MenuItem {
  id: string;
  label: string;
  url: string;
  target?: string;
  children?: MenuItem[];
}

export interface Menu {
  id: number;
  name: string;
  location: 'header' | 'footer' | 'sidebar';
  items: MenuItem[];
  user_id?: number;
  created_at: string;
  updated_at: string;
}

export interface MenuCreate {
  name: string;
  location: 'header' | 'footer' | 'sidebar';
  items: MenuItem[];
}

export interface MenuUpdate {
  name?: string;
  location?: 'header' | 'footer' | 'sidebar';
  items?: MenuItem[];
}

export const menusAPI = {
  list: async (location?: string): Promise<Menu[]> => {
    const response = await apiClient.get<Menu[]>('/v1/menus', {
      params: location ? { location } : undefined,
    });
    const data = extractApiData<Menu[]>(response);
    return Array.isArray(data) ? data : [];
  },

  get: async (id: number): Promise<Menu> => {
    const response = await apiClient.get<Menu>(`/v1/menus/${id}`);
    const data = extractApiData<Menu>(response);
    if (!data) {
      throw new Error(`Menu not found: ${id}`);
    }
    return data;
  },

  create: async (data: MenuCreate): Promise<Menu> => {
    const response = await apiClient.post<Menu>('/v1/menus', data);
    const result = extractApiData<Menu>(response);
    if (!result) {
      throw new Error('Failed to create menu');
    }
    return result;
  },

  update: async (id: number, data: MenuUpdate): Promise<Menu> => {
    const response = await apiClient.put<Menu>(`/v1/menus/${id}`, data);
    const result = extractApiData<Menu>(response);
    if (!result) {
      throw new Error('Failed to update menu');
    }
    return result;
  },

  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/v1/menus/${id}`);
  },
};
```

### Tâche 3.3 : Créer le composant SEOManager

**Fichier à créer :** `apps/web/src/components/site/SEOManager.tsx`

**Structure :**
```typescript
'use client';

import { useState, useEffect } from 'react';
import { Card, Button, Input, Textarea, LoadingSkeleton, Alert } from '@/components/ui';
import { seoAPI } from '@/lib/api/seo';
import { Save } from 'lucide-react';

export interface SEOSettings {
  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  robots?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
}

export default function SEOManager() {
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
      const data = await seoAPI.getSettings();
      setSettings(data.settings || {});
    } catch (err) {
      setError('Erreur lors du chargement des paramètres SEO');
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
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <LoadingSkeleton variant="card" count={3} />;
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
            <label className="block text-sm font-medium mb-2">
              Titre du site
            </label>
            <Input
              value={settings.title || ''}
              onChange={(e) => setSettings({ ...settings, title: e.target.value })}
              placeholder="Titre SEO (max 60 caractères)"
              maxLength={60}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <Textarea
              value={settings.description || ''}
              onChange={(e) => setSettings({ ...settings, description: e.target.value })}
              placeholder="Description SEO (max 160 caractères)"
              maxLength={160}
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Mots-clés
            </label>
            <Input
              value={settings.keywords || ''}
              onChange={(e) => setSettings({ ...settings, keywords: e.target.value })}
              placeholder="mot-clé1, mot-clé2, mot-clé3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Robots
            </label>
            <Input
              value={settings.robots || 'index, follow'}
              onChange={(e) => setSettings({ ...settings, robots: e.target.value })}
              placeholder="index, follow"
            />
          </div>
        </div>
      </Card>

      {/* Open Graph */}
      <Card title="Open Graph (Facebook, LinkedIn)">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Titre OG
            </label>
            <Input
              value={settings.og_title || ''}
              onChange={(e) => setSettings({ ...settings, og_title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description OG
            </label>
            <Textarea
              value={settings.og_description || ''}
              onChange={(e) => setSettings({ ...settings, og_description: e.target.value })}
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Image OG
            </label>
            <Input
              value={settings.og_image || ''}
              onChange={(e) => setSettings({ ...settings, og_image: e.target.value })}
              placeholder="URL de l'image"
            />
          </div>
        </div>
      </Card>

      {/* Twitter Card */}
      <Card title="Twitter Card">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Titre Twitter
            </label>
            <Input
              value={settings.twitter_title || ''}
              onChange={(e) => setSettings({ ...settings, twitter_title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description Twitter
            </label>
            <Textarea
              value={settings.twitter_description || ''}
              onChange={(e) => setSettings({ ...settings, twitter_description: e.target.value })}
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Image Twitter
            </label>
            <Input
              value={settings.twitter_image || ''}
              onChange={(e) => setSettings({ ...settings, twitter_image: e.target.value })}
              placeholder="URL de l'image"
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
```

### Tâche 3.4 : Créer l'API client SEO

**Fichier à créer :** `apps/web/src/lib/api/seo.ts`

**Structure :**
```typescript
/**
 * SEO API
 * API client for SEO settings
 */

import { apiClient } from './client';
import { extractApiData } from './utils';

export interface SEOSettings {
  title?: string;
  description?: string;
  keywords?: string;
  canonical_url?: string;
  robots?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  og_type?: string;
  twitter_card?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
}

export interface SEOSettingsResponse {
  settings: SEOSettings;
}

export const seoAPI = {
  getSettings: async (): Promise<SEOSettingsResponse> => {
    const response = await apiClient.get<SEOSettingsResponse>('/v1/seo/settings');
    const data = extractApiData<SEOSettingsResponse>(response);
    if (!data) {
      throw new Error('Failed to load SEO settings');
    }
    return data;
  },

  updateSettings: async (settings: SEOSettings): Promise<SEOSettingsResponse> => {
    const response = await apiClient.put<SEOSettingsResponse>('/v1/seo/settings', settings);
    const result = extractApiData<SEOSettingsResponse>(response);
    if (!result) {
      throw new Error('Failed to update SEO settings');
    }
    return result;
  },
};
```

---

## 📦 Phase 4 : Modèles Backend (si nécessaire)

### Tâche 4.1 : Vérifier les modèles existants

Les modèles suivants existent déjà :
- ✅ `Menu` - `backend/app/models/menu.py`
- ✅ `Page` - `backend/app/models/page.py`
- ✅ `Post` - `backend/app/models/post.py`
- ✅ `File` - `backend/app/models/file.py`
- ✅ `Category` - `backend/app/models/tag.py`
- ✅ `Tag` - `backend/app/models/tag.py`

**Aucun nouveau modèle nécessaire pour la Phase 1-3.**

---

## 📋 Checklist d'Implémentation

### Phase 1 : Fondations
- [ ] Créer `apps/web/src/components/dashboard/CMSDashboard.tsx`
- [ ] Créer `apps/web/src/lib/api/cms.ts`
- [ ] Modifier `apps/web/src/app/[locale]/dashboard/page.tsx`
- [ ] Créer `backend/app/api/v1/endpoints/cms.py`
- [ ] Modifier `backend/app/api/v1/router.py` pour enregistrer les routes CMS
- [ ] Tester les statistiques CMS

### Phase 2 : Navigation
- [ ] Modifier `apps/web/src/lib/navigation/index.tsx`
- [ ] Créer `apps/web/src/app/[locale]/dashboard/site/menus/page.tsx`
- [ ] Créer `apps/web/src/app/[locale]/dashboard/site/seo/page.tsx`
- [ ] Tester la navigation

### Phase 3 : Composants Site
- [ ] Créer `apps/web/src/components/site/MenusManager.tsx`
- [ ] Créer `apps/web/src/lib/api/menus.ts`
- [ ] Créer `apps/web/src/components/site/SEOManager.tsx`
- [ ] Créer `apps/web/src/lib/api/seo.ts`
- [ ] Tester les composants

### Phase 4 : Tests & Polish
- [ ] Tests unitaires pour les composants
- [ ] Tests d'intégration pour les APIs
- [ ] Vérification des permissions RBAC
- [ ] Optimisation des performances
- [ ] Documentation

---

## 🔄 Ordre d'Exécution Recommandé

1. **Backend d'abord** : Créer les endpoints CMS (`cms.py`)
2. **API Client** : Créer `cms.ts` pour consommer les endpoints
3. **Composant Dashboard** : Créer `CMSDashboard.tsx`
4. **Intégration** : Modifier la page dashboard
5. **Navigation** : Mettre à jour la navigation
6. **Composants Site** : Créer les composants de gestion du site
7. **Tests** : Tester chaque fonctionnalité

---

## 🐛 Gestion des Erreurs

### Frontend
- Utiliser `ErrorBoundary` pour les erreurs React
- Gérer les erreurs API avec try/catch
- Afficher des messages d'erreur utilisateur-friendly
- Logger les erreurs pour le debugging

### Backend
- Utiliser les exceptions HTTP appropriées
- Logger les erreurs avec le système d'audit
- Retourner des messages d'erreur clairs

---

## 🔐 Sécurité

### Permissions
- Vérifier les permissions pour chaque endpoint
- Utiliser `get_current_user` pour l'authentification
- Vérifier la propriété ou les droits admin pour les modifications

### Validation
- Valider les données d'entrée avec Pydantic
- Sanitizer les données utilisateur
- Vérifier les limites (max length, etc.)

---

## 📝 Notes d'Implémentation

1. **Stats CMS** : Les endpoints de stats peuvent être optimisés avec des vues matérialisées si nécessaire
2. **Activité** : L'activité récente peut être enrichie avec un système d'événements dédié
3. **Cache** : Considérer le cache pour les statistiques qui changent peu
4. **Pagination** : Implémenter la pagination pour les listes longues
5. **Recherche** : Ajouter la recherche pour les menus et autres listes

---

*Document créé pour l'implémentation technique*
*Version : 1.0*
