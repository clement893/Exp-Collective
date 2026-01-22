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
