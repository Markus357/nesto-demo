import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <h1 style={{ color: 'var(--royal-blue)' }}>Nesto Mortgage Application</h1>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
