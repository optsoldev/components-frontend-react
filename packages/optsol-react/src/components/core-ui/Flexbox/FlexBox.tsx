import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren, forwardRef } from 'react';

export type FlexBoxProps = {
  display?: 'flex' | 'inline-flex';
} & Omit<BoxProps, 'display' | 'ref'>;

export const FlexBox = forwardRef<
  HTMLDivElement,
  PropsWithChildren<FlexBoxProps>
>(({ children, display = 'flex', ...props }, ref) => {
  return (
    <Box ref={ref} display={display} {...props}>
      {children}
    </Box>
  );
});

FlexBox.displayName = 'FlexBox';
