import MaterialAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { PropsWithChildren, forwardRef } from 'react';

const AppBar = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <MaterialAppBar
        ref={ref}
        elevation={2}
        color="inherit"
        position="sticky"
        sx={{ zIndex: { xs: 1201 } }}
      >
        <Toolbar disableGutters variant="dense">
          {children}
        </Toolbar>
      </MaterialAppBar>
    );
  }
);

AppBar.displayName = 'AppBar';
export default AppBar;
