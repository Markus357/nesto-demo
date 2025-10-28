import { apiClient } from './ApiClient';
import type { Product } from '../types';

export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    return apiClient.get<Product[]>('/products');
  },

  getByType: async (type: 'VARIABLE' | 'FIXED'): Promise<Product[]> => {
    const allProducts = await productsApi.getAll();
    return allProducts.filter(product => product.type === type);
  },
};
