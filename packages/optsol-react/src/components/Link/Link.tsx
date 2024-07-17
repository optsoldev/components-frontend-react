import { Box, styled } from '@mui/material';
import { PropsWithChildren } from 'react';
import { NavLinkProps, NavLink as RouterNavLink } from 'react-router-dom';

type Props = PropsWithChildren<NavLinkProps>;

const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: inherit;
`;

const Link = ({ children, ...props }: Props) => {
  const { to } = props;

  const onClick = () => {
    const path = to.valueOf();

    if (typeof path !== 'string') return;
    if (!path.includes('/*')) return;
  };

  return (
    <NavLink {...props}>
      {({ isActive }) => (
        <Box
          onClick={onClick}
          display="flex"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          {isActive && (
            <Box
              left={0}
              height={0.8}
              position="absolute"
              borderLeft="0.2rem solid white"
            />
          )}
          {children}
        </Box>
      )}
    </NavLink>
  );
};

export default Link;
