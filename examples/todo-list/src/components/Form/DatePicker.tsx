import { InputLabel, StandardTextFieldProps, TextField } from '@mui/material';
import { DatePicker as MaterialDatePicker } from '@mui/x-date-pickers';
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormContext,
  useFormState
} from 'react-hook-form';
import InputError from './InputError';

interface Props<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<StandardTextFieldProps, 'defaultValue' | 'name'> {
  control: Control<T, any>;
  errors?: FieldError | string;
  mascara?: (texto: string) => string;
}

export default function DatePicker<T extends FieldValues>({
  control,
  errors: formErrors,
  name,
  ...inputProps
}: Props<T>) {
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
          <MaterialDatePicker
            value={value ?? null}
            onChange={(v) => {
              if (v) setValue(name, v);
            }}
            renderInput={(params) => (
              <TextField
                fullWidth
                value={value}
                variant="outlined"
                {...params}
                inputProps={{
                  ...params.inputProps,
                  placeholder: 'dd/mm/aaaa'
                }}
                color={error ? 'error' : 'primary'}
                sx={{ marginTop: 1 }}
              />
            )}
          />
        )}
      />
      <InputError error={error ?? formErrors} />
    </>
  );
}
