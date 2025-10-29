import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Tabs } from './Tabs';
import { ProductCardGrid } from './ProductCardGrid';
import { BestCardWrapper } from './BestCardWrapper';
import { ProductCardWrapper } from './ProductCard';
import type { Product } from '../types';

export interface ProductSelectHandler {
  (productId: number): void;
}

const PageContainer = styled.div`
  padding: 40px var(--mobile-padding) 0;
  max-width: var(--max-content-width);
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    padding: 40px var(--desktop-padding) 40px;
  }
`;

const Title = styled.h1`
  color: var(--royal-blue);
`;

const Subtitle = styled.p`
  color: var(--deep-navy);
`;

const TabsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const ProductsContainer = styled.div`
  margin-top: 40px;
  
  @media (min-width: 768px) {
    ${ProductCardWrapper} {
      min-height: 440px;
    }
  }
`;

interface ProductsPageProps {
  onProductTypeChange?: (type: 'VARIABLE' | 'FIXED') => void;
  onProductSelect?: ProductSelectHandler;
  products?: Product[];
  isLoading?: boolean;
  creatingApplicationProductId?: number;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onProductTypeChange, onProductSelect, products = [], isLoading, creatingApplicationProductId }) => {
  const { t } = useTranslation();

  const tabs = [
    { id: 'FIXED', label: t('home.tabs.fixed') },
    { id: 'VARIABLE', label: t('home.tabs.variable') },
  ];

  const handleTabChange = (tabId: 'VARIABLE' | 'FIXED') => {
    onProductTypeChange?.(tabId);
  };

  // Convert Product[] to ProductCardProps[]
  const cardData = products.map(({ type, term, name, bestRate, id }, index) => {
    const termTranslated = t(`productCard.terms.${term}`);
    const typeTranslated = type === 'FIXED' ? t('productCard.typeFixed') : t('productCard.typeVariable');
    const title = `${termTranslated} ${typeTranslated}`;
    
    return {
      title,
      name,
      value: bestRate,
      buttonText: t('productCard.buttonText'),
      onSelect: () => onProductSelect?.(id),
      isLoading: creatingApplicationProductId === id || isLoading,
      ...(index === 0 && { Wrapper: BestCardWrapper }),
    };
  });

  return (
    <PageContainer>
      <Title>
        {t('home.title')}
      </Title>
      <Subtitle>
        {t('home.subtitle')}
      </Subtitle>
      <TabsContainer>
        <Tabs
          tabs={tabs}
          onTabChange={(tabId) => handleTabChange(tabId as 'VARIABLE' | 'FIXED')}
        />
      </TabsContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        products.length > 0 && (
          <ProductsContainer>
            <ProductCardGrid products={cardData} />
          </ProductsContainer>
        )
      )}
    </PageContainer>
  );
};
