import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OptSelect, OptSelectionOption, OptSelectProps } from './OptSelect';

export default {
  title: 'OptSelect',
  component: OptSelect,
} as Meta;

const options: ReadonlyArray<OptSelectionOption> = [
  {
    value: 'Todos',
    label: 'Todos os clientes',
  },
  { value: 'Vendedores', label: 'Vendedores' },
  { value: 'Clientes', label: 'Clientes' },
  { value: 'Fornecedores', label: 'Fornecedores' },
];

export const OptSelectExample: Story<OptSelectProps> = (args) => <OptSelect options={options} {...args} />;

OptSelectExample.args = {
  defaultValue: {
    value: 'Todos',
    label: 'Todos os clientes',
  },
};

OptSelectExample.storyName = 'Opt Select';

OptSelectExample.argTypes = {};
