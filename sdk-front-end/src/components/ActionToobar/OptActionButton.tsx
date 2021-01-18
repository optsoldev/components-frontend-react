import { CircularProgress } from '@material-ui/core';
import Icon from '@mdi/react';
import React, { PropsWithChildren } from 'react';
import { Theme } from '../../shared/styles/theme';
import * as S from './styles';

type ActionButtonIcon = {
  path: string;
  color?: string;
};

export type OptActionButtonProps = {
  /** path do @mdi/js */
  startIcon?: ActionButtonIcon | JSX.Element;
  /** path do @mdi/js */
  endIcon?: ActionButtonIcon | JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
};

function checkActionIcon(icon: ActionButtonIcon | JSX.Element | undefined, disabled: boolean, loading: boolean) {
  if (icon) {
    if (loading) {
      icon = icon as ActionButtonIcon;
      icon = <CircularProgress size={18} style={{ color: Theme.primary }} />;
    } else if (typeof icon === 'object') {
      icon = icon as ActionButtonIcon;
      icon.color = loading || disabled ? Theme.color : icon.color || Theme.primary;
      icon = <Icon path={icon.path} size={0.8} color={icon.color} />;
    }
  }

  return icon;
}

export const OptActionButton = ({
  startIcon,
  endIcon,
  onClick,
  children,
  disabled,
  loading,
}: PropsWithChildren<OptActionButtonProps>) => {
  let textColor: string = Theme.secondary;

  if (startIcon && (startIcon as ActionButtonIcon).color) {
    textColor = (startIcon as ActionButtonIcon).color!;
  }

  if (endIcon && (endIcon as ActionButtonIcon).color) {
    textColor = (endIcon as ActionButtonIcon).color!;
  }

  startIcon = checkActionIcon(startIcon, !!disabled, !!loading);
  endIcon = checkActionIcon(endIcon, !!disabled, !!loading);

  return (
    <S.CustomButton
      textcolor={textColor}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled || loading}
      style={{ textTransform: 'inherit' }}>
      {children}
    </S.CustomButton>
  );
};
