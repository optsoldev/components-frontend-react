import { Box, Divider } from '@mui/material';
import {
  AppBarLogo,
  AppBarUser,
  Breadcrumbs,
  FlexBox,
  AppBar as OptsolAppBar
} from '@optsol/react';
import { forwardRef } from 'react';

import Logo from '@/assets/logo.svg';
import { SIDEBAR_WIDTH } from '@/config/theme';

const AppBar = forwardRef<HTMLDivElement>((_, ref) => {
  const user = { name: '' };
  const logout = () => {};

  return (
    <OptsolAppBar ref={ref}>
      <AppBarLogo width={SIDEBAR_WIDTH}>
        <img src={Logo} alt="logo" width={32} />
      </AppBarLogo>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Box pl={3}>
        <Breadcrumbs />
      </Box>
      <FlexBox flexGrow={1} />
      <AppBarUser username={user?.name ?? ''} logout={logout} />
    </OptsolAppBar>
  );
});

AppBar.displayName = 'AppBar';
export default AppBar;
