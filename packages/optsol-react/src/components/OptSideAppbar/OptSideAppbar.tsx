import { mdiDotsHorizontal } from '@mdi/js';
import Icon from '@mdi/react';
import { Tooltip } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { useOptTheme } from '../../contexts/theme/themeContext';
import { OptAppLogo, OptMenuSection } from '../../types';
import { OptUserProfile } from '../OptAvatar';

import OptSideAppBarDialog from './OptSideAppBarDialog';
import {
  ExpandedFooterActions,
  FooterActions,
  OptMainSidebarFooterAction,
} from './OptSideAppbarFooterActions/OptSideAppbarFooterActions';
import {
  SidebarExpandedListItem,
  SidebarExpandedListItemText,
} from './OptSideAppbarFooterActions/styles';
import * as S from './styles';

interface OptMainSidebarProps {
  logo?: OptAppLogo;
  sections: OptMenuSection[];
  limitedSectionsView?: boolean;
  expandable?: boolean;
  footerActions?: OptMainSidebarFooterAction[];
  profile?: OptUserProfile;
  onManageProfile: () => void;
  onLogout: () => void;
  hideLinkDescription?: boolean;
  sideAppbarWidth?: number;
  expandedSideAppbarWidth?: number;
  sectionsAlignment?: 'start' | 'center' | 'end';
}

export function OptSideAppbar({
  logo,
  sections,
  profile,
  expandable = false,
  footerActions,
  hideLinkDescription = false,
  limitedSectionsView = false,
  onLogout,
  onManageProfile,
  sideAppbarWidth = 50,
  expandedSideAppbarWidth = 300,
  sectionsAlignment = 'start',
}: OptMainSidebarProps) {
  const { currentTheme } = useOptTheme();
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });

  // Crie uma ref para o ícone
  const iconRef = useRef<HTMLButtonElement>(null);

  const { setCurrentSideAppbarWidth } = useOptTheme();

  const handleOpenModal = () => {
    setIsModalOpen(true);

    // Verifique se a ref do ícone existe antes de chamar getBoundingClientRect()
    if (iconRef.current) {
      const iconRect = iconRef.current.getBoundingClientRect();
      setDialogPosition({
        top: iconRect.top + window.scrollY + iconRect.height - 75, // Ajuste a posição conforme necessário
        left: iconRect.left + window.scrollX + 18,
      });
    }
  };

  const currentLinkColor =
    currentTheme.appBar.side?.link.color ?? currentTheme.appBar.color;

  const toggleExpandSidebar = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const width = expanded ? expandedSideAppbarWidth : sideAppbarWidth;
    setCurrentSideAppbarWidth(width);
  }, [
    expanded,
    expandedSideAppbarWidth,
    setCurrentSideAppbarWidth,
    sideAppbarWidth,
  ]);

  return (
    <S.SidebarMenuContainer
      $expanded={expanded}
      $sideAppbarWidth={sideAppbarWidth}
      $expandedSideAppbarWidth={expandedSideAppbarWidth}
      id={'sidebar-menu-container'}
    >
      <div style={{ width: '5px', height: '5px' }}></div>
      {logo && (
        <>
          <S.SidebarNavLink
            to={logo.path ?? '/'}
            style={{
              marginTop: -9,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 65,
            }}
          >
            <S.SidebarListItemLogo button>
              <S.SidebarListItemIcon>
                {typeof logo.icon === 'string' ? (
                  <Icon
                    size={1.5}
                    path={logo.icon}
                    color={logo.iconColor ?? currentLinkColor}
                  />
                ) : (
                  logo.icon
                )}
              </S.SidebarListItemIcon>
            </S.SidebarListItemLogo>
          </S.SidebarNavLink>
        </>
      )}
      <S.CustomList $align={sectionsAlignment} id={'sections-list'}>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {index > 0 && <S.SidebarMenuDivider style={{ marginBottom: 6 }} />}
            {section.items
              .slice(0, limitedSectionsView ? 5 : section.items.length)
              .map((item, index) => {
                const color = item.iconColor ?? currentLinkColor;
                const icon =
                  typeof item.icon === 'string' ? (
                    <Icon size={1.2} path={item.icon} color={color} />
                  ) : (
                    item.icon
                  );

                return (
                  <S.SidebarNavLink
                    to={item.path}
                    key={index}
                    end={item.activeShouldBeExact}
                  >
                    {expanded && (
                      <SidebarExpandedListItem button>
                        <S.SidebarListItemIcon>{icon}</S.SidebarListItemIcon>
                        <SidebarExpandedListItemText primary={item.title} />
                      </SidebarExpandedListItem>
                    )}

                    {!expanded && (
                      <Tooltip title={item.title} placement="right">
                        <S.SidebarListItem button>
                          <S.SidebarListItemIcon>{icon}</S.SidebarListItemIcon>
                          {!hideLinkDescription && (
                            <S.SidebarListItemText primary={item.title} />
                          )}
                        </S.SidebarListItem>
                      </Tooltip>
                    )}
                  </S.SidebarNavLink>
                );
              })}
            {section.items.length > 4 && limitedSectionsView && (
              <button
                style={{ border: 'none', backgroundColor: 'transparent' }}
                onClick={handleOpenModal}
                onMouseEnter={handleOpenModal}
                onMouseLeave={() => {
                  setIsModalOpen(false);
                }}
              >
                <S.SidebarListItem button>
                  <S.SidebarListItemIcon ref={iconRef}>
                    <Icon
                      path={mdiDotsHorizontal}
                      size={1.2}
                      color={currentLinkColor}
                    />
                  </S.SidebarListItemIcon>
                  {!hideLinkDescription && (
                    <S.SidebarListItemText primary={'Outros'} />
                  )}
                </S.SidebarListItem>
              </button>
            )}

            <OptSideAppBarDialog
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              handleOpenModal={handleOpenModal}
              position={dialogPosition}
              currentLinkColor={currentLinkColor}
              sectionItems={section.items.slice(5, section.items.length)}
            />
          </React.Fragment>
        ))}
      </S.CustomList>
      {expanded ? (
        <ExpandedFooterActions
          footerActions={footerActions}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          profile={profile}
          toggleSidebar={toggleExpandSidebar}
        />
      ) : (
        <FooterActions
          footerActions={footerActions}
          onLogout={onLogout}
          onManageProfile={onManageProfile}
          profile={profile}
          toggleSidebar={toggleExpandSidebar}
          expandable={expandable}
        />
      )}
    </S.SidebarMenuContainer>
  );
}
