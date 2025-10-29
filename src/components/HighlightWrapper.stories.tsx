import type { Meta, StoryObj } from '@storybook/react';
import { HighlightWrapper } from './HighlightWrapper';

const meta = {
  title: 'Molecules/HighlightWrapper',
  component: HighlightWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A wrapper component that applies a golden yellow outline to its first child and overlays the BestBadge on the top right corner.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HighlightWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          position: 'relative',
          backgroundColor: 'var(--white)',
          border: '1px solid #000',
          borderRadius: '12px',
          width: 320,
          height: 200,
          padding: 24,
          zIndex: 1,
        }}
      />
    ),
    text: '🏆 Our Best Rate 🏆',
  },
};
