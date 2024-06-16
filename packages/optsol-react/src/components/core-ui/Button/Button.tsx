import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;
type CustomButtonProps = {
  variant?: 'outlined' | 'contained' | 'text';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};
export type ButtonProps = PropsWithChildren<
  HTMLButtonProps & MuiButtonProps & CustomButtonProps
>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MuiButton sx={{ textTransform: 'none' }} {...props}>
      {children}
    </MuiButton>
  );
};
