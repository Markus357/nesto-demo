import { createFileRoute, Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/application/$applicationId')({
  component: ApplicationFormPage,
});

function ApplicationFormPage() {
  const { applicationId } = Route.useParams();
  const { t } = useTranslation();
  
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'var(--royal-blue)' }}>
        {t('applicationForm.title')}
      </h1>
      <p style={{ color: 'var(--deep-navy)' }}>
        {t('applicationForm.subtitle')}
      </p>
      <p style={{ color: 'var(--royal-blue)' }}>
        Application ID: <strong>{applicationId}</strong>
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
