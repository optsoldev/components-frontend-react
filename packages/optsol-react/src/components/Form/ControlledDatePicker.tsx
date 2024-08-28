import { TextFieldProps } from '@mui/material';
import {
  DatePicker as MaterialDatePicker,
  DatePickerProps as MaterialDatePickerProps
} from '@mui/x-date-pickers';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState
} from 'react-hook-form';

import { FlexBox } from '../Flexbox';

import InputError from './InputError';

export interface DatePickerProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<MaterialDatePickerProps<Date>, 'onChange' | 'defaultValue' | 'name'>,
    Pick<TextFieldProps, 'inputProps'> {
  placeholder?: string;
  errors?: FieldError | string;
}

export default function ControlledDatePicker<T extends FieldValues>({
  name,
  label,
  control,
  errors: formErrors,
  placeholder = 'dd/mm/aaaa',
  onChange,
  ...inputProps
}: Readonly<DatePickerProps<T>> &
  (
    | {
        value: Date | null;
        onChange: (date: Date | null) => void;
      }
    | {
        value?: never;
        onChange?: never;
      }
  )) {
  const { errors } = useFormState({ control });
  const error = get(errors, name);

  return (
    <FlexBox flexDirection="column">
      {/* <InputLabel error={Boolean(error)}>{label}</InputLabel> */}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange: fieldOnChange, value } }) => (
          <MaterialDatePicker
            label={label}
            value={value ? new Date(value) : null}
            onChange={(e) => (onChange ? onChange(e) : fieldOnChange(e))}
            {...inputProps}
            slotProps={{
              textField: {
                size: 'small',
                error: !!error,
                fullWidth: true,
                sx: { marginTop: 0.5 },
                inputProps: { placeholder }
              }
            }}
          />
        )}
      />
      <InputError error={error ?? formErrors} />
    </FlexBox>
  );
}
