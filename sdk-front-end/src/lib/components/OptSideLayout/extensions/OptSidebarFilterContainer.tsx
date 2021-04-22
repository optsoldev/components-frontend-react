import { List } from '@material-ui/core';
import React, { PropsWithChildren } from 'react';
import { ColorPalette } from '../../../shared/styles/colors';
import { OptActionToolbar } from '../../OptActionToobar';
import { OptLoading } from '../../OptLoading';
import { SidebarContainer } from '../../OptSidebar';
import * as S from './styles';

interface Props {
  titulo?: string;
  background?: string;
  borderColor?: string;
  width?: number;
  loading?: boolean;
  header?: S.HeaderProps;
  goBackRoute?: string;
}

export const OptSidebarFilterContainer = ({
  titulo = 'Filtrar por...',
  background = ColorPalette.white,
  borderColor = 'unset',
  width = 280,
  loading = false,
  goBackRoute,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <SidebarContainer width={width} background={background} bordercolor={borderColor}>
      <OptActionToolbar title={titulo} goBackRoute={goBackRoute} clearMargin />

      {loading && <OptLoading size={30} />}
      {!loading && <List>{children}</List>}
    </SidebarContainer>
  );
};
