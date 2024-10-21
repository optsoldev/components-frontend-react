import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  SelectProps
} from '@mui/material';
import { PropsWithChildren } from 'react';

import { FlexBox } from '../../Flexbox';

type InputProps<T = unknown> = Omit<SelectProps<T>, 'variant'> & {
  label?: string;
};

export const Select = <T,>({
  label,
  name,
  children,
  ...props
}: PropsWithChildren<InputProps<T>>) => {
  return (
    <FlexBox flexDirection="column">
      <FormControl size="small">
        <InputLabel sx={{ marginTop: 0.5 }} id={`${name}-select-small-label`}>
          {label}
        </InputLabel>

        <MuiSelect
          fullWidth
          size="small"
          name={name}
          label={label}
          labelId={`${name}-select-small`}
          sx={{ marginTop: 0.5 }}
          {...props}
        >
          {children}
        </MuiSelect>
      </FormControl>
    </FlexBox>
  );
};
