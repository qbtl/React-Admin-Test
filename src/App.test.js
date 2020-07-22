import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome to the administration text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to the administration/i);
  expect(linkElement).toBeInTheDocument();
});
