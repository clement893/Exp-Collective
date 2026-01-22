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
