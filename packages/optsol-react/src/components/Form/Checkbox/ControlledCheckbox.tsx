import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps
} from '@mui/material';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState
} from 'react-hook-form';

import InputError from '../InputError';

export interface CheckboxProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, 'render'>,
    Omit<MuiCheckboxProps, 'defaultValue' | 'name'> {
  label?: string;
  errors?: FieldError | string;
  disabled?: boolean;
}

export default function ControlledCheckbox<T extends FieldValues>({
  control,
  errors,
  name,
  label,
  disabled = false,
  onChange,
  ...props
}: CheckboxProps<T>) {
  const formState = useFormState<T>({ control });
  const error = get(formState.errors, name);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange: onCheckboxChange, value } }) => (
          <FormControlLabel
            color="primary"
            label={label}
            control={
              <MuiCheckbox
                checked={value}
                disabled={disabled}
                onChange={(e, checked) => {
                  onCheckboxChange(e, checked);
                  onChange?.(e, checked);
                }}
                {...props}
              />
            }
          />
        )}
      />
      <InputError error={error ?? errors} />
    </>
  );
}
