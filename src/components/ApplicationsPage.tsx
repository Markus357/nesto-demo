import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import type { Application } from '../types';
import type { Product } from '../types';
import { Table, TableHeader, TableBody, Row, Header, Cell } from './Table';
import { Button } from './Button';
import { ApplicationCard } from './ApplicationCard';
import { ErrorMessage } from './ErrorMessage';
import { LoadingSpinner, LoadingSpinnerWrapper } from './LoadingSpinner';

const PageContainer = styled.div`
  padding: 40px var(--mobile-padding) 0;
  max-width: var(--max-content-width);
  margin: 0 auto;
  text-align: center;
  padding-bottom: calc(var(--footer-height) * 2);

  ${LoadingSpinnerWrapper} {
    margin-top: 40px;
  }
`;

const Title = styled.h1`
  color: var(--royal-blue);
`;

const Subtitle = styled.p`
  color: var(--deep-navy);
`;

const TableContainer = styled.div`
  margin-top: 40px;
  text-align: left; /* ensure table text is left-aligned despite centered page */
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;

const CardsContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 900px) {
    display: none;
  }
`;


interface ApplicationsPageProps {
  applications: Application[];
  products: Product[];
  onEditApplication?: (applicationId: string) => void;
  updatedId?: string;
  isLoading?: boolean;
  errorMessage?: string;
}

export const ApplicationsPage: React.FC<ApplicationsPageProps> = ({ applications = [], products = [], onEditApplication, updatedId, isLoading = false, errorMessage }) => {
  const { t } = useTranslation();

  const productNameById = new Map(products.map(p => [p.id, p.name] as const));

  return (
    <PageContainer>
      <Title>{t('applications.title')}</Title>
      <Subtitle>{t('applications.subtitle')}</Subtitle>

      {isLoading ? (
        <LoadingSpinner size={48} />
      ) : errorMessage ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <>
          <CardsContainer>
            {applications.map((app) => {
              const applicant = app.applicants?.[0];
              const fullName = applicant ? `${applicant.firstName} ${applicant.lastName}` : '-';
              const email = applicant?.email ?? '-';
              const phone = applicant?.phone ?? '-';
              const productName = app.productId ? (productNameById.get(app.productId) ?? '-') : '-';

              return (
                <ApplicationCard
                  key={app.id}
                  name={fullName}
                  email={email}
                  phone={phone}
                  productName={productName}
                  onEdit={() => onEditApplication?.(app.id)}
                />
              );
            })}
          </CardsContainer>

          <TableContainer>
            <Table>
              <TableHeader>
                <Row>
                  <Header>{t('labels.fullName')}</Header>
                  <Header>{t('labels.email')}</Header>
                  <Header>{t('labels.phone')}</Header>
                  <Header>{t('labels.product')}</Header>
                  <Header aria-label="actions" />
                </Row>
              </TableHeader>
              <TableBody>
                  {applications.map((app) => {
                  const applicant = app.applicants?.[0];
                  const fullName = applicant ? `${applicant.firstName} ${applicant.lastName}` : '-';
                  const email = applicant?.email ?? '-';
                  const phone = applicant?.phone ?? '-';
                  const productName = app.productId ? (productNameById.get(app.productId) ?? '-') : '-';

                  return (
                      <Row key={app.id} $highlight={updatedId === app.id}>
                      <Cell>{fullName}</Cell>
                      <Cell>{email}</Cell>
                      <Cell>{phone}</Cell>
                      <Cell>{productName}</Cell>
                        <Cell style={{ textAlign: 'right' }}>
                          <Button pill size="sm" onClick={() => onEditApplication?.(app.id)}>{t('common.edit') ?? 'Edit'}</Button>
                        </Cell>
                    </Row>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </PageContainer>
  );
};


