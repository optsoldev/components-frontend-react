import Icon from '@mdi/react';
import { Breakpoint, DialogTitle } from '@mui/material';
import { PropsWithChildren } from 'react';

import { IconPathColor } from '../../types/IconPathColor';

import * as S from './styles';

export interface OptDialogProps {
  open: boolean;
  title: string;
  icon?: IconPathColor;
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;
  maxWidth?: Breakpoint | false;
  width?: string;
}

export function OptDialog({
  open,
  title,
  icon,
  onClose,
  children,
  maxWidth,
  width = '',
}: PropsWithChildren<OptDialogProps>) {
  return (
    <S.StyledDialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      PaperProps={{ style: { width } }}
    >
      <div style={{ cursor: 'move' }} id="draggable-dialog-title">
        {icon && (
          <S.DialogIconContainer color={icon.color ?? '#000000'}>
            <Icon path={icon.path} size={3.2} color={icon.color ?? '#000000'} />
          </S.DialogIconContainer>
        )}

        <DialogTitle>{title}</DialogTitle>
      </div>

      {children}
    </S.StyledDialog>
  );
}
