/**
 * Pages Management Page
 * 
 * Page for managing content pages with CRUD operations.
 */

'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useAuthStore } from '@/lib/store';
import { PagesManager } from '@/components/content';
import type { Page } from '@/components/content';
import { PageHeader, PageContainer } from '@/components/layout';
import { Loading, Alert } from '@/components/ui';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { logger } from '@/lib/logger';
import { pagesAPI } from '@/lib/api/pages';
import { handleApiError } from '@/lib/errors';

export default function PagesManagementPage() {
  const router = useRouter();
  const t = useTranslations('content.pages');
  const { isAuthenticated } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pages, setPages] = useState<Page[]>([]);
  const loadingRef = useRef(false);

  const loadPages = useCallback(async () => {
    // Prevent multiple simultaneous loads
    if (loadingRef.current) return;
    loadingRef.current = true;
    try {
      setIsLoading(true);
      setError(null);
      logger.debug('Loading pages from API...');
      const loadedPages = await pagesAPI.list();
      logger.debug('Pages loaded successfully', { count: loadedPages.length });
      // Convert API Page type to component Page type (they're compatible but TypeScript sees them as different)
      setPages(loadedPages as Page[]);
      setIsLoading(false);
    } catch (error) {
      logger.error('Failed to load pages', error instanceof Error ? error : new Error(String(error)));
      const appError = handleApiError(error);
      const errorMessage = appError.message || t('errors.loadFailed') || 'Failed to load pages. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
      // Set empty array on error so the UI can still render
      setPages([]);
    } finally {
      loadingRef.current = false;
    }
  }, [t]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/auth/login');
      return;
    }

    loadPages();
  }, [isAuthenticated, router, loadPages]);

  const handlePageCreate = async (pageData: Omit<Page, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      await pagesAPI.create({
        slug: String(pageData.slug),
        title: String(pageData.title),
        content: String(pageData.content),
        status: pageData.status as 'draft' | 'published' | 'archived' | undefined,
      });
      logger.info('Page created successfully', pageData);
      await loadPages();
    } catch (error) {
      logger.error('Failed to create page', error instanceof Error ? error : new Error(String(error)));
      const appError = handleApiError(error);
      setError(appError.message || 'Failed to create page. Please try again.');
      throw error;
    }
  };

  const handlePageUpdate = async (id: number, pageData: Partial<Page>) => {
    try {
      // Find the page to get its slug
      const pageToUpdate = pages.find(p => p.id === id);
      if (!pageToUpdate) {
        throw new Error('Page not found');
      }
      
      await pagesAPI.update(pageToUpdate.slug, {
        slug: pageData.slug ? String(pageData.slug) : undefined,
        title: pageData.title ? String(pageData.title) : undefined,
        content: pageData.content ? String(pageData.content) : undefined,
        status: pageData.status as 'draft' | 'published' | 'archived' | undefined,
      });
      logger.info('Page updated successfully', { id, slug: pageToUpdate.slug, pageData });
      await loadPages();
    } catch (error) {
      logger.error('Failed to update page', error instanceof Error ? error : new Error(String(error)));
      const appError = handleApiError(error);
      setError(appError.message || 'Failed to update page. Please try again.');
      throw error;
    }
  };

  const handlePageDelete = async (id: number) => {
    try {
      // Find the page to get its slug
      const pageToDelete = pages.find(p => p.id === id);
      if (!pageToDelete) {
        throw new Error('Page not found');
      }
      
      await pagesAPI.delete(pageToDelete.slug);
      logger.info('Page deleted successfully', { id, slug: pageToDelete.slug });
      await loadPages();
    } catch (error) {
      logger.error('Failed to delete page', error instanceof Error ? error : new Error(String(error)));
      const appError = handleApiError(error);
      setError(appError.message || 'Failed to delete page. Please try again.');
      throw error;
    }
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <PageContainer className="max-w-7xl">
          <PageHeader
            title={t('title') || 'Gestion des Pages'}
            description={t('description') || 'Créez et gérez vos pages de contenu'}
            breadcrumbs={[
              { label: t('breadcrumbs.dashboard') || 'Tableau de bord', href: '/dashboard' },
              { label: t('breadcrumbs.content') || 'Contenu', href: '/content' },
              { label: t('breadcrumbs.pages') || 'Pages' },
            ]}
          />
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
            <div className="h-96 bg-muted animate-pulse rounded-lg" />
          </div>
        </PageContainer>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <PageContainer className="max-w-7xl">
        <PageHeader
          title={t('title') || 'Gestion des Pages'}
          description={t('description') || 'Créez et gérez vos pages de contenu'}
          breadcrumbs={[
            { label: t('breadcrumbs.dashboard') || 'Tableau de bord', href: '/dashboard' },
            { label: t('breadcrumbs.content') || 'Contenu', href: '/content' },
            { label: t('breadcrumbs.pages') || 'Pages' },
          ]}
        />

        {error && (
          <div className="mt-6">
            <Alert variant="error" onClose={() => setError(null)}>
              {error}
            </Alert>
          </div>
        )}

        <div className="mt-8">
          <PagesManager
            pages={pages}
            onPageCreate={handlePageCreate}
            onPageUpdate={handlePageUpdate}
            onPageDelete={handlePageDelete}
          />
        </div>
      </PageContainer>
    </ProtectedRoute>
  );
}

