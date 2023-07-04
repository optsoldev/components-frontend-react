import { InputLabel, StandardTextFieldProps, TextField } from '@mui/material';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState
} from 'react-hook-form';

import InputError from '../InputError/InputError';
export interface InputProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<StandardTextFieldProps, 'defaultValue' | 'name'> {
  errors?: FieldError | string;
}

export default function Input<T extends FieldValues>({
  control,
  errors,
  name,
  label,
  ...inputProps
}: InputProps<T>) {
  const formState = useFormState<T>({ control });
  const error = get(formState.errors, name);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            {...inputProps}
            fullWidth
            value={value ?? ''}
            onChange={onChange}
            sx={{ marginTop: 1 }}
            color={error ? 'error' : 'primary'}
          />
        )}
      />
      <InputError error={error ?? errors} />
    </>
  );
}
