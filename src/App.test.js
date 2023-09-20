import { render, screen } from '@testing-library/react';
import RandomQuoteMachine from './App';

test('renders learn react link', () => {
  render(<RandomQuoteMachine/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
