/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
} as Meta;

export const StoryBookTest: Story = (args) => <Main {...args} />;

/** Alterar os argumentos do componente para o stories */

// StoryBookTest.args = {
//   title: 'blablabla',
//   description: 'blablabla',
// };

/** */
