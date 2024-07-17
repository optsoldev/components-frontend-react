import {
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps
} from '@mui/material';

const DialogActions = ({ children, ...props }: MuiDialogActionsProps) => {
  return <MuiDialogActions {...props}>{children}</MuiDialogActions>;
};

export default DialogActions;
