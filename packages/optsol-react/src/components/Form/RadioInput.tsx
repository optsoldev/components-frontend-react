import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps
} from '@mui/material';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState
} from 'react-hook-form';

import InputError from './InputError/InputError';
export interface RadioOptionProps {
  value: string | number | boolean;
  label: string;
}

export interface RadioProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<RadioGroupProps, 'defaultValue' | 'name'> {
  label?: string;
  errors?: FieldError | string;
  disabled?: boolean;
  values: RadioOptionProps[];
}

export default function RadioInput<T extends FieldValues>({
  control,
  errors,
  name,
  label,
  values,
  onChange,
  disabled = false,
  ...radioProps
}: RadioProps<T>) {
  const formState = useFormState<T>({ control });
  const error = get(formState.errors, name);

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange: onChangeField, value } }) => (
          <RadioGroup
            {...radioProps}
            aria-labelledby="radio-buttons-group-label"
            onChange={onChange ?? onChangeField}
            defaultValue={value}
            value={value}
          >
            {values.map((data) => {
              return (
                <FormControlLabel
                  key={data.value.toString()}
                  color="primary"
                  value={data.value}
                  control={<Radio disabled={disabled} />}
                  label={data.label}
                />
              );
            })}
          </RadioGroup>
        )}
      />
      <InputError error={error ?? errors} />
    </>
  );
}
