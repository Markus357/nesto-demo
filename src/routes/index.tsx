import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ProductsPage } from '../components/ProductsPage';
import { useProductsByType } from '../hooks/useProducts';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<'VARIABLE' | 'FIXED'>('FIXED');
  const { data: products = [], isLoading, error } = useProductsByType(selectedType, true);

  const handleProductTypeChange = (type: 'VARIABLE' | 'FIXED') => {
    setSelectedType(type);
  };

  const handleProductSelect = (productId: number) => {
    navigate({ to: `/application/${productId}` });
  };

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--red-orange)' }}>Error loading products</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <ProductsPage
      products={products}
      onProductTypeChange={handleProductTypeChange}
      onProductSelect={handleProductSelect}
      isLoading={isLoading}
    />
  );
}
