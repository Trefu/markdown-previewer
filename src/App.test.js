import { render, screen } from '@testing-library/react';
import App from './App';

test('renders editor and preview elements required by freeCodeCamp', () => {
  render(<App />);
  expect(document.getElementById('editor')).toBeInTheDocument();
  expect(document.getElementById('preview')).toBeInTheDocument();
});
