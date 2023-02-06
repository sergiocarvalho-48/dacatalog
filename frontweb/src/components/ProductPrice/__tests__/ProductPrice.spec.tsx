import { render, screen } from '@testing-library/react';
import ProducPrice from '..';

test('should render ProductPrice', () => {
  const price = 10.1;

  render(
    <ProducPrice price={price} />
  );

  expect(screen.getByText("R$")).toBeInTheDocument();
  expect(screen.getByText("10,10")).toBeInTheDocument();
});
