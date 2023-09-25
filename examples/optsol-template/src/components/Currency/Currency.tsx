import { NumericFormat } from 'react-number-format';

interface Props {
  value: number;
  color?: string;
}

const Currency = ({ value, color }: Props) => {
  return (
    <NumericFormat
      prefix="R$ "
      style={{ color }}
      value={value}
      decimalScale={2}
      fixedDecimalScale
      displayType="text"
      decimalSeparator=","
      thousandSeparator="."
    />
  );
};

export default Currency;
