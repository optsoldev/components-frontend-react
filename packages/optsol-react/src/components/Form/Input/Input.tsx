import { TextField, TextFieldProps } from '@mui/material';

import { FlexBox } from '../../Flexbox';
import InputError from '../InputError';

export type InputProps = TextFieldProps & {
  errorMessage?: string;
};

export const Input = ({ label, errorMessage, ...props }: InputProps) => {
  const hasError = Boolean(errorMessage);
  return (
    <FlexBox flexDirection="column">
      {/* {label && <InputLabel error={hasError}>{label}</InputLabel>} */}
      <TextField
        fullWidth
        size="small"
        label={label}
        error={hasError}
        sx={{ marginTop: 0.5 }}
        {...props}
      />
      <InputError error={errorMessage} />
    </FlexBox>
  );
};

export default Input;
