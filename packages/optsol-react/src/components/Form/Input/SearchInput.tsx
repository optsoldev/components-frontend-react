import { SearchRegular } from '@fluentui/react-icons';
import { debounce } from '@mui/material';
import { ChangeEventHandler, useCallback, useEffect, useState } from 'react';

import { Input, InputProps } from './Input';

export const SearchInput = ({ onChange, value, ...props }: InputProps) => {
  const [search, setSearch] = useState(value);

  const onFiltarNotaFiscal: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = useCallback(
    (event) => {
      onChange?.(event);
    },
    [onChange]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(
    debounce(onFiltarNotaFiscal, 500),
    []
  );

  useEffect(() => {
    setSearch(value);
  }, [value]);

  return (
    <Input
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        debouncedChangeHandler(e);
      }}
      InputProps={{
        endAdornment: <SearchRegular fontSize={24} />
      }}
      {...props}
    />
  );
};
