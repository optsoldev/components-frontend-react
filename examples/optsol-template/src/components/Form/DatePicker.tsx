import { InputLabel, TextFieldProps } from '@mui/material';
import {
  LocalizationProvider,
  DatePicker as MaterialDatePicker,
  DatePickerProps as MaterialDatePickerProps
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormContext,
  useFormState
} from 'react-hook-form';

import InputError from './InputError/InputError';

export interface DatePickerProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<MaterialDatePickerProps<Date>, 'onChange' | 'defaultValue'>,
    Pick<TextFieldProps, 'inputProps'> {
  placeholder?: string;
  errors?: FieldError | string;
  mascara?: (texto: string) => string;
}

export default function DatePicker<T extends FieldValues>({
  name,
  control,
  errors: formErrors,
  placeholder = 'dd/mm/aaaa',
  ...inputProps
}: DatePickerProps<T>) {
  const { setValue } = useFormContext();
  const { errors } = useFormState({ control });
  const error = get(errors, name);

  return (
    <>
      <InputLabel>{inputProps.label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, name } }) => (
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={ptBR}
          >
            <MaterialDatePicker
              value={new Date(value) ?? ''}
              onChange={(v) => {
                if (v) setValue<string>(name, v);
              }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  sx: { marginTop: 1 },
                  inputProps: { placeholder },
                  variant: 'outlined',
                  color: error ? 'error' : 'primary'
                }
              }}
            />
          </LocalizationProvider>
        )}
      />
      <InputError error={error ?? formErrors} />
    </>
  );
}
