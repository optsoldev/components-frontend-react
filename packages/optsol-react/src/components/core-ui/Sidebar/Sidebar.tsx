import { Box, Tooltip } from '@mui/material';
import { PropsWithChildren, useLayoutEffect, useRef, useState } from 'react';

import { ColorPalette } from '@/config/colors';

type SidebarIconProps = {
  onClick?: () => void;
  title?: string;
};

const SidebarIcon = ({
  title,
  onClick,
  children
}: PropsWithChildren<SidebarIconProps>) => {
  return (
    <Tooltip title={title} placement="right">
      <Box
        py={1.5}
        gap="0.5rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
        onClick={onClick}
      >
        {children}
      </Box>
    </Tooltip>
  );
};

const Sidebar = ({ children }: PropsWithChildren) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!sidebarRef.current?.parentElement) return;

    const resizeObserver = new ResizeObserver((event) => {
      // Depending on the layout, you may need to swap inlineSize with blockSize
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
      setWidth(event[0].contentBoxSize[0].inlineSize);
    });

    resizeObserver.observe(sidebarRef.current.parentElement);
  }, []);

  return (
    <Box
      ref={sidebarRef}
      zIndex={1}
      width={width}
      height="100dvh"
      position="fixed"
      bgcolor={ColorPalette.primary.main}
      sx={{
        transition: 'width 0.3s ease'
      }}
    >
      {children}
    </Box>
  );
};

Sidebar.Icon = SidebarIcon;

export default Sidebar;
