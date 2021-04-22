import { mdiArrowLeft } from '@mdi/js';
import Icon from '@mdi/react';
import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { useOptTheme } from '../../contexts/theme/themeContext';
import * as S from './styles';

export type OptActionToolbarProps = {
  title?: string | JSX.Element;
  goBackRoute?: string;
  clearMargin?: boolean;
  background?: string;
  color?: string;
};

export const OptActionToolbar = ({
  title,
  children,
  goBackRoute,
  clearMargin = false,
  background,
  color,
}: PropsWithChildren<OptActionToolbarProps>) => {
  const theme = useOptTheme();
  color = color ?? theme.currentTheme.toolbar.color;
  background = background ?? theme.currentTheme.toolbar.background;

  title = typeof title === 'string' ? <S.Title color={color}>{title}</S.Title> : title;

  return (
    <S.CustomToolbar clearmargin={clearMargin ? 1 : 0} className="opt-toolbar" background={background} color={color}>
      {goBackRoute && (
        <NavLink to={goBackRoute}>
          <S.CustomIconButton>
            <Icon size={0.8} path={mdiArrowLeft} color={color} />
          </S.CustomIconButton>
        </NavLink>
      )}

      {title}

      <S.ActionsContainer>{children}</S.ActionsContainer>
    </S.CustomToolbar>
  );
};
