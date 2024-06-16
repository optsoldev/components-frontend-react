import { PatternFormat } from 'react-number-format';

interface Props {
  value: number | string;
}

const CpfCnpjFormatter = ({ value }: Props) => {
  const valueLength = String(value).trim().length;
  const format = valueLength > 11 ? '##.###.###/####-##' : '###.###.###-##';

  return <PatternFormat value={value} displayType="text" format={format} />;
};

export default CpfCnpjFormatter;
