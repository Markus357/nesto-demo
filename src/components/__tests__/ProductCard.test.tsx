import React from 'react';
import { describe, it, expect, vi, afterEach, beforeAll } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import { act } from 'react';

// Mock i18n to avoid needing a provider in tests
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

// Render helper without RTL
function render(element: React.ReactElement) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root: Root = createRoot(container);
  act(() => {
    root.render(element);
  });
  return {
    container,
    unmount: () => {
      act(() => {
        root.unmount();
      });
      container.remove();
    },
  };
}

// Under test
import { ProductCard } from '../ProductCard';

afterEach(() => {
  // Ensure DOM is clean between tests
  document.body.innerHTML = '';
});

describe('ProductCard', () => {
  beforeAll(() => {
    // jsdom doesn't implement matchMedia; provide a minimal stub
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: /min-width:\s*768px/.test(query),
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        addListener: vi.fn(), // deprecated, but some libs still call it
        removeListener: vi.fn(), // deprecated
        dispatchEvent: vi.fn(),
      })),
    });
  });
  it('renders title, name, rate value and default button text', () => {
    const onSelect = vi.fn();

    const { container, unmount } = render(
      <ProductCard
        title="5 Year Fixed"
        name="Standard"
        value={3.99}
        buttonText="Start Application"
        onSelect={onSelect}
      />
    );

    expect(container.textContent).toContain('5 Year Fixed');
    expect(container.textContent).toContain('Standard');
    expect(container.textContent).toContain('3.99');
    // percent symbol is rendered separately
    expect(container.textContent).toContain('%');

    const button = container.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.textContent).toContain('Start Application');
    expect(button?.getAttribute('disabled')).toBeNull();

    unmount();
  });

  it('shows loading state text and disables the button when loading', () => {
    const onSelect = vi.fn();

    const { container, unmount } = render(
      <ProductCard
        title="3 Year Fixed"
        name="Standard"
        value={3.75}
        buttonText="Start Application"
        loadingButtonText="Submitting…"
        isLoading
        onSelect={onSelect}
      />
    );

    const button = container.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.textContent).toContain('Submitting…');
    expect(button?.getAttribute('disabled')).not.toBeNull();

    unmount();
  });
});


