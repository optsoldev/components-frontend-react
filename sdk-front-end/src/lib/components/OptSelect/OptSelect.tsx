import React from 'react';
import Select, { OptionTypeBase, Props } from 'react-select';
import { optSelectTheme } from './OptSelectTheme';

export interface OptSelectionOption extends OptionTypeBase {}
export interface OptSelectProps extends Props {}
// interface Props extends NamedProps<OptionType, boolean, GroupTypeBase<OptionType>>{ }

export const OptSelect = React.forwardRef<Select<OptSelectionOption, boolean>, OptSelectProps>(({ ...props }, ref) => {
  return (
    <Select
      backspaceRemovesValue
      theme={optSelectTheme}
      placeholder="Selecione uma opção"
      noOptionsMessage={(a) => 'Sem opções pré-definidas'}
      ref={ref as any}
      {...props}
    />
  );
});
