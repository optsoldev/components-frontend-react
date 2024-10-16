import {
  ChipProps,
  ChipTypeMap,
  CircularProgress,
  TextField,
  UseAutocompleteProps
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  Path,
  PathValue,
  useFormContext,
  useFormState
} from 'react-hook-form';

import { FlexBox } from '../../Flexbox';
import InputError from '../InputError';

type PartiallyRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

/**
 * @deprecated This component is deprecated and will be removed in future versions, use ControlledAutocomplete.
 */

interface Props<
  T extends FieldValues,
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends PartiallyRequired<
      Omit<
        UseAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
        'defaultValue' | 'name' | 'renderInput' | 'options'
      >,
      'getOptionLabel' | 'isOptionEqualToValue'
    >,
    Omit<ControllerProps<T>, 'render'> {
  ChipProps?: ChipProps<ChipComponent>;

  label?: string;
  placeholder?: string;
  errors?: FieldError | string;
  defaultInputValue?: string;
  load: ((value: string) => Promise<Value[]>) | Value[];
}

const AutocompleteAsync = <
  T extends FieldValues,
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
>({
  label,
  placeholder,
  value,
  control,
  errors,
  load,
  name,
  onChange,
  isOptionEqualToValue,
  getOptionLabel,
  onInputChange: onAutocompleteInputChange,
  ...rest
}: Props<T, Value, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<readonly Value[]>(
    Array.isArray(load) ? [...load] : []
  );

  useEffect(() => {
    if (Array.isArray(load)) setOptions([...load]);
    if (!open || Array.isArray(load)) return;
    setLoading(true);

    load.call({}, searchValue).then((values: Value[]) => {
      setLoading(false);
      setOptions(values);
    });
  }, [searchValue, open, load, value]);

  const changeHandler = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  const { watch, setValue } = useFormContext<T>();
  const { errors: formErros } = useFormState<T>({ control });
  const error = get(formErros, name);

  return (
    <FlexBox flexDirection="column" flexGrow={1}>
      {/* <InputLabel error={Boolean(error)}>{label}</InputLabel> */}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange: onInputChange } }) => (
          <Autocomplete<Value, Multiple, DisableClearable, FreeSolo>
            fullWidth
            {...rest}
            open={open}
            loading={loading}
            options={options}
            value={watch(name)}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            noOptionsText="Sem dados a exibir"
            onOpen={(e) => {
              setOpen(true);
              rest.onOpen?.(e);
            }}
            onClose={(e, r) => {
              setOpen(false);
              rest.onClose?.(e, r);
            }}
            onChange={(ev, option, reason, details) => {
              onInputChange({ ...ev, target: { ...ev.currentTarget } });
              setValue(name, option as PathValue<T, Path<T>>);
              onChange?.(ev, option, reason, details);
            }}
            onInputChange={(e, value, reason) => {
              debouncedChangeHandler(value);
              onAutocompleteInputChange?.(e, value, reason);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                label={label}
                error={!!error}
                sx={{ marginTop: 0.5 }}
                placeholder={placeholder}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress
                          color="inherit"
                          size={20}
                          sx={{ mr: 2 }}
                        />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  )
                }}
              />
            )}
          />
        )}
      />
      <InputError error={error ?? errors} />
    </FlexBox>
  );
};

export default AutocompleteAsync;
