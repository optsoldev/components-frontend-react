import { mdiMagnify } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  ButtonBase,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';
import React, { createRef } from 'react';

import { useOptTheme } from '../../contexts/theme/themeContext';

import * as S from './styles';

/**
 * @deprecated This will be removed soon
 */
export interface OptSearchFieldProps extends OutlinedInputProps {
  placeholder?: string;
  onSearch: (searchTerm?: string) => void;
  width?: number;
  paddingX?: number;
  noBorder?: boolean;
}

/**
 * @deprecated This will be removed soon
 */
export function OptSearchField({
  placeholder = 'Pesquisar',
  onSearch,
  noBorder,
  width,
  paddingX,
  ...inputProps
}: OptSearchFieldProps) {
  const ref = createRef<HTMLInputElement>();
  const { currentTheme } = useOptTheme();

  const onClickSearchButton = () => {
    onSearch(ref.current?.value ? ref.current?.value : undefined);
  };

  const verificarTeclaPressionadaEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      onSearch(ref.current?.value ? ref.current?.value : undefined);
    }
  };

  return (
    <S.AdvancedSearchContainer
      $noborder={noBorder}
      width={width}
      paddingx={paddingX}
    >
      <OutlinedInput
        inputRef={ref}
        {...inputProps}
        type="text"
        fullWidth
        placeholder={placeholder}
        onKeyDown={verificarTeclaPressionadaEnter}
        endAdornment={
          <InputAdornment position="end">
            <ButtonBase onClick={onClickSearchButton}>
              <Icon size={0.8} path={mdiMagnify} color={currentTheme.primary} />
            </ButtonBase>
          </InputAdornment>
        }
      />
    </S.AdvancedSearchContainer>
  );
}
