import React, { PropsWithChildren } from 'react';
import { ActiveLinkClass } from '../../../shared/constants';
import { ColorPalette } from '../../../shared/styles/colors';
import { OptLoading } from '../../OptLoading';
import {
  OptSidebarListBaseContainer,
  OptSidebarListBaseProps,
} from './OptSidebarListBaseContainer';
import * as S from './styles';

interface Props<T> extends OptSidebarListBaseProps {
  data: T[];
  loading?: boolean;
  render: (item: T) => JSX.Element;
  listItemTo: (id: string) => string;
}

export function OptSidebarListContainer<
  T extends { id: Key },
  Key extends React.Key
>({
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
}: PropsWithChildren<Props<T>>) {
  return (
    <OptSidebarListBaseContainer
      title={title}
      background={background}
      borderColor={borderColor}
      createTo={createTo}
      goBackRoute={goBackRoute}
      header={header}
      width={width}
    >
      {children}

      {loading && <OptLoading size={40} />}

      {!loading && (
        <>
          {data.map((item) => (
            <S.CustomListItem button key={item.id}>
              <S.CustomSidebarNavLink
                to={listItemTo(item.id.toString())}
                className={({ isActive }) => (isActive ? ActiveLinkClass : '')}
              >
                <S.MainContainer>{render(item)}</S.MainContainer>
              </S.CustomSidebarNavLink>
            </S.CustomListItem>
          ))}
        </>
      )}
    </OptSidebarListBaseContainer>
  );
}
