import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  it('renders the Home heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Home/i);
    expect(heading).toBeInTheDocument();
  });
});
