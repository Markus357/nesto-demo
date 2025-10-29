import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
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
    size: {
      control: 'radio',
      options: ['md', 'sm'],
      description: 'Button size',
    },
    pill: {
      control: 'boolean',
      description: 'If true, renders a pill-shaped button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the button expands to full width',
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
    size: 'md',
    pill: false,
  },
};

export const WithLongText: Story = {
  args: {
    children: 'Submit Application',
    variant: 'primary',
    size: 'md',
    pill: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
    size: 'md',
    pill: false,
  },
};

export const SubmitType: Story = {
  args: {
    children: 'Submit Form',
    variant: 'primary',
    type: 'submit',
    size: 'md',
    pill: false,
  },
};

export const Pill: Story = {
  args: {
    children: 'Pill Button',
    variant: 'primary',
    size: 'md',
    pill: true,
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
    pill: false,
    fullWidth: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'center' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="sm" pill>Pill Small</Button>
      <Button variant="primary" size="md" pill>Pill Medium</Button>
    </div>
  ),
} as unknown as Story;

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Button variant="primary" size="md" fullWidth>
        Full Width Button
      </Button>
    </div>
  ),
} as unknown as Story;
