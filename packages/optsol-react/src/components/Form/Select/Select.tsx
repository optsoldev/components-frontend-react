import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  SelectProps
} from '@mui/material';
import { PropsWithChildren } from 'react';

import { FlexBox } from '../../Flexbox';

type InputProps = Omit<SelectProps, 'variant'> & {
  label?: string;
};

const Select = ({
  label,
  children,
  ...props
}: PropsWithChildren<InputProps>) => {
  return (
    <FlexBox flexDirection="column">
      <FormControl size="small">
        <InputLabel sx={{ marginTop: 0.5 }} id={`${name}-select-small-label`}>
          {label}
        </InputLabel>

        <MuiSelect
          label={label}
          fullWidth
          size="small"
          sx={{ marginTop: 0.5 }}
          {...props}
        >
          {children}
        </MuiSelect>
      </FormControl>
    </FlexBox>
  );
};

export default Select;
