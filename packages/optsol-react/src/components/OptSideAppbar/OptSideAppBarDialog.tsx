import Icon from '@mdi/react';
import { Box, Dialog, DialogContent, Tooltip } from '@mui/material';

import { OptMenuItem } from '../../types';

import * as S from './styles';

interface OptSideAppBarDialogProps {
  isOpen: boolean;
  onClose: () => void;
  handleOpenModal: () => void;
  position: {
    top: number;
    left: number;
  };
  sectionItems: OptMenuItem[];
  currentLinkColor: string;
}

export default function OptSideAppBarDialog({
  isOpen,
  onClose,
  sectionItems,
  currentLinkColor,
  position,
  handleOpenModal,
}: OptSideAppBarDialogProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        style: {
          position: 'absolute',
          top: position.top,
          left: position.left,
          backgroundColor: 'transparent',
          boxShadow: 'none', // Cor de fundo da modal
        },
      }}
      slotProps={{
        backdrop: {
          style: { backgroundColor: 'rgba(0, 0, 0, 0.0)' },
        },
      }} // Personalize o estilo do Backdrop
      onMouseLeave={onClose}
      onMouseEnter={handleOpenModal}
    >
      <DialogContent>
        <Box
          sx={{
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
            display: 'flex',
            gap: 2,
            paddingX: 2,
            borderRadius: 2,
          }}
        >
          {sectionItems.slice(5, sectionItems.length).map((item, index) => {
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
                <Tooltip title={item.title} placement="top">
                  <S.SidebarListItem button>
                    <S.SidebarListItemIcon>{icon}</S.SidebarListItemIcon>
                  </S.SidebarListItem>
                </Tooltip>
              </S.SidebarNavLink>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
