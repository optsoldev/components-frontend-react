import { AppBar, IconButton, MenuList, Popover } from '@mui/material';
import styled from 'styled-components';
import { sidebarMenuWidth } from '../../OptSidebar/styles';

export const appBarHeight = 48;
export const containerPadding = 12;

export const CustomAppBar = styled(AppBar)`
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.appBar.background};
  color: ${({ theme }) => theme.appBar.color};
  ${({ theme }) =>
    theme.appBar.noBoxShadow
      ? 'box-shadow: none'
      : `box-shadow: 0px -10px 10px 12px ${
          theme.appBar.boxShadowColor ?? theme.appBar.background
        }`};

  .MuiToolbar-regular {
    height: ${appBarHeight}px;
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

  @media (max-width: 600px) {
    width: auto;
    align-items: flex-start;
  }
`;

export const AppBarEndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > :last-child {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    flex: 1;
  }
`;

export const AppBarDrawerButton = styled(IconButton)`
  padding: 10px;
  margin-left: 0;

  svg {
    color: ${({ theme }) => theme.appBar.menuButton.color};
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.appBar.menuButton.hover.background};

    svg {
      color: ${({ theme }) => theme.appBar.menuButton.hover.color};
    }
  }
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
  padding-top: 20px;
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

export const AppBarContainer = styled.div<AppbarBreadcrumbProps>`
  ${(props) => props.marginLeft && 'margin-left: 32px;'}
  display: flex;
  flex: 1;

  @media (max-width: 600px) {
    display: none;
  }
`;
