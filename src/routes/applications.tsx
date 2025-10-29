import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useApplications } from '../hooks/useApplications';
import { useProducts } from '../hooks/useProducts';
import { ApplicationsPage } from '../components/ApplicationsPage';

export const Route = createFileRoute('/applications')({
  component: ApplicationsRoute,
  validateSearch: (search: { updatedId?: string }) => search,
});

function ApplicationsRoute() {
  const { updatedId } = Route.useSearch();

  const navigate = useNavigate();
  const handleEditApplication = (applicationId: string) => {
    navigate({ to: `/application/${applicationId}`, search: { editing: true } });
  };

  const { data: applications = [], isLoading: appsLoading, error: appsError } = useApplications();
  const { data: products = [], isLoading: productsLoading, error: productsError } = useProducts();

  if (appsError || productsError) {
    return <p style={{ color: 'var(--red-orange)' }}>Error loading applications</p>;
  }

  const isLoading = appsLoading || productsLoading;

  return (
    <ApplicationsPage
      applications={applications}
      products={products}
      onEditApplication={handleEditApplication}
      updatedId={updatedId}
      isLoading={isLoading}
    />
  );
}
