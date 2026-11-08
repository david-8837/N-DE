import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '../components/ErrorBoundary';

const ThrowingComponent = () => {
  throw new Error('Test Explosion in Component Tree');
};

describe('ErrorBoundary Component', () => {
  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child-content">Child UI Healthy</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('child-content')).toHaveTextContent('Child UI Healthy');
  });

  it('renders fallback error safeguard when a child throws', () => {
    const originalConsoleError = console.error;
    console.error = () => {};

    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Application Exception')).toBeInTheDocument();
    expect(screen.getByText('Reload Studio')).toBeInTheDocument();

    console.error = originalConsoleError;
  });
});
