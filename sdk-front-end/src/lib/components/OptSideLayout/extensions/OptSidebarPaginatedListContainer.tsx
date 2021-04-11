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

  load: (search: string, page: number, pageSize: number) => Promise<OptSearchResponse<T>>;
  pageSize?: number;
  onError?: (error: string) => void;
}

export const OptSidebarPaginatedListContainer = <T extends { id: string }>({
  createTo,
  listItemTo,
  title,
  background = ColorPalette.gray6,
  borderColor = 'unset',
  width = 280,
  render,
  load,
  pageSize = 10,
  onError,
  children,
}: PropsWithChildren<Props<T>>) => {
  return (
    <SidebarContainer width={width} background={background} bordercolor={borderColor}>
      <OptActionToolbar title={title} clearMargin>
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
            <S.CustomSidebarNavLink to={listItemTo(item.id)} activeClassName={ActiveLinkClass}>
              <S.MainContainer>{render(item)}</S.MainContainer>
            </S.CustomSidebarNavLink>
          </S.CustomListItem>
        )}
      />
    </SidebarContainer>
  );
};
