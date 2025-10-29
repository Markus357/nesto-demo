import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

const Bar = styled.footer`
  position: static;
  background-color: var(--white);
  border-top: 1px solid #e5e5e5;
  box-shadow: none;

  @media (min-width: 769px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 8px rgba(0,0,0,0.06);
    z-index: 100;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px var(--mobile-padding);
  max-width: var(--max-content-width);
  margin: 0 auto;

  @media (min-width: 769px) {
    padding: 12px var(--desktop-padding);
  }
`;

const LeftText = styled.span`
  color: var(--deep-navy);
  font-size: 12px;
  font-weight: 600;
`;

interface FooterProps {
  onLanguageChange?: (lang: 'en' | 'fr') => void;
}

export const Footer: React.FC<FooterProps> = ({ onLanguageChange }) => {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language?.startsWith('fr') ? 'fr' : 'en') as 'en' | 'fr';
  return (
    <Bar>
      <Content>
        <LeftText>{t('footer.preparedBy')}</LeftText>
        <LanguageSwitcher
          defaultLanguage={currentLang}
          onChange={(lang) => { onLanguageChange?.(lang); /* eslint-disable no-console */ console.log('Footer language change:', lang); }}
        />
      </Content>
    </Bar>
  );
};


