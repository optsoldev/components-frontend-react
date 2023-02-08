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
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import InputError from './InputError';

interface Props<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<
      NumericFormatProps<StandardTextFieldProps>,
      'defaultValue' | 'name' | 'format'
    > {
  errors?: FieldError | string;
  valueType?: 'text' | 'number' | 'formatted';
}

export const NumericInput = <T extends FieldValues>(props: Props<T>) => {
  const {
    errors: formErrors,
    name,
    type,
    label,
    valueType = 'number',
    ...inputProps
  } = props;
  const { control } = useFormContext<T>();
  const formState = useFormState({ control });
  const error = get(formState.errors, name);

  return (
    <>
      {label && <InputLabel>{label}</InputLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <NumericFormat
            {...inputProps}
            fullWidth
            color="primary"
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
                    value: inputValue
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
