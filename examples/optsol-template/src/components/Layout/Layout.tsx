import {
  Box,
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@mui/material';
import React, {
  ReactElement,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';

import { FlexBox, FlexBoxProps, Link, Sidebar } from '@optsol/react';
import { SIDEBAR_WIDTH } from '../../shared/theme';
import AppBar from '../AppBar';

export type Route = {
  path: string;
  title: string;
  claim?: string;
  icon?: ReactElement;
  children?: SubRoutes[];
};

export type SubRoutes = {
  path: string;
  title: string;
  claim?: string;
};

export type Routes = {
  [key: string]: Route;
};

type Props = {
  routes: Routes;
  userClaim?: string;
  sidebarWidth?: number | string;
  color?: FlexBoxProps['color'];
};

export const Layout = ({
  routes,
  userClaim,
  color = 'white',
  sidebarWidth = SIDEBAR_WIDTH,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [submenuItems, setSubmenuItems] = useState<Array<SubRoutes>>([]);

  const anchorRef = useRef<HTMLAnchorElement | null>();
  const appBarRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    anchorRef.current = event.currentTarget;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onMouseEnter = (
    event: React.MouseEvent<HTMLAnchorElement>,
    route: Route,
  ) => {
    const { title, children: subRoutes } = route;
    if (!subRoutes || subRoutes.length === 0) return handleClose();

    anchorRef.current = event.currentTarget;
    setSubmenuItems(subRoutes);
    setTitle(title);
    setOpen(true);
  };

  useLayoutEffect(() => {
    if (open) return;

    const id = setTimeout(() => {
      setTitle('');
      setSubmenuItems([]);
      anchorRef.current = null;
    }, 200);

    return () => clearTimeout(id);
  }, [open]);

  const appBarHeigth = appBarRef.current?.getBoundingClientRect().height ?? 0;

  const hasAccess = useCallback(
    (key: string) => {
      const { claim } = routes[key];
      if (!claim) return true;
      if (claim === userClaim) return true;

      return false;
    },
    [routes, userClaim],
  );

  const getRoute = useCallback(
    (sub: string) => {
      const { children } = routes[sub];
      if (!children) return routes[sub].path;

      const [subroute] =
        children.filter((sm) => sm.claim === userClaim || !sm.claim) ?? [];

      if (subroute) return subroute.path;

      return '';
    },
    [routes, userClaim],
  );

  const getTitle = useCallback(
    (sub: string) => {
      const { children } = routes[sub];
      if (!children) return routes[sub].title;
      return '';
    },
    [routes],
  );

  return (
    <>
      <AppBar ref={appBarRef} />
      <FlexBox>
        <FlexBox
          position="relative"
          sx={{ zIndex: 3 }}
          width={sidebarWidth}
          color={color}
        >
          <Sidebar>
            <Box
              component="nav"
              aria-label="nav menu"
              onMouseLeave={handleClose}
            >
              {Object.entries(routes).map(([key, value]) => {
                if (!value.icon) return null;
                if (!hasAccess(key)) return null;

                return (
                  <Link
                    key={key}
                    to={getRoute(key)}
                    onClick={handleClick}
                    onMouseEnter={(e) => onMouseEnter(e, value)}
                  >
                    <Sidebar.Icon title={getTitle(key)}>
                      {value.icon}
                    </Sidebar.Icon>
                  </Link>
                );
              })}
            </Box>

            <Popper
              transition
              disablePortal
              open={open}
              sx={{ ml: 0.5 }}
              role={undefined}
              anchorEl={anchorRef.current}
              onMouseEnter={() => setOpen(true)}
              placement="right-start"
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start'
                        ? 'rigth top'
                        : 'rigth bottom',
                  }}
                >
                  <Paper onMouseLeave={handleClose}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        sx={{ width: 240 }}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                      >
                        <Typography py={1} px={2} fontWeight="bold">
                          {title}
                        </Typography>
                        <Divider />
                        {submenuItems
                          .filter((sm) => !sm.claim)
                          .map((menu) => (
                            <Link to={menu.path} key={menu.path} color="white">
                              <MenuItem sx={{ width: 1 }} color="green">
                                {menu.title}
                              </MenuItem>
                            </Link>
                          ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Sidebar>
        </FlexBox>
        <FlexBox
          flex={1}
          overflow="auto"
          position="relative"
          height={`calc(100dvh - ${appBarHeigth}px)`}
        >
          <Outlet />
        </FlexBox>
      </FlexBox>
    </>
  );
};
