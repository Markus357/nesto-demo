import { useState } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ApplicationPage } from '../components/ApplicationPage';
import { useApplication, useUpdateContactInfo } from '../hooks/useApplications';
import { useProducts } from '../hooks/useProducts';
import type { ContactFormData } from '../types';

export const Route = createFileRoute('/application/$applicationId')({
  component: ApplicationFormPage,
  validateSearch: (search: { editing?: boolean }) => search,
});

function ApplicationFormPage() {
  const { applicationId } = Route.useParams();
  const { editing } = Route.useSearch();

  const { data: application, isLoading: appLoading } = useApplication(applicationId);
  const { data: products = [], isLoading: productsLoading } = useProducts();
  const updateContact = useUpdateContactInfo();
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState<string | undefined>(undefined);

  if (appLoading || productsLoading || !application) {
    return null;
  }

  const product = products.find(p => p.id === (application.productId ?? -1));
  const initialData = application.applicants?.[0];

  if (!product) {
    return null;
  }

  const handleSubmit = (data: ContactFormData) => {
    updateContact.mutate(
      { id: applicationId, contactData: data },
      {
        onSuccess: () => {
          setButtonText('Successfully saved!');
          setTimeout(() => {
            navigate({ to: '/applications', search: { updatedId: applicationId } });
          }, 1000);
        },
      }
    );
  };

  return (
    <ApplicationPage
      product={product}
      initialData={initialData}
      onSubmit={handleSubmit}
      isSubmitting={updateContact.isPending || updateContact.isSuccess}
      loadingButtonText={buttonText}
      mode={editing ? 'EDIT' : 'COMPLETE'}
    />
  );
}
