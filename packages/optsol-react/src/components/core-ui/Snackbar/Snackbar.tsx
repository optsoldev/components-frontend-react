import { Alert, Snackbar as MuiSnackbar } from '@mui/material';
import { CustomContentProps } from 'notistack';
import { forwardRef } from 'react';

type SnackbarProps = Pick<
  CustomContentProps,
  'message' | 'variant' | 'anchorOrigin'
>;

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ message, anchorOrigin, variant }, ref) => {
    return (
      <div ref={ref}>
        <MuiSnackbar
          open={message !== null}
          autoHideDuration={5000}
          anchorOrigin={anchorOrigin}
        >
          <Alert
            elevation={4}
            severity={variant === 'default' ? 'success' : variant}
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {message}
          </Alert>
        </MuiSnackbar>
      </div>
    );
  }
);

Snackbar.displayName = 'Snackbar';
export default Snackbar;
