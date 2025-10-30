import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import styled from 'styled-components';

// Mock i18n so we don't need a provider
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (k: string) => k })
}));
// Mock LoadingSpinner itself (which depends on lucide-react) to avoid external deps
vi.mock('../LoadingSpinner', () => {
  const LoadingSpinnerWrapper = styled.div``;
  const LoadingSpinner = () => null;
  return { LoadingSpinner, LoadingSpinnerWrapper };
});

import { ApplicationsPage } from '../ApplicationsPage';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('ApplicationsPage (mobile cards) integration', () => {
  it('calls onEditApplication with id when Edit is clicked on a card', () => {
    const applications = [
      {
        id: 'a1',
        productId: 'p1',
        applicants: [
          { firstName: 'Jane', lastName: 'Doe', email: 'j@d.com', phone: '555-1234' }
        ]
      },
      {
        id: 'a2',
        productId: 'p2',
        applicants: [
          { firstName: 'John', lastName: 'Smith', email: 'j@s.com', phone: '555-5678' }
        ]
      }
    ] as any;
    const products = [
      { id: 'p1', name: 'Fixed 5y' },
      { id: 'p2', name: 'Variable 5y' }
    ] as any;

    const onEditApplication = vi.fn();

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(
        <ApplicationsPage
          applications={applications}
          products={products}
          onEditApplication={onEditApplication}
        />
      );
    });

    // Prefer the first visible Edit button which belongs to the mobile cards area
    const buttons = Array.from(container.querySelectorAll('button'));
    const editButton = buttons.find(btn => (btn.textContent || '').toLowerCase().includes('edit')) || buttons[0];

    act(() => {
      editButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onEditApplication).toHaveBeenCalledTimes(1);
    expect(onEditApplication).toHaveBeenCalledWith('a1');

    act(() => {
      root.unmount();
    });
    container.remove();
  });
});


