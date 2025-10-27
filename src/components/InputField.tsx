import React from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import type { InputProps } from './Input';

interface InputFieldProps extends Omit<InputProps, 'error'> {
  label?: string;
  subtext?: string;
  errorMessage?: string;
}

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 600;
  color: var(--deep-navy);
`;

const RequiredAsterisk = styled.span`
  color: var(--red-orange);
  margin-left: 2px;
`;

const InputContainer = styled.div`
  /* Space handled by TextDisplayReserved */
`;

const TextDisplayReserved = styled.div<{ $hasText?: boolean }>`
  min-height: 20px;
  font-size: 14px;
  line-height: 1.4;
  color: ${props => props.$hasText ? 'inherit' : 'transparent'};
`;

const ErrorMessage = styled.span`
  color: var(--red-orange);
`;

const Subtext = styled.span`
  color: #666;
`;

export const InputField: React.FC<InputFieldProps> = ({
  label,
  subtext,
  errorMessage,
  required,
  ...inputProps
}) => {
  const hasError = !!errorMessage;
  const hasText = !!(errorMessage || subtext);

  return (
    <InputFieldWrapper>
      {label && (
        <Label>
          {label}
          {required && <RequiredAsterisk>*</RequiredAsterisk>}
        </Label>
      )}
      <InputContainer>
        <Input {...inputProps} error={hasError} />
      </InputContainer>
      <TextDisplayReserved $hasText={hasText}>
        {hasError && errorMessage && (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}
        {!hasError && subtext && (
          <Subtext>{subtext}</Subtext>
        )}
        {!hasText && <span>&nbsp;</span>}
      </TextDisplayReserved>
    </InputFieldWrapper>
  );
};
