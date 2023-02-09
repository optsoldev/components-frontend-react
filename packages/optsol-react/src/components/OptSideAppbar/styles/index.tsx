import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ScrollbarCSS } from '../../../shared/styles/generic';
import { SidebarExpandedListItem } from '../OptSideAppbarFooterActions/styles';

export const activeLinkClass = 'active';

interface SidebarMenuContainerProps {
  $expanded?: boolean;
  $sideAppbarWidth?: number;
  $expandedSideAppbarWidth?: number;
}

export const SidebarMenuContainer = styled.div<SidebarMenuContainerProps>`
  ${({ $expanded, $expandedSideAppbarWidth = 260 }) =>
    $expanded &&
    css`
      width: ${$expandedSideAppbarWidth}px;
      //min-width: ${$expandedSideAppbarWidth}px;
      //max-width: ${$expandedSideAppbarWidth}px;
    `}

  ${({ $expanded, $sideAppbarWidth = 50 }) =>
    !$expanded &&
    css`
      width: ${$sideAppbarWidth}px;
      //min-width: ${$sideAppbarWidth}px;
      //max-width: ${$sideAppbarWidth}px;
    `}

  transition: width ease-in-out 200ms;
  border-right: 1px solid ${({ theme }) => theme.appBar.side!.borderColor};
  background: ${({ theme }) => theme.appBar.background};
  color: ${({ theme }) => theme.appBar.color};
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px;

  ${ScrollbarCSS}

  @media (max-width: 600px) {
    display: none;
  }
`;

export const SidebarListItem = styled<any>(ListItem)`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  border-radius: 6px;
  margin: 6px 0;
  width: auto;
  min-height: 30px;
  justify-content: center;

  &.MuiListItem-gutters {
    padding: 2px;
  }
`;

export const SidebarNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.appBar.side!.link.color};

  transition: color ease-in-out 250ms;

  ${SidebarListItem}, ${SidebarExpandedListItem} {
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

    ${SidebarListItem}, ${SidebarExpandedListItem} {
      background-color: ${({ theme }) =>
        theme.appBar.side!.link.hover.background};
    }
  }

  &.${activeLinkClass} {
    color: ${({ theme }) => theme.appBar.side!.link.active.color} !important;

    & svg,
    svg path {
      color: ${({ theme }) => theme.appBar.side!.link.active.color} !important;
      fill: ${({ theme }) => theme.appBar.side!.link.active.color} !important;
    }

    ${SidebarListItem}, ${SidebarExpandedListItem} {
      background-color: ${({ theme }) =>
        theme.appBar.side!.link.active.background};
    }
  }
`;

export interface CustomListProps {
  $align?: 'start' | 'center' | 'end';
}

export const CustomList = styled(List)<CustomListProps>`
  flex: 1;
  width: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  justify-content: ${({ $align = 'start' }) => $align};

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 0.5px;
    background-color: #d0d4ce;
  }

  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 0.5px;
    background-color: #d0d4ce;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.5px;
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.3);
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
