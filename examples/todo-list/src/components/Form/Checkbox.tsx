import {
  Checkbox as MaterialCheckbox,
  CheckboxProps as CheckboxDefaultProps,
  FormControlLabel,
} from "@mui/material";
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState,
} from "react-hook-form";
import InputError from "./InputError";

export interface CheckboxProps<T extends FieldValues>
  extends Omit<ControllerProps<T>, "render">,
    Omit<CheckboxDefaultProps, "defaultValue" | "name"> {
  errors?: FieldError | string;
  label?: string;
}

export function Checkbox<T extends FieldValues>({
  control,
  errors,
  name,
  label,
}: CheckboxProps<T>) {
  const formState = useFormState<T>({ control });
  const error = get(formState.errors, name);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControlLabel
            control={
              <MaterialCheckbox value={value} onChange={onChange} name={name} />
            }
            label={label}
          />
        )}
      />
      <InputError error={error ?? errors} />
    </>
  );
}
