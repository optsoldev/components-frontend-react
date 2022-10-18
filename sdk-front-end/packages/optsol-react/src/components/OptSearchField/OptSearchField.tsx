import { mdiMagnify } from '@mdi/js';
import { Icon } from '@mdi/react';
import { ButtonBase, InputAdornment, OutlinedInput } from '@mui/material';
import React, { createRef } from 'react';
import { useOptTheme } from '../../contexts/theme/themeContext';
import * as S from './styles';

export interface OptSearchFieldProps {
  placeholder?: string;
  onSearch: (searchTerm?: string) => void;
  width?: number;
  paddingX?: number;
  noBorder?: boolean;
}

export function OptSearchField({
  placeholder = 'Pesquisar',
  onSearch,
  noBorder,
  // width,
  paddingX,
}: OptSearchFieldProps) {
  const ref = createRef<HTMLInputElement>();
  const { currentTheme } = useOptTheme();

  function onClickSearchButton() {
    onSearch(ref.current?.value ? ref.current?.value : undefined);
  }

  function verificarTeclaPressionadaEnter(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === 'Enter') {
      onSearch(ref.current?.value ? ref.current?.value : undefined);
    }
  }

  return (
    <S.AdvancedSearchContainer
      $noborder={noBorder}
      // width={width}
      paddingx={paddingX}
    >
      <OutlinedInput
        inputRef={ref}
        type="text"
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
