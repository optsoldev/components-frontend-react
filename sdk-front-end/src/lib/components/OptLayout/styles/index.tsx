import { AppBar, Avatar, IconButton, List, MenuList, Popover } from '@material-ui/core';
import styled from 'styled-components';
import { Scrollbar } from '../../../shared/styles/generic';
import { drawerWidth, sidebarMenuWidth } from '../../OptDrawer/styles';

export const appBarHeight = 48;

export const Container = styled.div`
  display: flex;
  margin-top: ${appBarHeight}px;
  min-height: calc(100vh - ${appBarHeight}px);
  height: 100%;
  max-width: 100vw;
`;

export const ContentContainer = styled.div`
  padding: 12px;
  flex: 1;
  overflow-wrap: anywhere;
  overflow-y: auto;

  ${Scrollbar};
`;

export const DrawerMenuContainer = styled.div`
  width: ${drawerWidth}px;
`;

export const CloseDrawerList = styled(List)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const CustomAppBar = styled(AppBar)`
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.appBar.background};
  color: ${({ theme }) => theme.appBar.color};
  ${({ theme }) =>
    theme.appBar.noBoxShadow ? 'box-shadow: none' : `box-shadow: 0px -10px 10px 12px ${theme.appBar.background}`};

  .MuiToolbar-regular {
    min-height: ${appBarHeight}px;
  }

  & svg {
    color: ${({ theme }) => theme.appBar.color};
  }

  @media (min-width: 600px) {
    .MuiToolbar-gutters {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const AppBarDrawerButtonContainer = styled.div`
  width: ${sidebarMenuWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppBarEndContainer = styled.div`
  width: ${sidebarMenuWidth}px;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  & > :last-child {
    margin-right: 10px;
  }
`;

export const AppBarDrawerButton = styled(IconButton)`
  padding: 10px;
  margin-left: 0;

  svg {
    color: ${({ theme }) => theme.appBar.closeButton.color};
  }

  &:hover {
    background-color: ${({ theme }) => theme.appBar.closeButton.hover.background};

    svg {
      color: ${({ theme }) => theme.appBar.closeButton.hover.color};
    }
  }
`;

type AvatarProps = {
  alternativecolor?: string;
};

export const CustomAvatar = styled(Avatar)<AvatarProps>`
  cursor: pointer;
  width: 32px;
  height: 32px;
  ${(props) =>
    props.alternativecolor
      ? `background-color: ${props.alternativecolor}`
      : `background-color: ${props.theme.appBar.avatar.background}`};
  ${(props) => (props.color ? `color: ${props.color}` : `color: ${props.theme.appBar.avatar.color}`)};
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`;

export const MenuAvatar = styled(Avatar)<AvatarProps>`
  margin-top: 20px;
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.alternativecolor || props.theme.appBar.avatar.background};
  color: ${(props) => props.color || props.theme.appBar.avatar.color};
`;

export const AvatarPopOver = styled(Popover)`
  & > .MuiPaper-rounded {
    min-width: 200px;
    display: block;
    border-radius: 8px;
  }

  & .MuiPaper-elevation8 {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
  }

  & ul {
    width: 100%;
  }
`;

export const MenuAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserNameContainer = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
`;

export const UserEmailContainer = styled.div`
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 10px;
`;

export const CustomMenuList = styled(MenuList)`
  & li {
    border-top: 1px solid ${({ theme }) => theme.divider};
    height: 52px;
  }

  & svg {
    margin-right: 8px;
  }
`;

interface AppbarBreadcrumbProps {
  marginLeft?: boolean;
}

export const AppbarBreadcrumb = styled.div<AppbarBreadcrumbProps>`
  ${(props) => props.marginLeft && 'margin-left: 32px;'}
  @media (max-width: 600px) {
    display: none;
  }
`;

interface DockedDrawerContainerProps {
  lightTheme?: boolean;
}

export const DockedDrawerContainer = styled.div<DockedDrawerContainerProps>`
  border-right: 1px solid ${({ theme }) => theme.drawer.docked.borderColor};
`;
