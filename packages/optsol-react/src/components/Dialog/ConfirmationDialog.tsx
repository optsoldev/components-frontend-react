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
  onDismiss: () => void;
  onConfirm: () => void;
} & Pick<DialogProps, 'maxWidth'>;

const ConfirmationDialog = ({
  open,
  title,
  onDismiss,
  onConfirm,
  children,
  ...props
}: PropsWithChildren<ConfirmationDialogProps>) => {
  return (
    <OptsolvDialog open={open} fullWidth {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <FlexBox px={2} gap={2}>
          <Button onClick={onDismiss}>Cancelar</Button>
          <Button color="primary" variant="contained" onClick={onConfirm}>
            Confirmar
          </Button>
        </FlexBox>
      </DialogActions>
    </OptsolvDialog>
  );
};

export default ConfirmationDialog;
