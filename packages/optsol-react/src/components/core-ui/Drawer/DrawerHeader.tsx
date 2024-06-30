import { DismissRegular } from '@fluentui/react-icons';
import {
  Box,
  Grid,
  GridProps,
  DrawerProps as MuiDrawerProps,
} from '@mui/material';
import { PropsWithChildren } from 'react';

type DrawerHeaderProps = GridProps &
  (
    | {
        showCloseButton?: true;
        onClose: MuiDrawerProps['onClose'];
      }
    | {
        showCloseButton?: false;
        onClose?: never;
      }
  );

const DrawerHeader = ({
  showCloseButton = false,
  onClose,
  children,
  ...props
}: PropsWithChildren<DrawerHeaderProps>) => {
  return (
    <Grid
      container
      zIndex={1}
      display="flex"
      position="sticky"
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      <Grid item>{children}</Grid>
      {showCloseButton && (
        <Grid item display="flex" alignItems="center">
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={() => onClose?.call(this, {}, 'backdropClick')}
          >
            <DismissRegular fontSize={20} />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default DrawerHeader;
