import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders learn react link', () => {
  render(<Card />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
