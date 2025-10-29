// Zustand store for application state management
import { create } from 'zustand';
import i18n from '../i18n/config';

interface ApplicationStore {
  uiLanguage: 'en' | 'fr';
  setLanguage: (lang: 'en' | 'fr') => void;
}

export const useApplicationStore = create<ApplicationStore>((set) => ({
  uiLanguage: 'en',
  setLanguage: (lang) => {
    i18n.changeLanguage(lang);
    set({ uiLanguage: lang });
  },
}));
