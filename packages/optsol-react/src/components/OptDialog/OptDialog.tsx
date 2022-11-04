import Icon from '@mdi/react';
import { DialogTitle } from '@mui/material';
import { PropsWithChildren } from 'react';
import { IconPathColor } from '../../types/IconPathColor';
import * as S from './styles';

export interface OptDialogProps {
  open: boolean;
  title: string;
  icon?: IconPathColor;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
  maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false;
  paperWidth?: string;
}

export function OptDialog({
  open,
  title,
  icon,
  onClose,
  children,
  maxWidth = 'sm',
  paperWidth = '',
}: PropsWithChildren<OptDialogProps>) {
  return (
    <S.StyledDialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      PaperProps={{ style: { width: paperWidth } }}
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
