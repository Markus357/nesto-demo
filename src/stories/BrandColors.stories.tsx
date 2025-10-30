import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

const SwatchRow = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 16px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

const SwatchBox = styled.div<{ token: string }>`
  width: 64px;
  height: 40px;
  border-radius: 6px;
  background: ${p => `var(${p.token})`};
  border: ${p => (p.token === '--white' ? '1px solid #ddd' : '1px solid rgba(0,0,0,0.08)')};
`;

const Token = styled.code`
  font-family: monospace;
  font-size: 12px;
`;

const Usage = styled.div`
  color: #555;
  font-size: 14px;
`;

const Section = styled.div`
  max-width: 720px;
`;

const BrandColorsDoc: React.FC = () => (
  <Section>
    <h1>Brand Colors</h1>
    <p>A quick reference for our brand color tokens and where they’re used.</p>

    <SwatchRow>
      <SwatchBox token="--deep-navy" />
      <div>
        <div style={{ fontWeight: 700 }}>Deep Navy</div>
        <Token>--deep-navy</Token> — {colors.deepNavy}
        <Usage>Primary text color across the app; labels and table text.</Usage>
      </div>
    </SwatchRow>

    <SwatchRow>
      <SwatchBox token="--royal-blue" />
      <div>
        <div style={{ fontWeight: 700 }}>Royal Blue</div>
        <Token>--royal-blue</Token> — {colors.royalBlue}
        <Usage>Headings, accents, and component headers like ApplicationCard name bar. Links also use this color.</Usage>
      </div>
    </SwatchRow>

    <SwatchRow>
      <SwatchBox token="--golden-yellow" />
      <div>
        <div style={{ fontWeight: 700 }}>Golden Yellow</div>
        <Token>--golden-yellow</Token> — {colors.goldenYellow}
        <Usage>Used in the primary Button gradient and highlight accents.</Usage>
      </div>
    </SwatchRow>

    <SwatchRow>
      <SwatchBox token="--red-orange" />
      <div>
        <div style={{ fontWeight: 700 }}>Red Orange</div>
        <Token>--red-orange</Token> — {colors.redOrange}
        <Usage>Used in the primary Button gradient and required asterisks; also error accents.</Usage>
      </div>
    </SwatchRow>

    <SwatchRow>
      <SwatchBox token="--white" />
      <div>
        <div style={{ fontWeight: 700 }}>White</div>
        <Token>--white</Token> — {colors.white}
        <Usage>Default page background and card surfaces.</Usage>
      </div>
    </SwatchRow>
  </Section>
);

const meta = {
  title: 'Foundations/Brand Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Swatches for brand color variables with notes on usage.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandColorsDoc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BrandColorsDoc />,
};


