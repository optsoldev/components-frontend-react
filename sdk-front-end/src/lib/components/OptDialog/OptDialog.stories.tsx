import { mdiDeleteOutline } from '@mdi/js';
import { ColorPalette } from '../../shared/styles/colors';

import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OptDialog } from './OptDialog';
import { OptConfirmationDialog, Props } from './OptConfirmationDialog';
import { OptDialogActions } from './styles';
import { Button } from '@material-ui/core';

export default {
  title: 'OptDialog',
  component: OptDialog,
} as Meta;

const Template: Story<Props> = (args) => (
  <OptDialog {...args}>
    <div style={{ margin: '0 12px' }}>
      Exemplo de OptDialog
    </div>
    <OptDialogActions>
      <Button>Cancelar</Button>
      <Button>Fechar</Button>
    </OptDialogActions>
  </OptDialog>
);

export const OptDialogExample = Template.bind({});

OptDialogExample.args = {
  title: 'Confirma?',
  cancelButtonText: undefined,
  confirmationButtonText: undefined,
  icon: '',
  open: false,
  onClose: null,
};

const Template2: Story<Props> = (args) => (
  <OptConfirmationDialog {...args}>
    <div style={{ margin: '0 12px' }}>Exemplo de OptConfirmationDialog</div>
  </OptConfirmationDialog>
);

export const OptConfirmationDialogExample = Template2.bind({});

OptConfirmationDialogExample.args = {
  title: 'Confirma?',
  cancelButtonText: undefined,
  confirmationButtonText: undefined,
  icon: { path: mdiDeleteOutline, color: ColorPalette.primary },
  open: false,
  onClose: null,
};
