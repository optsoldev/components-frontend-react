import { mdiMenuOpen, mdiPin, mdiPinOff } from '@mdi/js';
import { Icon } from '@mdi/react';
import { IconButton, List, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

import { useOptTheme } from '../../contexts/theme/themeContext';
import { OptMenuSection } from '../../types';
import { OptDivider } from '../OptDivider';

import * as S from './styles';

interface OptDrawerMenuProps {
  sections: OptMenuSection[];
  onHideDrawer?: () => void;
  onToggleDockDrawer: () => void;
  docked?: boolean;
  drawerLogo?: JSX.Element;
  version: string;
}

/**
 * @deprecated This will be removed soon
 */
export function OptDrawerMenu({
  sections,
  onHideDrawer,
  onToggleDockDrawer,
  docked,
  drawerLogo,
  version,
}: OptDrawerMenuProps) {
  const { currentTheme } = useOptTheme();

  return (
    <S.DrawerMenuContainer>
      {!docked && (
        <S.CloseDrawerContainer>
          <IconButton onClick={onHideDrawer} size="large">
            <Icon
              size={1.8}
              path={mdiMenuOpen}
              color={currentTheme.drawer.close.color}
            />
          </IconButton>
        </S.CloseDrawerContainer>
      )}

      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {index > 0 && <OptDivider />}

          <List>
            {section.items.map((item, index) => (
              <S.DrawerNavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? S.activeLinkClass : ''
                }
                end={item.activeShouldBeExact}
                key={index}
              >
                <S.MenuListItem button>
                  <ListItemIcon>
                    {typeof item.icon === 'string' ? (
                      <Icon size={1} path={item.icon} />
                    ) : (
                      item.icon
                    )}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </S.MenuListItem>
              </S.DrawerNavLink>
            ))}
          </List>
        </React.Fragment>
      ))}

      <S.Footer>
        <S.FooterHeader>
          {drawerLogo ?? <div />}

          <IconButton onClick={onToggleDockDrawer} size="large">
            <Icon
              size={1}
              path={docked ? mdiPinOff : mdiPin}
              color={currentTheme.drawer.close.color}
            />
          </IconButton>
        </S.FooterHeader>

        <S.Version>{version}</S.Version>
      </S.Footer>
    </S.DrawerMenuContainer>
  );
}
