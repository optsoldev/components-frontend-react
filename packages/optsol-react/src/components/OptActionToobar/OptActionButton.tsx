import Icon from '@mdi/react';
import { CircularProgress } from '@mui/material';
import { PropsWithChildren } from 'react';

import { useOptTheme } from '../../contexts/theme/themeContext';
import { OptFullTheme } from '../../shared/styles/theme';
import { IconPathColor } from '../../types/IconPathColor';

import * as S from './styles';

/**
 * @deprecated This will be removed soon
 */
export type OptActionButtonProps = {
  /** path do @mdi/js */
  startIcon?: IconPathColor | JSX.Element;
  /** path do @mdi/js */
  endIcon?: IconPathColor | JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
  textColor?: string;
  hover?: {
    textColor: string;
  };
};

function checkActionIcon(
  theme: OptFullTheme,
  icon: IconPathColor | JSX.Element | undefined,
  disabled: boolean,
  loading: boolean
) {
  if (loading) {
    return <CircularProgress size={18} style={{ color: theme.primary }} />;
  }

  if (icon && 'path' in icon) {
    const color = disabled ? theme.color : icon.color || theme.primary;
    return <Icon path={icon.path} size={0.8} color={color} />;
  }

  return icon;
}

/**
 * @deprecated This will be removed soon
 */
export function OptActionButton({
  startIcon,
  endIcon,
  onClick,
  children,
  disabled,
  loading,
  textColor = 'inherit',
  hover,
}: PropsWithChildren<OptActionButtonProps>) {
  const { currentTheme } = useOptTheme();

  let hoverTextColor: string = hover?.textColor ?? 'inherit';

  if (startIcon && (startIcon as IconPathColor).color) {
    hoverTextColor = (startIcon as IconPathColor).color!;
  }

  if (endIcon && (endIcon as IconPathColor).color) {
    hoverTextColor = (endIcon as IconPathColor).color!;
  }

  const getStartIcon = checkActionIcon(
    currentTheme,
    startIcon,
    !!disabled,
    !!loading
  );

  const getEndIcon = checkActionIcon(
    currentTheme,
    endIcon,
    !!disabled,
    !!loading
  );

  return (
    <S.CustomButton
      textcolor={textColor}
      hover={{ textcolor: hoverTextColor }}
      startIcon={getStartIcon}
      endIcon={getEndIcon}
      onClick={onClick}
      disabled={disabled || loading}
      style={{ textTransform: 'inherit' }}
    >
      {children}
    </S.CustomButton>
  );
}
