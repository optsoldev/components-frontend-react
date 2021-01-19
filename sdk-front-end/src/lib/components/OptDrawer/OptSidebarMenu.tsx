import { List } from '@material-ui/core';
import React from 'react';
import { OptMenuSection } from '.';
import * as S from './styles';

interface OptSidebarMenuProps {
  sections: OptMenuSection[];
}

export const OptSidebarMenu = ({ sections }: OptSidebarMenuProps) => {
  return (
    <S.SidebarMenuContainer>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {index > 0 && <S.SidebarMenuDivider />}

          <List>
            {section.items.map((item, index) => (
              <S.SidebarNavLink
                to={item.path}
                activeClassName={S.activeLinkClass}
                exact={item.activeShouldBeExact}
                key={index}>
                <S.SidebarListItem button>
                  <S.SidebarListItemIcon>{item.icon}</S.SidebarListItemIcon>
                  <S.SidebarListItemText primary={item.title} />
                </S.SidebarListItem>
              </S.SidebarNavLink>
            ))}
          </List>
        </React.Fragment>
      ))}
    </S.SidebarMenuContainer>
  );
};
