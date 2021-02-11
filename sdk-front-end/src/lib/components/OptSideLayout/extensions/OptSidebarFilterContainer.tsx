import { List } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import { ColorPalette } from '../../../shared/styles/colors';
import { OptLoading } from '../../OptLoading';
import { SidebarContainer } from '../../OptSidebar';
import * as S from './styles';

interface Props {
  titulo?: string;
  background?: string;
  borderColor?: string;
  width?: number;
  loading?: boolean;
}

export const OptSidebarFilterContainer = ({
  titulo = 'Filtrar por...',
  background = ColorPalette.gray6,
  borderColor = 'unset',
  width = 280,
  loading = false,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <SidebarContainer width={width} background={background} bordercolor={borderColor}>
      <S.Titulo>{titulo}</S.Titulo>

      {loading && <OptLoading size={30} />}
      {!loading && <List>{children}</List>}
    </SidebarContainer>
  );
};
