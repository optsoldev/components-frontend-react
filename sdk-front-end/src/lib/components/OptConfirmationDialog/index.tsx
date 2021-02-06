import { Button, DialogContent, DialogContentText, DialogTitle, Paper, PaperProps } from '@material-ui/core';
import Icon from '@mdi/react';
import React, { PropsWithChildren } from 'react';
import Draggable from 'react-draggable';
import { IconPathColor } from '../../types/IconPathColor';
import * as S from './styles';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

interface Props {
  open: boolean;
  title: string;
  cancelButtonText?: string;
  confirmationButtonText?: string;
  icon?: IconPathColor;
  onConfirm: () => void;
  onCancel: () => void;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}

export const OptConfirmationDialog = ({
  open,
  title,
  cancelButtonText,
  confirmationButtonText,
  icon,
  onClose,
  onCancel,
  onConfirm,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <S.StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="draggable-dialog-title"
      PaperComponent={PaperComponent}>
      <div style={{ cursor: 'move' }} id="draggable-dialog-title">
        {icon && (
          <S.DialogIconContainer color={icon.color ?? '#000000'}>
            <Icon path={icon.path} size={3.2} color={icon.color ?? '#000000'} />
          </S.DialogIconContainer>
        )}

        <DialogTitle>{title}</DialogTitle>
      </div>

      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>

      <S.StyledDialogActions>
        <Button autoFocus onClick={onCancel}>
          {cancelButtonText ?? 'Cancelar'}
        </Button>

        <Button onClick={onConfirm}>{confirmationButtonText ?? 'Confirmar'}</Button>
      </S.StyledDialogActions>
    </S.StyledDialog>
  );
};
