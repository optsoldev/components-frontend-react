import { mdiArrowLeft } from '@mdi/js';
import Icon from '@mdi/react';
import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';

import { useOptTheme } from '../../contexts/theme/themeContext';

import * as S from './styles';

/**
 * @deprecated This will be removed soon
 */
export type OptActionToolbarProps = {
  title?: string | JSX.Element;
  goBackRoute?: string;
  clearMargin?: boolean;
  background?: string;
  color?: string;
  noBorder?: boolean;
  noPadding?: boolean;
};

/**
 * @deprecated This will be removed soon
 */
export function OptActionToolbar({
  title,
  children,
  goBackRoute,
  clearMargin = false,
  background,
  color,
  noBorder = false,
  noPadding = false,
}: PropsWithChildren<OptActionToolbarProps>) {
  const theme = useOptTheme();
  const getColor = color ?? theme.currentTheme.toolbar.color;
  const getBackground = background ?? theme.currentTheme.toolbar.background;

  const getTitle =
    typeof title === 'string' ? (
      <S.Title color={getColor}>{title}</S.Title>
    ) : (
      title
    );

  return (
    <S.CustomToolbar
      className="opt-toolbar"
      background={getBackground}
      color={getColor}
      $noborder={noBorder}
      $nopadding={noPadding}
      $clearmargin={clearMargin}
    >
      {goBackRoute && (
        <NavLink to={goBackRoute}>
          <S.CustomIconButton>
            <Icon size={0.8} path={mdiArrowLeft} color={getColor} />
          </S.CustomIconButton>
        </NavLink>
      )}

      {getTitle}

      <S.ActionsContainer color={getColor}>{children}</S.ActionsContainer>
    </S.CustomToolbar>
  );
}
