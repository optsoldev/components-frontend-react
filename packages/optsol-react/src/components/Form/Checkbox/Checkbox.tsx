import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  Typography
} from '@mui/material';

import InputError from '../InputError';

export interface CheckboxProps extends Omit<MuiCheckboxProps, 'color'> {
  label?: string;
  color?: string;
  errorMessage?: string;
}

export default function Checkbox({
  label,
  errorMessage,
  disabled = false,
  color,
  ...props
}: CheckboxProps) {
  return (
    <>
      <FormControlLabel
        color="primary"
        label={<Typography color={color}>{label}</Typography>}
        control={<MuiCheckbox sx={{ color }} disabled={disabled} {...props} />}
      />
      <InputError error={errorMessage} />
    </>
  );
}
