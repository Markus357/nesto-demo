import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

const meta = {
  title: 'Atoms/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    docs: {
      description: {
        component: 'Simple centered error message styled with the brand red color.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'Something went wrong. Please try again later.',
  },
};


