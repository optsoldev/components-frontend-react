import {
  Box,
  ClickAwayListener,
  Container,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography
} from '@mui/material';
import { FlexBox, FlexBoxProps, Link, Sidebar } from '@optsol/react';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from '../AppBar';

import { SIDEBAR_WIDTH } from '@/config/theme';
import { CustomRoute, CustomRoutes, SubRoutes } from '@/routes/app.routes';

type Props = {
  routes: CustomRoutes;
  userClaim?: string;
  sidebarWidth?: number | string;
  color?: FlexBoxProps['color'];
};

export const Layout = ({
  routes,
  userClaim,
  color = 'white',
  sidebarWidth = SIDEBAR_WIDTH
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
    route: CustomRoute
  ) => {
    const { label, routes: subRoutes } = route;
    if (!subRoutes || subRoutes.length === 0) return handleClose();

    anchorRef.current = event.currentTarget;
    setSubmenuItems(subRoutes);
    setTitle(label);
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
    (key: keyof CustomRoutes) => {
      const { claim } = routes[key];
      if (!claim) return true;
      if (claim === userClaim) return true;

      return false;
    },
    [routes, userClaim]
  );

  const getRoute = useCallback(
    (sub: keyof CustomRoutes) => {
      const { routes: children } = routes[sub];
      if (!children) return routes[sub].path;

      const [subroute] =
        children.filter(
          (sm) => (sm.claim === userClaim || !sm.claim) && !sm.internal
        ) ?? [];

      if (subroute) return subroute.path;

      return null;
    },
    [routes, userClaim]
  );

  const getTitle = useCallback(
    (sub: keyof CustomRoutes) => {
      const { children } = routes[sub];
      if (!children) return routes[sub].label;
      return '';
    },
    [routes]
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
                if (!(key in routes)) return;
                const routesKey: keyof CustomRoutes = key as keyof CustomRoutes;

                if (!value.icon) return null;
                if (!hasAccess(routesKey)) return null;

                const route = getRoute(routesKey);
                if (!route) return null;

                return (
                  <Link
                    key={key}
                    to={route}
                    onClick={handleClick}
                    onMouseEnter={(e) => onMouseEnter(e, value)}
                  >
                    <Sidebar.Icon title={getTitle(routesKey)}>
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
              {({ TransitionProps, placement }) => {
                const filteredSubmenuItems = submenuItems.filter(
                  (sm) => !sm.claim && !sm.internal
                );

                if (filteredSubmenuItems.length === 0) return null;

                return (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start'
                          ? 'rigth top'
                          : 'rigth bottom'
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
                          {filteredSubmenuItems.map((menu) => (
                            <Link to={menu.path} key={menu.path} color="white">
                              <MenuItem sx={{ width: 1 }} color="green">
                                {menu.label}
                              </MenuItem>
                            </Link>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                );
              }}
            </Popper>
          </Sidebar>
        </FlexBox>
        <FlexBox
          flex={1}
          overflow="auto"
          position="relative"
          height={`calc(100dvh - ${appBarHeigth}px)`}
        >
          <Container maxWidth="lg">
            <Outlet />
          </Container>
        </FlexBox>
      </FlexBox>
    </>
  );
};
