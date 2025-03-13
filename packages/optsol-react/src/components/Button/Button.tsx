import {
  CircularProgress,
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@mui/material';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;
type CustomButtonProps = {
  variant?: 'outlined' | 'contained' | 'text';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & (
  | {
      loading: true;
      LoadingComponent?: JSX.Element;
    }
  | {
      loading?: false | undefined;
      LoadingComponent?: never;
    }
);
export type ButtonProps = PropsWithChildren<
  HTMLButtonProps & MuiButtonProps & CustomButtonProps
>;

export const Button = ({
  children,
  disabled,
  loading = false,
  ...props
}: ButtonProps) => {
  const Loading = props.LoadingComponent || (
    <CircularProgress size={24} sx={{ mx: 2 }} />
  );

  return (
    <MuiButton
      sx={{ textTransform: 'none' }}
      {...props}
      disabled={disabled || loading}
    >
      {loading ? Loading : children}
    </MuiButton>
  );
};
