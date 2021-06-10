import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React, { CSSProperties, PropsWithChildren } from 'react';
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
  style?: CSSProperties;
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
  style,
}: PropsWithChildren<OptSidebarListBaseProps>) => {
  return (
    <SidebarWithToolbarContainer width={width} background={background} bordercolor={borderColor} style={style}>
      <OptActionToolbar
        title={title}
        goBackRoute={goBackRoute}
        clearMargin
        background={header?.background}
        color={header?.color}
        noBorder={borderColor === 'unset'}>
        {createTo && (
          <NavLink to={createTo}>
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
