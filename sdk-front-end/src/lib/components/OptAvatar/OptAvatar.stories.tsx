import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OptAvatar } from './OptAvatar';
import { OptAvatarProps, OptUserProfile } from './index';
import { ColorPalette } from '../../shared/styles/colors';

export default {
  title: 'OptAvatar',
  component: OptAvatar,
} as Meta;

let userProfile: OptUserProfile = {
  name: 'João Carlos da Silva',
  email: 'falecomjoao@gmail.com',
  avatarSrc: '',
  alternativeColor: ColorPalette.primary,
};

const Template: Story<OptAvatarProps> = (args) => (args.profile = userProfile, <OptAvatar {...args}></OptAvatar>);

export const OptAvatarExample = Template.bind({});

OptAvatarExample.args = {
  size: 64,
};
