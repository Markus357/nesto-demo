import { useQuery } from '@tanstack/react-query';
import { productsApi } from '../api/ProductsApi';

const defaultQueryOptions = {
  staleTime: 5 * 60 * 1000, // 5 minutes
  gcTime: 10 * 60 * 1000, // 10 minutes
};

export const useProducts = (options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: productsApi.getAll,
    enabled: options?.enabled ?? true,
    ...defaultQueryOptions,
  });
};

export const useProductsByType = (type: 'VARIABLE' | 'FIXED', prioritizeLowestRate: boolean = false) => {
  return useQuery({
    queryKey: ['products', type, prioritizeLowestRate],
    queryFn: async () => {
      const products = await productsApi.getByType(type);
      
      if (!prioritizeLowestRate) {
        return products;
      }
      
      const lowestRateProduct = products.reduce((lowest, current) => 
        current.bestRate < lowest.bestRate ? current : lowest
      );
      
      // Move the lowest rate product to the front, keep others in original order
      const otherProducts = products.filter(product => product.id !== lowestRateProduct.id);
      return [lowestRateProduct, ...otherProducts];
    },
    ...defaultQueryOptions,
  });
};
