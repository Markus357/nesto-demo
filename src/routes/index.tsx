import { useState } from 'react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ProductsPage } from '../components/ProductsPage';
import { useProductsByType } from '../hooks/useProducts';
import { useCreateApplication } from '../hooks/useApplications';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<'VARIABLE' | 'FIXED'>('FIXED');
  const { data: products = [], isLoading, error } = useProductsByType(selectedType, true);
  const [creatingProductId, setCreatingProductId] = useState<number | undefined>(undefined);
  const createApplication = useCreateApplication();

  const handleProductTypeChange = (type: 'VARIABLE' | 'FIXED') => {
    setSelectedType(type);
  };

  const handleProductSelect = (productId: number) => {
    if (createApplication.isPending) return;
    setCreatingProductId(productId);
    createApplication.mutate(
      { productId },
      {
        onSuccess: (app) => {
          setCreatingProductId(undefined);
          navigate({ to: `/application/${app.id}` });
        },
        onError: () => {
          setCreatingProductId(undefined);
        },
      }
    );
  };

  return (
    <ProductsPage
      products={products}
      onProductTypeChange={handleProductTypeChange}
      onProductSelect={handleProductSelect}
      isLoading={isLoading}
      errorMessage={error ? t('products.errorLoading') : undefined}
      creatingApplicationProductId={creatingProductId}
    />
  );
}
