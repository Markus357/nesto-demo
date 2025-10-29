import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (q: string) =>
    typeof window !== 'undefined' ? window.matchMedia(q).matches : false;

  // Set the initial state synchronously to avoid layout flicker
  const [matches, setMatches] = useState<boolean>(() => getMatches(query));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};
