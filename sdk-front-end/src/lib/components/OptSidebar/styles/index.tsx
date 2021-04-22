import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ScrollbarCSS } from '../../../shared/styles/generic';

export const sidebarMenuWidth = 88;
export const activeLinkClass = 'active-link';

interface SidebarBaseContainerProps {
  background?: string;
  width?: number;
  bordercolor?: string;
}

export const SidebarContainer = styled.div<SidebarBaseContainerProps>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: auto;
  border-right: 1px solid ${({ bordercolor, theme }) => bordercolor ?? theme.sidebar.divider};
  background: ${({ background, theme }) => background ?? theme.sidebar.background};
  color: ${({ color, theme }) => color ?? theme.sidebar.color};
  width: ${({ width }) => width}px;
  min-width: ${({ width }) => width}px;

  /* @media (max-width: 600px) {
    display: none;
  } */
  & > .opt-toolbar {
    position: sticky;
    top: 0;
    z-index: 99;
  }

  ${ScrollbarCSS}
`;

SidebarContainer.defaultProps = {
  width: sidebarMenuWidth,
};

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

export const CustomList = styled(List)`
  & ${SidebarNavLink}:not(:last-child) > div {
    margin-bottom: 6px;
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

export const FooterActionsContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  display: flex;
`;
