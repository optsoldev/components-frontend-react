import {
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps
} from '@mui/material';

const DialogContent = ({ children, ...props }: MuiDialogContentProps) => {
  return <MuiDialogContent {...props}>{children}</MuiDialogContent>;
};

export default DialogContent;
