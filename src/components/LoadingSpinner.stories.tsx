import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

const meta = {
  title: 'Atoms/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    docs: {
      description: {
        component:
          'A simple loader-circle spinner using currentColor (royal-blue by default via wrapper). Size and stroke width are configurable.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 8, max: 128, step: 1 } },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 24,
  },
  render: (args) => <LoadingSpinner {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <LoadingSpinner size={16} />
      <LoadingSpinner size={24} />
      <LoadingSpinner size={32} />
      <LoadingSpinner size={48} />
    </div>
  ),
};
