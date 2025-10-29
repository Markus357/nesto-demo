import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

interface ApplicationCardProps {
  name: string;
  email: string;
  phone: string;
  productName: string;
  onEdit: () => void;
}

const Card = styled.div`
  background-color: var(--white);
  border: 1px solid #000;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(63, 102, 174, 0.15);
  overflow: hidden;
`;

const NameBar = styled.div`
  background-color: var(--royal-blue);
  color: var(--white);
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  display: block;
  width: 100%;
`;

const Body = styled.div`
  padding: 16px;
`;

const InfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 8px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: var(--deep-navy);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  text-align: left;
`;

const Value = styled.div`
  font-size: 14px;
  color: var(--deep-navy);
  text-align: right;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ name, email, phone, productName, onEdit }) => {
  const { t } = useTranslation();
  return (
    <Card>
      <NameBar>{productName}</NameBar>
      <Body>
        <InfoList>
          <Label>{t('labels.fullName')}</Label>
          <Value>{name}</Value>
          <Label>{t('labels.email')}</Label>
          <Value>{email}</Value>
          <Label>{t('labels.phone')}</Label>
          <Value>{phone}</Value>
        </InfoList>
        <Actions>
          <Button pill size="sm" onClick={onEdit}>Edit</Button>
        </Actions>
      </Body>
    </Card>
  );
};


