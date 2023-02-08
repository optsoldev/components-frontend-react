import { InputLabel, TextField } from '@mui/material';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import { useState } from 'react';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormContext,
  useFormState
} from 'react-hook-form';
import InputError from './InputError';

interface Props<
  T extends FieldValues,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
> extends Omit<
      AutocompleteProps<
        { [x: string]: any },
        Multiple,
        DisableClearable,
        FreeSolo
      >,
      'defaultValue' | 'name' | 'renderInput'
    >,
    Omit<ControllerProps<T>, 'render'> {
  label?: string;
  placeholder?: string;
  errors?: FieldError | string;
}

export const AutoComplete = <T extends FieldValues>({
  placeholder,
  control,
  errors,
  name,
  label,
  options,
  ...rest
}: Props<T>) => {
  const [open, setOpen] = useState(false);
  const { setValue } = useFormContext();
  const { errors: formErros } = useFormState<T>({ control });
  const error = get(formErros, name);

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange: onInputChange, value } }) => (
          <Autocomplete
            fullWidth
            open={open}
            options={options}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            noOptionsText="Sem dados a exibir"
            onChange={(_e, option) => {
              if (option) setValue(name, option.value);
            }}
            value={options.find((option) => option.value === value) ?? null}
            onInputChange={(e) => {
              if (e) onInputChange(e);
            }}
            isOptionEqualToValue={(option) => option.value === value}
            {...rest}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  fullWidth
                  placeholder={placeholder}
                  color={error ? 'error' : 'primary'}
                  sx={{ marginTop: 1 }}
                />
              );
            }}
          />
        )}
      />
      <InputError error={error ?? errors} />
    </>
  );
};
