import { createFileRoute, Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/applications')({
  component: ApplicationsPage,
});

function ApplicationsPage() {
  const { t } = useTranslation();
  
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'var(--royal-blue)' }}>
        {t('applications.title')}
      </h1>
      <p style={{ color: 'var(--deep-navy)' }}>
        {t('applications.subtitle')}
      </p>
      <p style={{ color: 'var(--red-orange)', marginTop: '20px' }}>
        {t('applications.noApplications')}
      </p>
      <nav style={{ marginTop: '20px' }}>
        <Link 
          to="/"
          style={{ 
            color: 'var(--royal-blue)', 
            textDecoration: 'none'
          }}
        >
          ← Back to Home
        </Link>
      </nav>
    </div>
  );
}
