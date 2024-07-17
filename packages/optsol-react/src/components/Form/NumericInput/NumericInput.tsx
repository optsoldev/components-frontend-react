import { TextField, TextFieldProps } from '@mui/material';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

import InputError from '../InputError';

export interface NumericInputProps
  extends Omit<NumericFormatProps<TextFieldProps>, 'defaultValue' | 'format'> {
  errorMessage?: string;
  valueType?: 'text' | 'number' | 'formatted';
}

const ControlledNumericInput = (props: NumericInputProps) => {
  const {
    value,
    label,
    onChange,
    errorMessage,
    valueType = 'number',
    ...inputProps
  } = props;
  const hasError = Boolean(errorMessage);

  return (
    <>
      {/* <InputLabel error={Boolean(error)}>{label}</InputLabel> */}

      <NumericFormat
        fullWidth
        size="small"
        label={label}
        error={hasError}
        sx={{ mt: 0.5 }}
        customInput={TextField}
        value={value ?? ''}
        onValueChange={(values, source) => {
          if (source.event) {
            const { event } = source;
            const { value, formattedValue, floatValue } = values;

            let inputValue: string = '';
            if (valueType === 'text') inputValue = value;
            if (valueType === 'formatted') inputValue = formattedValue;
            if (valueType === 'number')
              inputValue = floatValue?.toString() ?? '';

            onChange?.({
              ...event,
              target: { ...event.currentTarget, value: inputValue },
            });
          }
        }}
        {...inputProps}
      />
      <InputError error={errorMessage} />
    </>
  );
};

export default ControlledNumericInput;
