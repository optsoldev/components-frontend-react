import { Box, Dialog, DialogContent } from '@mui/material';

interface OptSideAppBarDialogProps {
  isOpen: boolean;
  onClose: () => void;
  handleOpenModal: () => void;
  children: React.ReactNode;
  position: {
    top: number;
    left: number;
  };
}

export default function OptSideAppBarDialog({
  isOpen,
  onClose,
  children,
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
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
