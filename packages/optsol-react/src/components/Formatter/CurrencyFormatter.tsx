import { Typography, TypographyProps } from '@mui/material';
import { NumericFormat } from 'react-number-format';

type CurrencyProps = TypographyProps & {
  value: number;
};

const Currency = ({ value, ...props }: CurrencyProps) => {
  return (
    <Typography {...props}>
      <NumericFormat
        prefix="R$ "
        value={value}
        decimalScale={2}
        fixedDecimalScale
        displayType="text"
        decimalSeparator=","
        thousandSeparator="."
      />
    </Typography>
  );
};

export default Currency;
