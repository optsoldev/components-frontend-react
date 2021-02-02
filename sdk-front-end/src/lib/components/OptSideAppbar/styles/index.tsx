import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ScrollbarCSS } from '../../../shared/styles/generic';

export const sideAppbarWidth = 88;
export const expandedSideAppbarWidth = 260;
export const activeLinkClass = 'active-link';

interface SidebarMenuContainerProps {
  expanded?: boolean;
}

export const SidebarMenuContainer = styled.div<SidebarMenuContainerProps>`
  ${({ expanded }) =>
    expanded &&
    css`
      width: ${expandedSideAppbarWidth}px;
      min-width: ${expandedSideAppbarWidth}px;
      max-width: ${expandedSideAppbarWidth}px;
    `}

  ${({ expanded }) =>
    !expanded &&
    css`
      width: ${sideAppbarWidth}px;
      min-width: ${sideAppbarWidth}px;
      max-width: ${sideAppbarWidth}px;
    `}

  transition: all ease-in-out 250ms;
  border-right: 1px solid ${({ theme }) => theme.appBar.side!.divider};
  background: ${({ theme }) => theme.appBar.background};
  color: ${({ theme }) => theme.appBar.color};
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 8px;

  ${ScrollbarCSS}

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SidebarListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  border-radius: 6px;
  margin: 0 8px;
  width: auto;
  min-height: 55px;
  justify-content: center;

  &.MuiListItem-gutters {
    padding: 8px;
  }
`;

export const SidebarNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.appBar.side!.link.color};

  transition: color ease-in-out 250ms;

  ${SidebarListItem} {
    transition: background-color ease-in-out 250ms;
  }

  & svg,
  svg path {
    transition: fill ease-in-out 250ms;
  }

  &:hover {
    color: ${({ theme }) => theme.appBar.side!.link.hover.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.appBar.side!.link.hover.color} !important;
      fill: ${({ theme }) => theme.appBar.side!.link.hover.color} !important;
    }

    ${SidebarListItem} {
      background-color: ${({ theme }) => theme.appBar.side!.link.hover.background};
    }
  }

  &.${activeLinkClass} {
    color: ${({ theme }) => theme.appBar.side!.link.active.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.appBar.side!.link.active.color} !important;
      fill: ${({ theme }) => theme.appBar.side!.link.active.color} !important;
    }

    ${SidebarListItem} {
      background-color: ${({ theme }) => theme.appBar.side!.link.active.background};
    }
  }
`;

export const CustomList = styled(List)`
  width: 100%;

  & ${SidebarNavLink}:not(:last-child) > div {
    margin-bottom: 6px;
  }
`;

export const SidebarListItemIcon = styled(ListItemIcon)`
  min-width: auto;
  justify-content: center;
  color: ${({ theme }) => theme.appBar.side!.link.color};
`;

export const SidebarListItemText = styled(ListItemText)`
  span {
    font-size: 10px;
    text-align: center;
  }
`;

export const SidebarMenuDivider = styled(Divider)`
  background-color: ${({ theme }) => theme.appBar.side!.divider};
`;

interface ExpandableListItemProps {
  expanded?: boolean;
}

export const ExpandableListItem = styled(SidebarListItem)<ExpandableListItemProps>`
  ${({ expanded }) => expanded && 'align-items: flex-end;'}

  &.MuiListItem-gutters {
    ${({ expanded }) => expanded && 'padding-right: 20px;'}
  }
`;
