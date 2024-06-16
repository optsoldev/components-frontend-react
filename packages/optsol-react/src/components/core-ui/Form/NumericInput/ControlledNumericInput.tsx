import { StandardTextFieldProps, TextField } from '@mui/material';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormContext,
  useFormState,
} from 'react-hook-form';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

import InputError from '../InputError';

export interface NumericInputProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<
      NumericFormatProps<StandardTextFieldProps>,
      'defaultValue' | 'name' | 'format'
    > {
  errors?: FieldError | string;
  valueType?: 'text' | 'number' | 'formatted';
}

const ControlledNumericInput = <T extends FieldValues>(
  props: NumericInputProps<T>,
) => {
  const {
    errors: formErrors,
    name,
    label,
    valueType = 'number',
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
          <NumericFormat
            {...inputProps}
            fullWidth
            size="small"
            label={label}
            error={!!error}
            sx={{ mt: 0.5 }}
            customInput={TextField}
            value={field.value ? field.value : ''}
            onValueChange={(values, source) => {
              if (source.event) {
                const { event } = source;
                const { value, formattedValue, floatValue } = values;

                let inputValue: string | number = '';
                if (valueType === 'text') inputValue = value;
                if (valueType === 'formatted') inputValue = formattedValue;
                if (valueType === 'number') inputValue = floatValue ?? 0;

                field.onChange({
                  ...event,
                  target: {
                    ...event.target,
                    value: inputValue,
                  },
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

export default ControlledNumericInput;
