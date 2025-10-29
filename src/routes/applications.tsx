import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useApplications } from '../hooks/useApplications';
import { useProducts } from '../hooks/useProducts';
import { ApplicationsPage } from '../components/ApplicationsPage';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/applications')({
  component: ApplicationsRoute,
  validateSearch: (search: { updatedId?: string }) => search,
});

function ApplicationsRoute() {
  const { t } = useTranslation();
  const { updatedId } = Route.useSearch();

  const navigate = useNavigate();
  const handleEditApplication = (applicationId: string) => {
    navigate({ to: `/application/${applicationId}`, search: { editing: true } });
  };

  const { data: applications = [], isLoading: appsLoading, error: appsError } = useApplications();
  const { data: products = [], isLoading: productsLoading, error: productsError } = useProducts();

  const isLoading = appsLoading || productsLoading;
  const errorMessage = (appsError || productsError) ? t('applications.errorLoading') : undefined;

  return (
    <ApplicationsPage
      applications={applications}
      products={products}
      onEditApplication={handleEditApplication}
      updatedId={updatedId}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
}
