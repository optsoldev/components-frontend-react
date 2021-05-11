import React, { PropsWithChildren } from 'react';
import { ActiveLinkClass } from '../../../shared/constants';
import { ColorPalette } from '../../../shared/styles/colors';
import { OptSearchResponse } from '../../../types/OptSearchResponse';
import { OptInfiniteScrollList } from '../../OptInfiniteScrollList/OptInfiniteScrollList';
import { OptSidebarListBaseContainer, OptSidebarListBaseProps } from './OptSidebarListBaseContainer';
import * as S from './styles';

interface Props<T> extends OptSidebarListBaseProps {
  render: (item: T) => JSX.Element;
  listItemTo: (id: string) => string;

  load: (search: string, page: number, pageSize: number) => Promise<OptSearchResponse<T>>;
  pageSize?: number;
  onError?: (error: string) => void;
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
    <OptSidebarListBaseContainer
      title={title}
      background={background}
      borderColor={borderColor}
      createTo={createTo}
      goBackRoute={goBackRoute}
      header={header}
      width={width}>
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
    </OptSidebarListBaseContainer>
  );
};
