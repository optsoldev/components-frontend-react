import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  StandardSelectProps
} from '@mui/material';
import { PropsWithChildren } from 'react';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState
} from 'react-hook-form';

import { FlexBox } from '../../Flexbox';
import InputError from '../InputError';

export type ControlledSelectProps<T extends FieldValues> = Omit<
  ControllerProps<T>,
  'render'
> &
  Omit<StandardSelectProps, 'defaultValue' | 'name' | 'variant'> & {
    label?: string;
    errors?: FieldError | string;
  } & (
    | {
        value: string | number;
        onChange: (event: SelectChangeEvent<string | number>) => void;
      }
    | {
        value?: never;
        onChange?: never;
      }
  );

export default function ControlledSelect<T extends FieldValues>({
  control,
  errors,
  name,
  label,
  value,
  children,
  onChange,
  ...inputProps
}: Readonly<PropsWithChildren<ControlledSelectProps<T>>>) {
  const formState = useFormState<T>({ control });
  const error = get(formState.errors, name);

  return (
    <FlexBox flexDirection="column" width={1}>
      {/* <InputLabel error={Boolean(error)}>{label}</InputLabel> */}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange: fieldOnChange, value: fieldValue } }) => (
          <FormControl size="small">
            <InputLabel
              sx={{ marginTop: 0.5 }}
              id={`${name}-select-small-label`}
            >
              {label}
            </InputLabel>
            <Select
              fullWidth
              label={label}
              size="small"
              error={!!error}
              value={value ?? fieldValue}
              onChange={(e) => (onChange ? onChange(e) : fieldOnChange(e))}
              sx={{ marginTop: 0.5 }}
              labelId={`${name}-select-small-label`}
              {...inputProps}
            >
              {children}
            </Select>
          </FormControl>
        )}
      />
      <InputError error={error ?? errors} />
    </FlexBox>
  );
}
