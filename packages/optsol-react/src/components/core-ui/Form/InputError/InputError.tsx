import { Typography } from '@mui/material';
import { FieldError } from 'react-hook-form';

interface InputErrorProps {
  error?: FieldError | string;
}

const InputError = ({ error }: InputErrorProps) => {
  const message = !!error && typeof error !== 'string' ? error.message : error;

  return message ? (
    <Typography mt={0.5} color="error">
      {message}
    </Typography>
  ) : null;
};

export default InputError;
