import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from './Products';

describe('Products Component', () => {
  it('renders product name', () => {
    render(<Products />);
    const productNames = screen.getAllByText(/Shirt/i);
    expect(productNames.length).toBeGreaterThan(0);
  });
});
