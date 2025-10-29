// Root route with Header and global layout
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyle } from '../styles/global';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useApplicationStore } from '../store/applicationStore';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const setLanguage = useApplicationStore(s => s.setLanguage);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Navbar />
      <Outlet />
      <Footer onLanguageChange={setLanguage} />
    </QueryClientProvider>
  );
}
