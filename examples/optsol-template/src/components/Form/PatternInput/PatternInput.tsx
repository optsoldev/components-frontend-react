import { InputLabel, StandardTextFieldProps, TextField } from '@mui/material';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormContext,
  useFormState
} from 'react-hook-form';
import { PatternFormat, PatternFormatProps } from 'react-number-format';

import InputError from '../InputError/InputError';

export interface PatternInputProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<PatternFormatProps<StandardTextFieldProps>, 'defaultValue' | 'name'> {
  errors?: FieldError | string;
}

const PatternInput = <T extends FieldValues>(props: PatternInputProps<T>) => {
  const { errors: formErrors, name, type, label, ...inputProps } = props;
  const { control } = useFormContext<T>();
  const formState = useFormState({ control });
  const error = get(formState.errors, name);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PatternFormat
            {...inputProps}
            fullWidth
            type={type}
            sx={{ marginTop: 1 }}
            customInput={TextField}
            value={field.value ? field.value : ''}
            color={error ? 'error' : 'primary'}
            onValueChange={(values, source) => {
              if (source.event) {
                const { event } = source;
                const { value, formattedValue } = values;
                field.onChange({
                  ...event,
                  target: {
                    ...event.target,
                    value: type === 'text' ? value : formattedValue
                  }
                });
              }
            }}
          />
        )}
      />
      <InputError error={error ?? formErrors} />
    </>
  );
};

export default PatternInput;
