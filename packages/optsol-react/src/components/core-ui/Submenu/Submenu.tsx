import { ChevronRight20Regular } from '@fluentui/react-icons';
import { Box, Typography } from '@mui/material';

import Link from '../Link';
import Navigation from '../Navigation';

export type SubRoute = {
  path: string;
  title: string;
};

export type SubmenuProps = {
  open: boolean;
  closeSubmenu: () => void;
  items: Array<SubRoute>;
};

const Submenu = ({ open, items, closeSubmenu }: SubmenuProps) => {
  return (
    <Navigation open={open} onClick={closeSubmenu} onClose={closeSubmenu}>
      <nav aria-label="nav menu">
        {Object.entries(items).map(([key, value]) => {
          const path = typeof value === 'object' ? value.path : value;
          const title = typeof value === 'object' ? value.title : value;

          return (
            <Link key={key} to={path}>
              <Box
                py={1}
                px={1.5}
                gap="0.5rem"
                display="flex"
                flex={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography>{title}</Typography>
                <ChevronRight20Regular />
              </Box>
            </Link>
          );
        })}
      </nav>
    </Navigation>
  );
};

export default Submenu;
