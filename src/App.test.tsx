import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test.skip('renders learn react link', () => {
  render(<App />);
  screen.debug(undefined, Infinity);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
