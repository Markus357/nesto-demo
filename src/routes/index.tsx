import { createFileRoute, Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'var(--royal-blue)' }}>
        {t('home.title')}
      </h1>
      <p style={{ color: 'var(--deep-navy)' }}>
        {t('home.subtitle')}
      </p>
      <nav style={{ marginTop: '20px' }}>
        <Link 
          to="/applications"
          style={{ 
            color: 'var(--royal-blue)', 
            textDecoration: 'none',
            marginRight: '20px'
          }}
        >
          View Applications
        </Link>
      </nav>
    </div>
  );
}
