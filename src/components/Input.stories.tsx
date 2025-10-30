import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Input } from './Input';
import { useState } from 'react';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A basic input field component with focus and disabled states.',
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
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'tel'],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    required: {
      control: 'boolean',
      description: 'Required field',
    },
    error: {
      control: 'boolean',
      description: 'Error state',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    value: '',
    onChange: fn(),
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Enter your name',
    value: 'John Doe',
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    value: '',
    onChange: fn(),
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Invalid value',
    value: '',
    onChange: fn(),
    error: true,
  },
};

export const Interactive: Story = {
  args: {
    placeholder: 'Type something...',
    value: '',
    onChange: fn(),
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      args.onChange?.(e);
    };

    return (
      <Input
        placeholder="Type something..."
        value={value}
        onChange={handleChange}
      />
    );
  },
};
