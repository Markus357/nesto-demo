import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { InputField } from './InputField';

const meta = {
  title: 'Molecules/InputField',
  component: InputField,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A complete input field component with label, input, and optional subtext or error message.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    value: '',
    onChange: fn(),
  },
};

export const WithSubtext: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    value: '',
    onChange: fn(),
    subtext: 'Please enter your first and last name',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    value: 'invalid-email',
    onChange: fn(),
    errorMessage: 'Please enter a valid email address',
  },
};

export const Required: Story = {
  args: {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    value: '',
    onChange: fn(),
    required: true,
    subtext: 'Required field',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Account Number',
    placeholder: 'Enter account number',
    value: '123456789',
    onChange: fn(),
    disabled: true,
    subtext: 'This field cannot be edited',
  },
};
