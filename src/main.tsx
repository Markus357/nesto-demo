import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'
import './i18n/config'
import mobileFavicon from './assets/nestoIcon-Primary-sm.png'

const router = createRouter({ routeTree })

const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)

// Set favicon to mobile logo
const faviconEl = document.querySelector<HTMLLinkElement>("link[rel='icon']")
if (faviconEl) {
  faviconEl.href = mobileFavicon
}
