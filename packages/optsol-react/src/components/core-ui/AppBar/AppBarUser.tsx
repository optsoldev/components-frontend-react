import {
  IconButton,
  Menu,
  MenuItem,
  Avatar as MuiAvatar,
  Tooltip,
  Typography
} from '@mui/material';
import React, { useState } from 'react';

interface AppBarUserProps {
  username: string;
  logout: () => void;
}

const AppBarUser = ({ username, logout }: AppBarUserProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton size="small" onClick={handleOpenUserMenu}>
          <MuiAvatar
            alt={username}
            src="/static/images/avatar/2.jpg"
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        keepMounted
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key="exit" onClick={logout}>
          <Typography textAlign="center">Sair</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AppBarUser;
