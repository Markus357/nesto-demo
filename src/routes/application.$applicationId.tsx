import { useState } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const { data: application, isLoading: appLoading, error: appError } = useApplication(applicationId);
  const { data: products = [], isLoading: productsLoading, error: productsError } = useProducts();
  const updateContact = useUpdateContactInfo();
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState<string | undefined>(undefined);

  const product = application ? products.find(p => p.id === (application.productId ?? -1)) : undefined;
  const initialData = application?.applicants?.[0];
  const isLoading = appLoading || productsLoading || !application || !product;
  const errorMessage = (appError || productsError) ? t('application.errorLoading') : undefined;

  const handleSubmit = (data: ContactFormData) => {
    updateContact.mutate(
      { id: applicationId, contactData: data },
      {
        onSuccess: () => {
          setButtonText(t('form.submitSuccess'));
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
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
}
