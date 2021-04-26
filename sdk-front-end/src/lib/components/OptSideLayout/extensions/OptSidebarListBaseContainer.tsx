import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { ColorPalette } from '../../../shared/styles/colors';
import { OptActionToolbar } from '../../OptActionToobar';
import { SidebarWithToolbarContainer, SidebarWithToolbarContent } from '../../OptSidebar/styles';
import * as S from './styles';

export interface OptSidebarListBaseProps {
  createTo?: string;
  title: string;
  background?: string;
  borderColor?: string;
  width?: number;
  goBackRoute?: string;
  header?: S.HeaderProps;
}

export const OptSidebarListBaseContainer = ({
  createTo,
  title,
  background = ColorPalette.gray6,
  borderColor = 'unset',
  width = 280,
  goBackRoute,
  children,
  header,
}: PropsWithChildren<OptSidebarListBaseProps>) => {
  return (
    <SidebarWithToolbarContainer width={width} background={background} bordercolor={borderColor}>
      <OptActionToolbar
        title={title}
        goBackRoute={goBackRoute}
        clearMargin
        background={header?.background}
        color={header?.color}
        noBorder
        noPadding>
        {createTo && (
          <NavLink to={createTo} style={{ paddingRight: 10 }}>
            <S.CreationButton customcolor={header?.color}>
              <Icon size={1} path={mdiPlus} />
            </S.CreationButton>
          </NavLink>
        )}
      </OptActionToolbar>

      <SidebarWithToolbarContent background={background}>{children}</SidebarWithToolbarContent>
    </SidebarWithToolbarContainer>
  );
};
