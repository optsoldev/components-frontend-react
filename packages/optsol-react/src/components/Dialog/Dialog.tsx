import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps
} from '@mui/material';
import { PropsWithChildren } from 'react';

export type DialogProps = MuiDialogProps;

export const Dialog = ({
  children,
  ...props
}: PropsWithChildren<DialogProps>) => {
  return (
    <MuiDialog fullWidth {...props}>
      {children}
    </MuiDialog>
  );
};
