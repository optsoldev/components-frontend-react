import { ButtonBase } from '@material-ui/core';
import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import React, { createRef } from 'react';
import { ColorPalette } from '../../shared/styles/colors';
import * as S from './styles';

interface Props {
  placeholder?: string;
  onSearch: (searchTerm?: string) => void;
  width?: number;
  paddingX?: number;
  noBorder?: boolean;
}

export const OptSearchField = ({ placeholder = 'Pesquisar', onSearch, noBorder, width, paddingX }: Props) => {
  const ref = createRef<HTMLInputElement>();

  function onClickSearchButton() {
    onSearch(ref.current?.value ? ref.current?.value : undefined);
  }

  function verificarTeclaPressionadaEnter(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      onSearch(ref.current?.value ? ref.current?.value : undefined);
    }
  }

  return (
    <S.AdvancedSearchContainer $noborder={noBorder} width={width} paddingx={paddingX}>
      <input type="text" placeholder={placeholder} ref={ref} onKeyDown={verificarTeclaPressionadaEnter} />
      <ButtonBase onClick={onClickSearchButton}>
        <Icon size={0.8} path={mdiMagnify} color={ColorPalette.white} />
      </ButtonBase>
    </S.AdvancedSearchContainer>
  );
};
