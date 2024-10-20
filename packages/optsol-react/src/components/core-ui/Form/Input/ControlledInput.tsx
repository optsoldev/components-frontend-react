import { StandardTextFieldProps, TextField } from '@mui/material';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState,
} from 'react-hook-form';

import { FlexBox } from '../../Flexbox';
import InputError from '../InputError';

export interface ControlledInputProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<StandardTextFieldProps, 'defaultValue' | 'name'> {
  errors?: FieldError | string;
}

export default function ControlledInput<T extends FieldValues>({
  control,
  errors,
  name,
  label,
  ...inputProps
}: Readonly<ControlledInputProps<T>>) {
  const formState = useFormState<T>({ control });
  const error = get(formState.errors, name);

  return (
    <FlexBox flexDirection="column">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            {...inputProps}
            label={label}
            fullWidth
            size="small"
            error={!!error}
            value={value ?? ''}
            onChange={onChange}
            sx={{ marginTop: 0.5 }}
          />
        )}
      />
      <InputError error={error ?? errors} />
    </FlexBox>
  );
}
