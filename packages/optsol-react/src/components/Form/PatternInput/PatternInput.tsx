import { StandardTextFieldProps, TextField } from '@mui/material';
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
  const {
    errors: formErrors,
    name,
    type,
    label,
    onChange,
    ...inputProps
  } = props;
  const { control } = useFormContext<T>();
  const formState = useFormState({ control });
  const error = get(formState.errors, name);

  return (
    <>
      {/* <InputLabel error={Boolean(error)}>{label}</InputLabel> */}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PatternFormat
            fullWidth
            size="small"
            label={label}
            type={type}
            error={Boolean(error)}
            sx={{ marginTop: 0.5 }}
            customInput={TextField}
            value={field.value ? field.value : ''}
            onChange={onChange}
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
            {...inputProps}
          />
        )}
      />
      <InputError error={error ?? formErrors} />
    </>
  );
};

export default PatternInput;
