import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputField, InputFieldWrapper } from './InputField';
import { Button } from './Button';
import type { ContactFormData } from '../types';

interface ApplicationContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  initialData?: Partial<ContactFormData>;
  isLoading?: boolean;
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  ${InputFieldWrapper}:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

export const ApplicationContactForm: React.FC<ApplicationContactFormProps> = ({
  onSubmit,
  initialData,
  isLoading = false,
}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: initialData,
    mode: 'onChange',
  });

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputField
        label={t('form.firstName')}
        placeholder={t('form.firstNamePlaceholder')}
        subtext={t('form.firstNameSubtext')}
        {...register('firstName', {
          required: 'First name is required',
          minLength: {
            value: 2,
            message: 'First name must be at least 2 characters',
          },
        })}
        errorMessage={errors.firstName?.message}
        required
      />

      <InputField
        label={t('form.lastName')}
        placeholder={t('form.lastNamePlaceholder')}
        subtext={t('form.lastNameSubtext')}
        {...register('lastName', {
          required: 'Last name is required',
          minLength: {
            value: 2,
            message: 'Last name must be at least 2 characters',
          },
        })}
        errorMessage={errors.lastName?.message}
        required
      />

      <InputField
        label={t('form.email')}
        type="email"
        placeholder={t('form.emailPlaceholder')}
        subtext={t('form.emailSubtext')}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Please enter a valid email address',
          },
        })}
        errorMessage={errors.email?.message}
        required
      />

      <InputField
        label={t('form.phone')}
        type="tel"
        placeholder={t('form.phonePlaceholder')}
        subtext={t('form.phoneSubtext')}
        {...register('phone', {
          required: 'Phone number is required',
          pattern: {
            value: /^[\d\s\-()+]+$/,
            message: 'Please enter a valid phone number',
          },
        })}
        errorMessage={errors.phone?.message}
        required
      />

      <ButtonContainer>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? t('form.submitLoading') : t('form.submit')}
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};
