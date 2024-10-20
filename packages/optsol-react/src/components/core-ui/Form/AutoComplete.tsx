import { TextField } from '@mui/material';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import { useState } from 'react';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormContext,
  useFormState,
} from 'react-hook-form';

import { FlexBox } from '../Flexbox';

import InputError from './InputError';

export interface AutoCompleteProps<
  T extends FieldValues,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
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

const AutoComplete = <T extends FieldValues>({
  placeholder,
  control,
  errors,
  name,
  label,
  options,
  ...rest
}: AutoCompleteProps<T>) => {
  const [open, setOpen] = useState(false);
  const { setValue } = useFormContext();
  const { errors: formErros } = useFormState<T>({ control });
  const error = get(formErros, name);

  return (
    <FlexBox flexDirection="column" width={1}>
      {/* <InputLabel error={Boolean(error)}>{label}</InputLabel> */}
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
                  size="small"
                  label={label}
                  error={!!error}
                  sx={{ marginTop: 0.5 }}
                  placeholder={placeholder}
                />
              );
            }}
          />
        )}
      />
      <InputError error={error ?? errors} />
    </FlexBox>
  );
};

export default AutoComplete;
