import { mdiArrowLeft } from '@mdi/js';
import Icon from '@mdi/react';
import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';

export type OptActionToolbarProps = {
  title?: string | JSX.Element;
  goBackRoute?: string;
  clearMargin?: boolean;
};

export const OptActionToolbar = ({
  title,
  children,
  goBackRoute,
  clearMargin = false,
}: PropsWithChildren<OptActionToolbarProps>) => {
  title = typeof title === 'string' ? <S.Title>{title}</S.Title> : title;

  return (
    <S.CustomToolbar clearmargin={clearMargin ? 1 : 0}>
      {goBackRoute && (
        <NavLink to={goBackRoute}>
          <S.CustomIconButton>
            <Icon size={0.8} path={mdiArrowLeft} />
          </S.CustomIconButton>
        </NavLink>
      )}

      {title}

      <S.ActionsContainer>{children}</S.ActionsContainer>
    </S.CustomToolbar>
  );
};
