import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within, expect } from 'storybook/test';
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

export const SubmitsValidData: Story = {
  args: {
    onSubmit: fn(),
    isLoading: false,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    await userEvent.clear(canvas.getByPlaceholderText(/enter your first name/i));
    await userEvent.type(canvas.getByPlaceholderText(/enter your first name/i), 'Jane');

    await userEvent.clear(canvas.getByPlaceholderText(/enter your last name/i));
    await userEvent.type(canvas.getByPlaceholderText(/enter your last name/i), 'Doe');

    await userEvent.clear(canvas.getByPlaceholderText(/enter your email/i));
    await userEvent.type(canvas.getByPlaceholderText(/enter your email/i), 'jane@example.com');

    await userEvent.clear(canvas.getByPlaceholderText(/enter your phone number/i));
    await userEvent.type(canvas.getByPlaceholderText(/enter your phone number/i), '555 123 4567');

    await userEvent.click(canvas.getByRole('button', { name: /save|submit|apply/i }));

    await expect(args.onSubmit).toHaveBeenCalledTimes(1);
    await expect(args.onSubmit).toHaveBeenCalledWith({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      phone: '555 123 4567',
    }, expect.anything());
  },
};
