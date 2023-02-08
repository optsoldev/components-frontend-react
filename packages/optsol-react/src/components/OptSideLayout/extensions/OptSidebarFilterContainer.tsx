import { List } from '@mui/material';
import { PropsWithChildren } from 'react';

import { ColorPalette } from '../../../shared/styles/colors';
import { OptActionToolbar } from '../../OptActionToobar';
import { OptLoading } from '../../OptLoading';
import {
  SidebarWithToolbarContainer,
  SidebarWithToolbarContent,
} from '../../OptSidebar/styles';

interface Props {
  titulo?: string;
  background?: string;
  borderColor?: string;
  width?: number;
  loading?: boolean;
  goBackRoute?: string;
}

export function OptSidebarFilterContainer({
  titulo = 'Filtrar por...',
  background = ColorPalette.white,
  borderColor = 'unset',
  width = 280,
  loading = false,
  goBackRoute,
  children,
}: PropsWithChildren<Props>) {
  return (
    <SidebarWithToolbarContainer
      width={width}
      background={background}
      bordercolor={borderColor}
    >
      <OptActionToolbar
        title={titulo}
        goBackRoute={goBackRoute}
        clearMargin
        noBorder={borderColor === 'unset'}
      />

      <SidebarWithToolbarContent background={background}>
        {loading && <OptLoading size={30} />}
        {!loading && <List>{children}</List>}
      </SidebarWithToolbarContent>
    </SidebarWithToolbarContainer>
  );
}
