import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OptChip, OptChipProps } from './OptChip';
import { ColorPalette } from '../../shared/styles/colors';

export default {
  title: 'OptChip',
  component: OptChip,
} as Meta;

export interface OptChipArgs extends OptChipProps {
  label: string;
}

export const OptChipDialog: Story<OptChipArgs> = ({ label, ...args }) => <OptChip {...args} label={label} />;

OptChipDialog.args = {
  label: 'OPTSOL',
  backgroundcolor: ColorPalette.primary,
  textcolor: ColorPalette.white,
};

OptChipDialog.storyName = 'Option Chip';

OptChipDialog.argTypes = {
  ref: {
    table: { disable: true },
  },
  avatar: {
    table: { disable: true },
  },
  icon: {
    table: { disable: true },
  },
  deleteIcon: {
    table: { disable: true },
  },
  color: {
    table: { disable: true },
  },
  children: {
    table: { disable: true },
  },
  onDelete: {
    table: { disable: true },
  },
  size: {
    table: { disable: true },
  },
  variant: {
    table: { disable: true },
  },
  theme: {
    table: { disable: true },
  },
  as: {
    table: { disable: true },
  },
  forwardedAs: {
    table: { disable: true },
  },
  disabled: {
    table: { disable: true },
  },
  clickable: {
    table: { disable: true },
  },
};
