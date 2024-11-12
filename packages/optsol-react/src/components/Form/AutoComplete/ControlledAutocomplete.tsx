import {
  ChipProps,
  ChipTypeMap,
  CircularProgress,
  debounce,
  TextField,
  UseAutocompleteProps
} from '@mui/material';
import Autocomplete, {
  autocompleteClasses,
  AutocompleteValue
} from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, {
  createContext,
  ElementType,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
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
import { ListChildComponentProps, VariableSizeList } from 'react-window';

import useInfiniteScroll, {
  PaginatedRequest,
  PaginatedResponse
} from '../../../shared/useInfiniteScroll';
import { FlexBox } from '../../Flexbox';
import InputError from '../InputError';

const LISTBOX_PADDING = 8; // px

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: Number(style.top) + LISTBOX_PADDING
  };

  const [{ key, ...optionProps }, { ref }] = dataSet;

  return (
    <Typography
      ref={ref}
      key={key}
      component="li"
      {...optionProps}
      noWrap
      style={inlineStyle}
    >
      {key}
    </Typography>
  );
}

const OuterElementContext = createContext({});

const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

OuterElementType.displayName = 'OuterElementType';

function useResetCache(data: number) {
  const ref = useRef<VariableSizeList>(null);
  useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {
  const { children, ...other } = props;

  const itemData: ReactElement[] = [];

  (children as ReactElement[]).forEach(
    (item: ReactElement & { children?: ReactElement[] }) => {
      itemData.push(item);
      itemData.push(...(item.children || []));
    }
  );

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true
  });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = () => {
    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={() => itemSize}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: 'border-box',
    '& ul': { padding: 0, margin: 0 }
  }
});

export type AutocompleteLoadFunction<Value> = (
  request: PaginatedRequest,
  signal?: AbortSignal
) => Promise<PaginatedResponse<Value>>;

type Props<
  T extends FieldValues,
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap['defaultComponent']
> = Omit<
  UseAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
  'defaultValue' | 'name' | 'renderInput' | 'options'
> &
  Omit<ControllerProps<T>, 'render'> & {
    label?: string;
    placeholder?: string;
    errors?: FieldError | string;
    ChipProps?: ChipProps<ChipComponent>;
  } & (
    | {
        load?: never;
        options: ReadonlyArray<Value>;
      }
    | {
        options?: never;
        load: AutocompleteLoadFunction<Value>;
      }
  );
export function ControlledAutocomplete<
  T extends FieldValues,
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends ElementType = ChipTypeMap['defaultComponent']
>({
  label,
  placeholder,
  value,
  control,
  errors,
  load,
  name,
  options,
  onChange,
  getOptionLabel,
  isOptionEqualToValue,
  onInputChange: onAutocompleteInputChange,
  ...rest
}: Props<T, Value, Multiple, DisableClearable, FreeSolo, ChipComponent>) {
  const [searchValue, setSearchValue] = useState('');

  const { watch, setValue } = useFormContext<T>();
  const { errors: formErros } = useFormState<T>({ control });

  const loadFn = useCallback(
    (req: PaginatedRequest, signal?: AbortSignal) => {
      if (load) return load(req, signal);

      return Promise.resolve({
        page: 1,
        items: options ?? [],
        hasNextPage: false,
        hasPreviousPage: false,
        pageSize: options?.length ?? 0,
        totalCount: options?.length ?? 0
      });
    },
    [load, options]
  );

  const { items, loading, hasNext, lastElementRef } = useInfiniteScroll<Value>({
    search: useMemo(() => ({ termo: searchValue }), [searchValue]),
    pageSize: 25,
    load: loadFn
  });

  const changeHandler = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const error = get(formErros, name);

  const formValue:
    | AutocompleteValue<Value, Multiple, DisableClearable, FreeSolo>
    | undefined = watch(name);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  return (
    <FlexBox flexDirection="column" flexGrow={1}>
      <Controller
        name={name}
        control={control}
        render={() => (
          <Autocomplete<
            Value,
            Multiple,
            DisableClearable,
            FreeSolo,
            ChipComponent
          >
            disableListWrap
            options={items}
            value={value ?? formValue}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            noOptionsText="Sem dados a exibir"
            renderOption={(props, option, state) => {
              const lastElement = items.length - 1 === state.index;
              const ref = lastElement && hasNext ? lastElementRef : null;

              option = { ...option, ref };
              return [props, option] as ReactNode;
            }}
            onInputChange={(e, value, reason) => {
              debouncedChangeHandler(value);
              onAutocompleteInputChange?.(e, value, reason);
            }}
            onChange={(ev, option, reason, details) => {
              setValue(name, option as PathValue<T, Path<T>>);
              onChange?.(ev, option, reason, details);
            }}
            ListboxComponent={ListboxComponent}
            PopperComponent={StyledPopper}
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
            {...rest}
          />
        )}
      />
      <InputError error={error ?? errors} />
    </FlexBox>
  );
}
