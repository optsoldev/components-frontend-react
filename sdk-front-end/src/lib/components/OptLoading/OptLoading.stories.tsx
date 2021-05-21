import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OptLoading, OptLoadingProps } from './OptLoading';

export default {
  title: 'OptLoading',
  component: OptLoading,
} as Meta;

const Template: Story<OptLoadingProps> = (args) => <OptLoading {...args} />;

export const DefaultOptLoading = Template.bind({});

DefaultOptLoading.args = {
   size: 50,
   color: 'primary',
};

DefaultOptLoading.storyName = 'Option Loading ';
