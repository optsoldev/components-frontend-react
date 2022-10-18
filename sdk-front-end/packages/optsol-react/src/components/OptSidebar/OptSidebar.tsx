import Icon from '@mdi/react';
import React from 'react';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { OptMenuSection } from '../../types';
import * as S from './styles';

export interface OptSidebarMenuProps {
  sections: OptMenuSection[];
  hideLinkDescription?: boolean;
  footerActions?: React.ReactNode;
}

export function OptSidebar({
  sections,
  footerActions,
  hideLinkDescription = false,
}: OptSidebarMenuProps) {
  const { currentTheme } = useOptTheme();

  return (
    <S.SidebarContainer>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          {index > 0 && <S.SidebarMenuDivider />}

          <S.CustomList>
            {section.items.map((item, index) => {
              const icon =
                typeof item.icon === 'string' ? (
                  <Icon
                    size={1}
                    path={item.icon}
                    color={item.iconColor ?? currentTheme.sidebar.link.color}
                  />
                ) : (
                  item.icon
                );

              return (
                <S.SidebarNavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? S.activeLinkClass : ''
                  }
                  end={item.activeShouldBeExact}
                  key={index}
                >
                  <S.SidebarListItem button>
                    <S.SidebarListItemIcon>{icon}</S.SidebarListItemIcon>
                    {!hideLinkDescription && (
                      <S.SidebarListItemText primary={item.title} />
                    )}
                  </S.SidebarListItem>
                </S.SidebarNavLink>
              );
            })}
          </S.CustomList>
        </React.Fragment>
      ))}

      <S.FooterActionsContainer>{footerActions}</S.FooterActionsContainer>
    </S.SidebarContainer>
  );
}
