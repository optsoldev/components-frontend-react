import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';
import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { ActiveLinkClass } from '../../../shared/constants';
import { ColorPalette } from '../../../shared/styles/colors';
import { OptSearchResponse } from '../../../types/OptSearchResponse';
import { OptActionToolbar } from '../../OptActionToobar';
import { OptInfiniteScrollList } from '../../OptInfiniteScrollList/OptInfiniteScrollList';
import { SidebarContainer } from '../../OptSidebar';
import * as S from './styles';

interface Props<T> {
  render: (item: T) => JSX.Element;
  createTo?: string;
  listItemTo: (id: string) => string;
  title: string;
  background?: string;
  borderColor?: string;
  width?: number;
  goBackRoute?: string;

  load: (search: string, page: number, pageSize: number) => Promise<OptSearchResponse<T>>;
  pageSize?: number;
  onError?: (error: string) => void;
  header?: S.HeaderProps;
}

export const OptSidebarPaginatedListContainer = <T extends { id: Key }, Key extends React.Key>({
  createTo,
  listItemTo,
  title,
  background = ColorPalette.gray6,
  borderColor = 'unset',
  width = 280,
  goBackRoute,
  render,
  load,
  pageSize = 10,
  onError,
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

      <OptInfiniteScrollList
        carregar={load}
        onError={onError}
        pageSize={pageSize}
        semPesquisa
        renderItem={(item, index) => (
          <S.CustomListItem button key={item.id}>
            <S.CustomSidebarNavLink to={listItemTo(item.id.toString())} activeClassName={ActiveLinkClass}>
              <S.MainContainer>{render(item)}</S.MainContainer>
            </S.CustomSidebarNavLink>
          </S.CustomListItem>
        )}
      />
    </SidebarContainer>
  );
};
