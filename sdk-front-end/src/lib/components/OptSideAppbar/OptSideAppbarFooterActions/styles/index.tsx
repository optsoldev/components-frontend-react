import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import styled from 'styled-components';
import { SidebarNavLink } from '../../../OptSidebar/styles';

export const SidebarMenuDivider = styled(Divider)`
  background-color: ${({ theme }) => theme.appBar.side!.divider};
`;

export const FooterActionsContainer = styled.div`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ExpandedFooterActionsContainer = styled(FooterActionsContainer)`
  align-items: flex-start;
`;

export const CustomList = styled(List)`
  width: 100%;

  & ${SidebarNavLink}:not(:last-child) > div {
    margin-bottom: 6px;
  }
`;


export const SidebarExpandedListItem = styled(ListItem)`
  display: flex;
  font-size: 14px;
  border-radius: 6px;
  margin: 0 8px;
  width: auto;

  & .MuiIconButton-root {
    padding: 0px;
  }
  &.MuiListItem-gutters {
    padding: 8px;
  }
`;

export const SidebarExpandedListItemText = styled(ListItemText)`
  span {
    margin-left: 10px;
  }
`;
