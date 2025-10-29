import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ProductCard, ProductCardWrapper } from './ProductCard';
import { ApplicationContactForm } from './ApplicationContactForm';
import type { Product } from '../types';
import type { ContactFormData } from '../types';
import { useUpdateContactInfo } from '../hooks/useApplications';

const PageContainer = styled.div`
  --app-form-padding: 16px;

  padding: 40px var(--mobile-padding) 0;
  max-width: var(--max-content-width);
  margin: 0 auto;

  @media (min-width: 900px) {
    --app-grid-form-width: 640px;
    --app-grid-product-width: 320px;
    --app-grid-shift-x: 80px; /* account for card shifted left by 160px => midpoint +80px */
    --app-card-overlap-x: -160px; /* overlap ~half the product card width (320px) */
    --app-form-padding-desktop: 24px; /* desktop inner padding for form */
    --app-form-padding-right-desktop: 184px; /* extra right padding to account for overlap */
  }
`;

const Title = styled.h1`
  color: var(--royal-blue);
  text-align: center;
`;

const Subtitle = styled.p`
  color: var(--deep-navy);
  text-align: center;
`;

const ContentGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  width: 100%;

  @media (min-width: 900px) {
    grid-template-columns: var(--app-grid-form-width) var(--app-grid-product-width); /* form on left, product card on right */
    align-items: start;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    transform: translateX(var(--app-grid-shift-x));
  }
`;

const CardColumn = styled.div`
  display: none; /* hide ProductCard on mobile */
  justify-content: center;
  position: relative;
  z-index: 2;
  transform: none;
  margin-top: 0;

  @media (min-width: 900px) {
    display: flex;
    transform: translateX(var(--app-card-overlap-x));
    margin-top: 55px
  }
`;

const FormColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const CardSizer = styled.div`
  ${ProductCardWrapper} {
    box-shadow: 0 8px 24px rgba(63, 102, 174, 0.15); /* apply hover shadow in this context */
  }

  @media (min-width: 900px) {
    ${ProductCardWrapper} {
      min-height: 380px;
      width: var(--app-grid-product-width);
    }
  }
`;

const FormCard = styled.div`
  /* Mobile-first: visible card chrome */
  background-color: var(--white);
  border: 1px solid #000;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(63, 102, 174, 0.15);
  width: 100%;
  max-width: 100%;
  min-height: auto;
  padding: 0; /* allow full-width top strip */
  display: flex;
  flex-direction: column; /* ensure top strip sits above content */
  align-items: stretch;
  overflow: hidden;

  @media (min-width: 900px) {
    background-color: var(--white);
    border: 1px solid #000;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(63, 102, 174, 0.15);
    max-width: var(--app-grid-form-width); /* ~2x product card width */
    min-height: 420px;
    padding: 0; /* inner padding handled by FormInner */
  }
`;

const FormHeading = styled.h2`
  color: var(--deep-navy);
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 16px 0;
`;

const FormNameBar = styled.div`
  background-color: var(--royal-blue);
  color: var(--white);
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  
  @media (min-width: 900px) {
    display: none;
  }
`;

const FormInner = styled.div`
  width: 100%;
  padding: var(--app-form-padding);

  @media (min-width: 900px) {
    padding: var(--app-form-padding-desktop);
    padding-left: var(--app-form-padding-desktop); /* restore left padding */
    padding-right: var(--app-form-padding-right-desktop); /* increased by left padding */
  }
`;

interface ApplicationPageProps {
  product: Product;
  initialData?: ContactFormData;
  isSubmitting?: boolean;
  onSubmit: (data: ContactFormData) => void;
  loadingButtonText?: string;
  mode?: 'EDIT' | 'COMPLETE'
}

export const ApplicationPage: React.FC<ApplicationPageProps> = ({ product, initialData, isSubmitting = false, onSubmit, loadingButtonText, mode }) => {
  const { t: tForm } = useTranslation('translation', { keyPrefix: mode === 'COMPLETE' ? 'applicationForm.complete' : 'applicationForm.edit' });
  const { t } = useTranslation();
  const updateContact = useUpdateContactInfo();

  const title = `${t(`productCard.terms.${product.term}`)} ${product.type === 'FIXED' ? t('productCard.typeFixed') : t('productCard.typeVariable')}`;
  const handleSubmit = (data: ContactFormData) => {
    onSubmit(data);
  };

  return (
    <PageContainer>
      <Title>{tForm('title')}</Title>
      <Subtitle>{tForm('subtitle')}</Subtitle>

      <ContentGrid>
        <FormColumn>
          <FormCard>
            <FormNameBar>{product.name} @ {product.bestRate}%</FormNameBar>
            <FormInner>
              <FormHeading>{tForm('formHeading')}</FormHeading>
              <ApplicationContactForm
                onSubmit={handleSubmit}
                isLoading={isSubmitting || updateContact.isPending}
                loadingButtonText={loadingButtonText}
                initialData={initialData}
              />
            </FormInner>
          </FormCard>
        </FormColumn>

        <CardColumn>
          <CardSizer>
            <ProductCard
              title={title}
              name={product.name}
              value={product.bestRate}
              buttonText={t('productCard.buttonText')}
              onSelect={() => {}}
              renderButton={() => null}
            />
          </CardSizer>
        </CardColumn>
      </ContentGrid>
    </PageContainer>
  );
};


