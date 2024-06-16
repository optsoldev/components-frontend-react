import { Backdrop, Box } from '@mui/material';
import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from 'react';

import { ColorPalette } from '@/config/colors';
import { Button } from '@/optsol/core-ui/button';

type NavigationProps = {
  open: boolean;
  onClose: () => void;
  onClick: () => void;
};

const Navigation = ({
  open,
  onClose,
  onClick,
  children
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
      onClick={onClick}
      open={open}
      ref={navigationRef}
      sx={{
        position: 'absolute',
        width: '100dvw',
        left: width
      }}
    >
      <Box
        height="100dvh"
        minWidth={250}
        position="absolute"
        bgcolor={ColorPalette.primaryContrast.main}
        sx={{
          top: 0,
          left: 0
        }}
      >
        {children}
        <Button onClick={onClose}>Fechar</Button>
      </Box>
    </Backdrop>
  );
};

export default Navigation;
