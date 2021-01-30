import { Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ScrollbarCSS } from '../../../shared/styles/generic';

export const drawerWidth = 250;
export const sidebarMenuWidth = 88;
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

export const MenuListItem = styled(ListItem)`
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

export const MenuDivider = styled(Divider)`
  background-color: ${({ theme }) => theme.drawer.divider};
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

export const SidebarMenuContainer = styled.div`
  width: ${sidebarMenuWidth}px;
  min-width: ${sidebarMenuWidth}px;
  border-right: 1px solid ${({ theme }) => theme.sidebar.divider};
  background: ${({ theme }) => theme.sidebar.background};
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ${ScrollbarCSS}

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SidebarListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  border-radius: 6px;
  margin: 0 8px;
  width: auto;

  &.MuiListItem-gutters {
    padding: 8px;
  }
`;

export const SidebarNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.sidebar.link.color};

  transition: color ease-in-out 250ms;

  ${SidebarListItem} {
    transition: background-color ease-in-out 250ms;
  }

  & svg,
  svg path {
    transition: fill ease-in-out 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.sidebar.link.hover.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.sidebar.link.hover.color} !important;
      fill: ${({ theme }) => theme.sidebar.link.hover.color} !important;
    }

    ${SidebarListItem} {
      background-color: ${({ theme }) => theme.sidebar.link.hover.background};
    }
  }

  &.${activeLinkClass} {
    color: ${({ theme }) => theme.sidebar.link.active.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.sidebar.link.active.color} !important;
      fill: ${({ theme }) => theme.sidebar.link.active.color} !important;
    }

    ${SidebarListItem} {
      background-color: ${({ theme }) => theme.sidebar.link.active.background};
    }
  }
`;

export const SidebarListItemIcon = styled(ListItemIcon)`
  min-width: auto;
  justify-content: center;
  color: ${({ theme }) => theme.sidebar.link.color};
`;

export const SidebarListItemText = styled(ListItemText)`
  span {
    font-size: 10px;
    text-align: center;
  }
`;

export const SidebarMenuDivider = styled(Divider)`
  background-color: ${({ theme }) => theme.sidebar.divider};
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

export const Logo = styled.img`
  width: 136px;
`;

export const Version = styled.p`
  color: ${({ theme }) => theme.drawer.versionColor};
  font-size: 12px;
`;
