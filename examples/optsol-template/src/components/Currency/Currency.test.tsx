import { colors } from '@mui/material';
import { render } from '@testing-library/react';
import Currency from './Currency';

test('renders currency with correct number format and prefix', () => {
  const { getByText } = render(<Currency value={1000.5} />);
  const currencyElement = getByText(/R\$ 1.000,50/i);
  expect(currencyElement).toBeInTheDocument();
});

test('renders currency with custom color if provided', () => {
  const color = colors.red[100];
  const { getByText } = render(<Currency value={500} color={color} />);
  const currencyElement = getByText(/R\$ 500,00/i);
  expect(currencyElement).toHaveStyle(`color: ${color}`);
});

test('renders currency with fixed decimal scale', () => {
  const { getByText } = render(<Currency value={99.555} />);
  const currencyElement = getByText(/R\$ 99,56/i);
  expect(currencyElement).toBeInTheDocument();
});
