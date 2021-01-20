import { IconButton, List, ListItemIcon, ListItemText } from '@material-ui/core';
import { mdiArrowLeft, mdiPin, mdiPinOff } from '@mdi/js';
import { Icon } from '@mdi/react';
import React from 'react';
import { OptMenuSection } from '.';
import { useOptTheme } from '../../contexts/theme/themeContext';
import * as S from './styles';

interface OptDrawerMenuProps {
  sections: OptMenuSection[];
  onHideDrawer?: () => void;
  onToggleDockDrawer: () => void;
  docked?: boolean;
  drawerLogo?: JSX.Element;
  version: string;
}

export const OptDrawerMenu = ({
  sections,
  onHideDrawer,
  onToggleDockDrawer,
  docked,
  drawerLogo,
  version,
}: OptDrawerMenuProps) => {
  const { currentTheme } = useOptTheme();

  drawerLogo = drawerLogo ?? <div></div>;

  return (
    <S.DrawerMenuContainer>
      {!docked && (
        <S.CloseDrawerContainer>
          <IconButton onClick={onHideDrawer}>
            <Icon size={1.8} path={mdiArrowLeft} color={currentTheme.drawer.close.color} />
          </IconButton>
        </S.CloseDrawerContainer>
      )}

      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {index > 0 && <S.MenuDivider />}

          <List>
            {section.items.map((item, index) => (
              <S.DrawerNavLink
                to={item.path}
                activeClassName={S.activeLinkClass}
                exact={item.activeShouldBeExact}
                key={index}>
                <S.MenuListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </S.MenuListItem>
              </S.DrawerNavLink>
            ))}
          </List>
        </React.Fragment>
      ))}

      <S.Footer>
        <S.FooterHeader>
          {drawerLogo}

          <IconButton onClick={onToggleDockDrawer}>
            <Icon size={1} path={docked ? mdiPinOff : mdiPin} color={currentTheme.primary} />
          </IconButton>
        </S.FooterHeader>

        <S.Version>{version}</S.Version>
      </S.Footer>
    </S.DrawerMenuContainer>
  );
};
