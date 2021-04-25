import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { ActiveLinkClass } from '../../../shared/constants';
import { ColorPalette } from '../../../shared/styles/colors';
import { OptActionToolbar } from '../../OptActionToobar';
import { OptLoading } from '../../OptLoading';
import { SidebarContainer } from '../../OptSidebar';
import * as S from './styles';

interface Props<T> {
  data: T[];
  loading?: boolean;
  render: (item: T) => JSX.Element;
  createTo?: string;
  listItemTo: (id: string) => string;
  title: string;
  background?: string;
  borderColor?: string;
  width?: number;
  goBackRoute?: string;
  header?: S.HeaderProps;
}

export const OptSidebarListContainer = <T extends { id: Key }, Key extends React.Key>({
  data,
  createTo,
  listItemTo,
  title,
  background = ColorPalette.gray6,
  borderColor = 'unset',
  width = 280,
  loading = false,
  render,
  goBackRoute,
  children,
  header,
}: PropsWithChildren<Props<T>>) => {
  return (
    <SidebarContainer width={width} background={background} bordercolor={borderColor}>
      <OptActionToolbar
        title={title}
        goBackRoute={goBackRoute}
        clearMargin
        background={header?.background}
        color={header?.color}>
        {createTo && (
          <NavLink to={createTo}>
            <S.CreationButton>
              <Icon size={1} path={mdiPlus} />
            </S.CreationButton>
          </NavLink>
        )}
      </OptActionToolbar>

      {children}

      {loading && <OptLoading size={40} />}

      {!loading && (
        <>
          {data.map((item) => (
            <S.CustomListItem button key={item.id}>
              <S.CustomSidebarNavLink to={listItemTo(item.id.toString())} activeClassName={ActiveLinkClass}>
                <S.MainContainer>{render(item)}</S.MainContainer>
              </S.CustomSidebarNavLink>
            </S.CustomListItem>
          ))}
        </>
      )}
    </SidebarContainer>
  );
};
