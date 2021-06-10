import { Button } from '@material-ui/core';
import { mdiDeleteOutline, mdiTestTube } from '@mdi/js';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ColorPalette } from '../../shared/styles/colors';
import { OptConfirmationDialog, Props } from './OptConfirmationDialog';
import { OptDialog, OptDialogProps } from './OptDialog';
import { OptDialogActions } from './styles';

export default {
  title: 'OptDialog',
  component: OptDialog,
} as Meta;

export const OptDialogExample: Story<OptDialogProps> = (args) => (
  <OptDialog {...args}>
    <div style={{ margin: '0 12px' }}>Exemplo de OptDialog</div>
    <OptDialogActions>
      <Button>Cancelar</Button>
      <Button>Fechar</Button>
    </OptDialogActions>
  </OptDialog>
);

OptDialogExample.args = {
  title: 'Confirma?',
  icon: { path: mdiTestTube, color: ColorPalette.dark },
  open: false,
};

OptDialogExample.argTypes = {
  onClose: {
    action: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => 'Event: ' + event + ' Reason: ' + reason,
    table: { disable: true },
  },
};

export const OptConfirmationDialogExample: Story<Props> = (args) => (
  <OptConfirmationDialog {...args}>Exemplo de OptConfirmationDialog</OptConfirmationDialog>
);

OptConfirmationDialogExample.args = {
  title: 'Confirma?',
  icon: { path: mdiDeleteOutline, color: ColorPalette.primary },
  open: false,
};

OptConfirmationDialogExample.argTypes = {
  onClose: {
    action: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => 'Event: ' + event + ' Reason: ' + reason,
    table: { disable: true },
  },
};
