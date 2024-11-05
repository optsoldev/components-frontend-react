import { PropsWithChildren } from 'react';

import { Button } from '../Button';
import { FlexBox } from '../Flexbox';

import { DialogProps, Dialog as OptsolvDialog } from './Dialog';
import DialogActions from './DialogActions';
import DialogContent from './DialogContent';
import DialogTitle from './DialogTitle';

type ConfirmationDialogProps = {
  open: boolean;
  title: string;
  confirmText?: string;
  dismissText?: string;
  onDismiss: () => void;
  onConfirm: () => void;
} & Pick<DialogProps, 'maxWidth'>;

const ConfirmationDialog = ({
  open,
  title,
  onDismiss,
  onConfirm,
  children,
  confirmText = 'Confirmar',
  dismissText = 'Cancelar',
  ...props
}: PropsWithChildren<ConfirmationDialogProps>) => {
  return (
    <OptsolvDialog open={open} fullWidth {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <FlexBox px={2} gap={2}>
          <Button onClick={onDismiss}>{dismissText}</Button>
          <Button color="primary" variant="contained" onClick={onConfirm}>
            {confirmText}
          </Button>
        </FlexBox>
      </DialogActions>
    </OptsolvDialog>
  );
};

export default ConfirmationDialog;
