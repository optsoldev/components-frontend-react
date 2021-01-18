import { IconButton, List, ListItemIcon, ListItemText } from '@material-ui/core';
import { mdiArrowLeft, mdiPin, mdiPinOff } from '@mdi/js';
import { Icon } from '@mdi/react';
import React from 'react';
import { OptMenuSection } from '.';
import { Images } from '../../shared/images/images';
import { Theme } from '../../shared/styles/theme';
import * as S from './styles';

interface OptDrawerMenuProps {
  sections: OptMenuSection[];
  onHideDrawer?: () => void;
  onToggleDockDrawer: () => void;
  docked?: boolean;
}

export const OptDrawerMenu = ({ sections, onHideDrawer, onToggleDockDrawer, docked }: OptDrawerMenuProps) => {
  return (
    <S.DrawerMenuContainer>
      {!docked && (
        <S.CloseDrawerContainer>
          <IconButton onClick={onHideDrawer}>
            <Icon size={1.8} path={mdiArrowLeft} color={Theme.drawer.close.color} />
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
          <S.Logo src={Images.LogoDrawer} alt="Banner da OPTSOL" />

          <IconButton onClick={onToggleDockDrawer}>
            <Icon size={1} path={docked ? mdiPinOff : mdiPin} color={Theme.primary} />
          </IconButton>
        </S.FooterHeader>

        <S.Version>Version 1.0</S.Version>
      </S.Footer>
    </S.DrawerMenuContainer>
  );
};
