import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta = {
  title: 'Molecules/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navbar component with the Nesto logo. The logo size adjusts based on screen width using a media query hook.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <p>Resize the viewport to see the logo size change.</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
