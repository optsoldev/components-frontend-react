import { DialogTitle } from '@material-ui/core';
import Icon from '@mdi/react';
import React, { PropsWithChildren } from 'react';
import { IconPathColor } from '../../types/IconPathColor';
import * as S from './styles';

export interface OptDialogProps {
  open: boolean;
  title: string;
  icon?: IconPathColor;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

export const OptDialog = ({ open, title, icon, onClose, children }: PropsWithChildren<OptDialogProps>) => {
  return (
    <S.StyledDialog open={open} onClose={onClose}>
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
};
