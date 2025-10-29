import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { ApplicationContactForm } from './ApplicationContactForm';
import { Button } from './Button';

const meta = {
  title: 'Organisms/ApplicationContactForm',
  component: ApplicationContactForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A contact form for mortgage application with validation using react-hook-form.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ApplicationContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: fn(),
    isLoading: false,
  },
};

export const WithCustomActions: Story = {
  args: {
    onSubmit: fn(),
    isLoading: false,
    renderActions: (submitButton: React.ReactNode) => (
      <div style={{ display: 'flex', gap: 8 }}>
        {submitButton}
        <Button type="button" onClick={fn()}>
          Cancel
        </Button>
      </div>
    ),
  },
};
