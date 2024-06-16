import { InputLabel, Select as MuiSelect, SelectProps } from '@mui/material';
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
      {label && <InputLabel>{label}</InputLabel>}
      <MuiSelect fullWidth size="small" sx={{ marginTop: 0.5 }} {...props}>
        {children}
      </MuiSelect>
    </FlexBox>
  );
};

export default Select;
