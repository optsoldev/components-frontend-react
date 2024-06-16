import { DismissRegular } from '@fluentui/react-icons';
import {
  IconButton,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material';
import { FlexBox } from '../Flexbox';

export type DialogTitleProps = MuiDialogTitleProps &
  (
    | {
        onClose: () => void;
        showCloseButton?: true;
      }
    | {
        onClose?: never;
        showCloseButton?: false;
      }
  );

const DialogTitle = ({
  children,
  showCloseButton,
  onClose,
  ...props
}: DialogTitleProps) => {
  return (
    <MuiDialogTitle {...props}>
      <FlexBox justifyContent="space-between">
        {children}
        {showCloseButton && (
          <IconButton onClick={onClose}>
            <DismissRegular />
          </IconButton>
        )}
      </FlexBox>
    </MuiDialogTitle>
  );
};

export default DialogTitle;
