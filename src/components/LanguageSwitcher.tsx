import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

type Language = 'en' | 'fr';

interface LanguageSwitcherProps {
  onChange?: (language: Language) => void;
  defaultLanguage?: Language;
  disabled?: boolean;
  className?: string;
}

const SwitchContainer = styled.div<{ $disabled?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  padding: 3px;
  background-color: #f0f0f0;
  border: 1px solid #CCC;
  border-radius: 9999px;
  user-select: none;
  opacity: ${p => (p.$disabled ? 0.6 : 1)};
  pointer-events: ${p => (p.$disabled ? 'none' : 'auto')};
  height: 32px;
  min-width: 96px;
`;

const Thumb = styled.div<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 3px;
  left: 3px;
  width: calc(50% - 3px);
  height: calc(100% - 6px);
  border-radius: 9999px;
  background: linear-gradient(120deg, var(--golden-yellow) 0%, var(--red-orange) 140%);
  border: 1px solid #666;
  transform: translateX(${p => (p.$position === 'right' ? '100%' : '0')});
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

const SegmentButton = styled.button<{ $active?: boolean }>`
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  border: none;
  background: transparent;
  color: ${p => (p.$active ? 'var(--deep-navy)' : 'rgba(18, 19, 39, 0.7)')};
  font-weight: ${p => (p.$active ? 700 : 600)};
  font-size: 13px;
  padding: 0 10px;
  height: 100%;
  border-radius: 9999px;
  transition: color 0.15s ease-in-out;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(63, 102, 174, 0.25);
  }
`;

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  onChange,
  defaultLanguage = 'en',
  disabled = false,
  className,
}) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const setLang = useCallback(
    (lang: Language) => {
      setLanguage(prev => {
        if (prev !== lang) {
          onChange?.(lang);
        }
        return lang;
      });
    },
    [onChange]
  );

  const thumbPosition = useMemo<'left' | 'right'>(() => (language === 'en' ? 'left' : 'right'), [language]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setLang('en');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setLang('fr');
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setLang(language === 'en' ? 'fr' : 'en');
    }
  };

  return (
    <SwitchContainer
      role="group"
      aria-label="Language switcher"
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      $disabled={disabled}
      className={className}
    >
      <Thumb $position={thumbPosition} aria-hidden />
      <SegmentButton
        type="button"
        $active={language === 'en'}
        onClick={() => setLang('en')}
        aria-pressed={language === 'en'}
      >
        EN
      </SegmentButton>
      <SegmentButton
        type="button"
        $active={language === 'fr'}
        onClick={() => setLang('fr')}
        aria-pressed={language === 'fr'}
      >
        FR
      </SegmentButton>
    </SwitchContainer>
  );
};

export type { LanguageSwitcherProps, Language };
