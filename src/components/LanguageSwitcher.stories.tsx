import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { LanguageSwitcher } from './LanguageSwitcher';

const meta = {
  title: 'Atoms/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A two-option language switch styled with Nesto brand colors. Internally manages state and calls onChange with "en" or "fr".',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultLanguage: {
      control: 'radio',
      options: ['en', 'fr'],
      description: 'Initial language selection',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: {
      action: 'changed',
      description: 'Called when language changes with "en" or "fr"',
    },
  },
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultLanguage: 'en',
    onChange: fn(),
  },
};

export const StartFrench: Story = {
  args: {
    defaultLanguage: 'fr',
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    defaultLanguage: 'en',
    disabled: true,
  },
};
