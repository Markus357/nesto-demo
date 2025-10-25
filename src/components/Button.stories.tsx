import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A button component with a bold gradient background using brand colors. Features bold black text and a gradient from golden yellow to red-orange.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary'],
      description: 'Button variant style',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback function when button is clicked',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
  },
};

export const WithLongText: Story = {
  args: {
    children: 'Submit Application',
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const SubmitType: Story = {
  args: {
    children: 'Submit Form',
    variant: 'primary',
    type: 'submit',
  },
};
