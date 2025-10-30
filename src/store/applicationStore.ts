// Zustand store for application state management
import { create } from 'zustand';
import i18n from '../i18n/config';
import type { Product } from '../types';

interface ApplicationStore {
  uiLanguage: 'en' | 'fr';
  setLanguage: (lang: 'en' | 'fr') => void;

  // Cached products loaded during the session
  products: Product[];
  // Replace products entirely
  setProducts: (products: Product[]) => void;
  // Merge products by id (upsert)
  upsertProducts: (products: Product[]) => void;
}

export const useApplicationStore = create<ApplicationStore>((set, get) => ({
  uiLanguage: 'en',
  setLanguage: (lang) => {
    i18n.changeLanguage(lang);
    set({ uiLanguage: lang });
  },

  products: [],
  setProducts: (products) => set({ products }),
  upsertProducts: (incoming) => {
    const byId = new Map<number, Product>();
    // existing first to preserve order, then incoming to override/add
    for (const p of get().products) byId.set(p.id, p);
    for (const p of incoming) byId.set(p.id, p);
    set({ products: Array.from(byId.values()) });
  },
}));
