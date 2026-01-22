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
