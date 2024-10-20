import { Backdrop, Box, BoxProps } from '@mui/material';
import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { Button } from '../Button';

type NavigationProps = {
  open: boolean;
  onClose: () => void;
  onClick: () => void;
  bgcolor?: BoxProps['color'];
};

const Navigation = ({
  open,
  bgcolor = 'white',
  onClose,
  onClick,
  children,
}: PropsWithChildren<NavigationProps>) => {
  const [width, setWidth] = useState(0);
  const navigationRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!navigationRef.current?.parentElement) return;
    const resizeObserver = new ResizeObserver((event) => {
      // Depending on the layout, you may need to swap inlineSize with blockSize
      // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
      setWidth(event[0].contentBoxSize[0].inlineSize);
    });

    resizeObserver.observe(navigationRef.current.parentElement);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [open]);

  return (
    <Backdrop
      open={open}
      onClick={onClick}
      ref={navigationRef}
      sx={{
        position: 'absolute',
        width: '100dvw',
        left: width,
      }}
    >
      <Box
        height="100dvh"
        minWidth={250}
        position="absolute"
        bgcolor={bgcolor}
        sx={{
          top: 0,
          left: 0,
        }}
      >
        {children}
        <Button onClick={onClose}>Fechar</Button>
      </Box>
    </Backdrop>
  );
};

export default Navigation;
