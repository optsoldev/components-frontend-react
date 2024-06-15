import Icon from '@mdi/react';
import { Box, Dialog, DialogContent, Tooltip } from '@mui/material';

import { OptMenuItem } from '../../types';

import * as S from './styles';

/**
 * @deprecated This will be removed soon
 */
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

/**
 * @deprecated This will be removed soon
 */
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
          style: { backgroundColor: 'rgba(0, 0, 0, 0.0)', padding: 0 },
        },
      }} // Personalize o estilo do Backdrop
      onMouseLeave={onClose}
      onMouseEnter={handleOpenModal}
    >
      <DialogContent sx={{ padding: 0 }}>
        <Box
          sx={{
            boxShadow:
              ' rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
            display: 'flex',
            backgroundColor: '#fff',
            gap: 2,
            paddingX: 2,
            paddingY: 1,
            borderRadius: 2,
          }}
        >
          {sectionItems.map((item, index) => {
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
