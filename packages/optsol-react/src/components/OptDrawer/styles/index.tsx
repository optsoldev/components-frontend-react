import { ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ScrollbarCSS } from '../../../shared/styles/generic';

export const drawerWidth = 250;
export const activeLinkClass = 'active-link';

export const DrawerMenuContainer = styled.div`
  width: ${drawerWidth}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.drawer.background};
  overflow-y: auto;

  ${ScrollbarCSS}
`;

export const CloseDrawerContainer = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: flex-end;

  & .MuiIconButton-root {
    padding: 0;
  }

  & svg {
    background: ${({ theme }) => theme.drawer.close.background};
    color: ${({ theme }) => theme.drawer.close.color};
    border-radius: 4px;
    padding: 10px;
  }
`;

export const MenuListItem = styled<any>(ListItem)`
  margin: 0 16px;

  width: auto;
  border-radius: 6px;

  & > .MuiListItemIcon-root {
    min-width: auto;
    margin-right: 14px;
  }

  & > .MuiListItemText-root,
  & > .MuiListItemText-root > .MuiTypography-body1 {
    font-size: 14px;
  }
`;

export const DrawerNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.drawer.link.color};

  transition: color ease-in-out 250ms;

  ${MenuListItem} {
    transition: background-color ease-in-out 250ms;
  }

  & svg,
  svg path {
    transition: fill ease-in-out 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.drawer.link.hover.color};

    & svg,
    svg path {
      color: ${({ theme }) => theme.drawer.link.hover.color} !important;
      fill: ${({ theme }) => theme.drawer.link.hover.color} !important;
    }

    ${MenuListItem} {
      background-color: ${({ theme }) => theme.drawer.link.hover.background};
    }
  }

  &.${activeLinkClass} {
    color: ${({ theme }) => theme.drawer.link.active.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.drawer.link.active.color} !important;
      fill: ${({ theme }) => theme.drawer.link.active.color} !important;
    }

    ${MenuListItem} {
      background-color: ${({ theme }) => theme.drawer.link.active.background};
    }
  }
`;

export const Footer = styled.div`
  margin: auto 16px 32px 16px;
  display: flex;
  flex-direction: column;
`;

export const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Version = styled.p`
  color: ${({ theme }) => theme.drawer.versionColor};
  font-size: 12px;
`;
