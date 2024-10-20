import {
  FormControlLabel,
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  Typography
} from '@mui/material';

import { FlexBox } from '../../Flexbox';
import InputError from '../InputError';

export interface SwitchProps extends Omit<MuiSwitchProps, 'color'> {
  label?: string;
  color?: string;
  errorMessage?: string;
}

export default function Switch({
  label,
  errorMessage,
  disabled = false,
  color,
  ...props
}: Readonly<SwitchProps>) {
  return (
    <FlexBox flexDirection="column" pl={1}>
      <FormControlLabel
        color="primary"
        disabled={disabled}
        control={<MuiSwitch size="small" {...props} />}
        label={
          <Typography ml={1} color={color}>
            {label}
          </Typography>
        }
      />
      <InputError error={errorMessage} />
    </FlexBox>
  );
}
