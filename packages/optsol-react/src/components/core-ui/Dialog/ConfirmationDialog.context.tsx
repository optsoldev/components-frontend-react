import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

import ConfirmationDialog from './ConfirmationDialog';

type ConfirmationDialogContextType = {
  openDialog: (config: DialogConfig) => void;
};

const ConfirmationDialogContext = createContext<
  ConfirmationDialogContextType | undefined
>(undefined);

type DialogConfig = {
  title: string;
  Component: React.ReactNode;
  actionCallback: (result: boolean) => void;
};

const ConfirmationDialogProvider = ({ children }: PropsWithChildren) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>();

  const openDialog = useCallback(
    ({ title, Component, actionCallback }: DialogConfig) => {
      setDialogOpen(true);
      setDialogConfig({ title, Component, actionCallback });
    },
    []
  );

  const resetDialog = () => {
    setDialogOpen(false);
    setDialogConfig(undefined);
  };

  const onConfirm = () => {
    resetDialog();
    dialogConfig?.actionCallback(true);
  };

  const onDismiss = () => {
    resetDialog();
    dialogConfig?.actionCallback(false);
  };

  const value = useMemo(() => ({ openDialog }), [openDialog]);

  return (
    <ConfirmationDialogContext.Provider value={value}>
      <ConfirmationDialog
        maxWidth="xs"
        open={dialogOpen}
        title={dialogConfig?.title ?? ''}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      >
        {dialogConfig?.Component}
      </ConfirmationDialog>
      {children}
    </ConfirmationDialogContext.Provider>
  );
};

const useConfirmationDialog = () => {
  const context = useContext(ConfirmationDialogContext);

  if (!context) {
    throw new Error(
      'useConfirmationDialog must be used within a ConfirmationDialogProvider'
    );
  }

  const { openDialog } = context;

  const getConfirmation = ({
    ...options
  }: Omit<DialogConfig, 'actionCallback'>): Promise<boolean> =>
    new Promise((res) => {
      openDialog({ ...options, actionCallback: res });
    });

  return { getConfirmation };
};

export default ConfirmationDialog;
export { ConfirmationDialogProvider, useConfirmationDialog };
