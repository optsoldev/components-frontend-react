import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OptBackdrop, OptBackdropProps } from './OptBackdrop';

export default {
  title: 'OptBackdrop',
  component: OptBackdrop,
} as Meta;

const Template: Story<OptBackdropProps> = (args) => <OptBackdrop {...args} />;

export const DefaultActionToolbar = Template.bind({});

DefaultActionToolbar.args = {
  open: false,
};

DefaultActionToolbar.storyName = 'Option Backdrop ';
