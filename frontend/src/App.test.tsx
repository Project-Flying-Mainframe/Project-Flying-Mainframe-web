import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  it('renders Home link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole('link', { name: 'Home' });
    expect(linkElement).toBeInTheDocument();
  });

  it('renders Catalog link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole('link', { name: 'Catalog' });
    expect(linkElement).toBeInTheDocument();
  });
});
