import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

type AppBarLogoProps = Required<PropsWithChildren> & {
  homePath?: string;
  width: BoxProps['width'];
};

const AppBarLogo = ({ width, homePath = '/', children }: AppBarLogoProps) => {
  const navigate = useNavigate();
  const irParaHome = () => navigate(homePath);
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      sx={{ cursor: 'pointer' }}
      onClick={irParaHome}
      width={width}
    >
      {children}
    </Box>
  );
};

export default AppBarLogo;
