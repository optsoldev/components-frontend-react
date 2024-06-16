import {
  BoxSearchRegular,
  DataPieRegular,
  LocationArrowFilled,
  ReceiptRegular
} from '@fluentui/react-icons';
import {
  Box,
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography
} from '@mui/material';
import { useLayoutEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ColorPalette } from '@/config/colors';
import { SIDEBAR_WIDTH } from '@/config/theme';
import { FlexBox } from '@/optsol/core-ui/flexbox';
import { Route, routes } from '@/routes/index.routes';

import AppBar from '../AppBar';
import Link from '../Link';
import Sidebar from '../Sidebar/Sidebar';

type SubmenuItem = {
  title: string;
  path: string;
  claim?: string;
};

export const Layout = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [submenuItems, setSubmenuItems] = useState<Array<SubmenuItem>>([]);

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
    route: Route
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

  const hasAccess = false;

  return (
    <>
      <AppBar ref={appBarRef} />
      <FlexBox>
        <FlexBox
          position="relative"
          sx={{ zIndex: 3 }}
          width={SIDEBAR_WIDTH}
          color={ColorPalette.primaryContrast.light}
        >
          <Sidebar>
            <Box
              aria-label="nav menu"
              component="nav"
              onMouseLeave={handleClose}
            >
              <Link
                to={routes.home.children?.[0].path ?? routes.home.path}
                onMouseEnter={(e) => onMouseEnter(e, routes.home)}
              >
                <Sidebar.Icon title="Home">
                  <DataPieRegular fontSize={28} />
                </Sidebar.Icon>
              </Link>
              <Link
                to={
                  routes.cadastros.children?.filter((sm) => !sm.claim)[0]
                    .path ?? routes.cadastros.path
                }
                onMouseEnter={(e) => onMouseEnter(e, routes.cadastros)}
              >
                <Sidebar.Icon
                  title={!routes.cadastros.children ? 'Cadastros' : ''}
                >
                  <ReceiptRegular fontSize={24} />
                </Sidebar.Icon>
              </Link>
              {hasAccess && (
                <Link
                  to={
                    routes.recebimento.children?.[0].path ??
                    routes.recebimento.path
                  }
                  onClick={handleClick}
                  onMouseEnter={(e) => onMouseEnter(e, routes.recebimento)}
                >
                  <Sidebar.Icon
                    title={!routes.recebimento.children ? 'Recebimento' : ''}
                  >
                    <BoxSearchRegular fontSize={24} />
                  </Sidebar.Icon>
                </Link>
              )}
              <Link
                to={
                  routes.gestaoEmbarques.children?.filter((sm) => !sm.claim)[0]
                    .path ?? routes.gestaoEmbarques.path
                }
                onClick={handleClick}
                onMouseEnter={(e) => onMouseEnter(e, routes.gestaoEmbarques)}
              >
                <Sidebar.Icon
                  title={
                    !routes.gestaoEmbarques.children
                      ? 'Gestão de embarques'
                      : ''
                  }
                >
                  <LocationArrowFilled fontSize={24} />
                </Sidebar.Icon>
              </Link>
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
