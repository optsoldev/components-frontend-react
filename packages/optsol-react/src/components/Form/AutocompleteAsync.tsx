import {
  ChipProps,
  ChipTypeMap,
  CircularProgress,
  TextField,
  UseAutocompleteProps
} from '@mui/material';
import Autocomplete, { AutocompleteValue } from '@mui/material/Autocomplete';
import debounce from 'lodash.debounce';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState
} from 'react';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState
} from 'react-hook-form';

import { FlexBox } from '../Flexbox';

import InputError from './InputError';

type PartiallyRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

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
        'value' | 'defaultValue' | 'name' | 'renderInput' | 'options'
      >,
      'getOptionLabel' | 'isOptionEqualToValue'
    >,
    Omit<ControllerProps<T>, 'render'> {
  ChipProps?: ChipProps<ChipComponent>;
  value?: AutocompleteValue<Value, Multiple, DisableClearable, FreeSolo>;
  label?: string;
  placeholder?: string;
  errors?: FieldError | string;
  load: (value: string) => Promise<Value[]>;
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
  ...rest
}: Props<T, Value, Multiple, DisableClearable, FreeSolo, ChipComponent>) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const [options, setOptions] = useState<readonly Value[]>(
    value ? ([value] as Value[]) : []
  );

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useLayoutEffect(() => {
    if (!open) return;
    setLoading(true);

    load.call({}, searchValue).then((values: Value[]) => {
      setLoading(false);
      setOptions(values);
    });
  }, [searchValue, open, load]);

  const changeHandler = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

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
            value={selectedValue}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            noOptionsText="Sem dados a exibir"
            onChange={(ev, option, reason, details) => {
              onInputChange({ ...ev, target: { ...ev.currentTarget } });
              setSelectedValue(option);
              onChange?.(ev, option, reason, details);
            }}
            onInputChange={(_e, value) => {
              debouncedChangeHandler(value);
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
