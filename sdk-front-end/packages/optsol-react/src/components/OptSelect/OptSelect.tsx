import color from 'color';
import React from 'react';
import Select, { Props } from 'react-select';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { optSelectTheme } from './OptSelectTheme';


export interface OptSelectionOption {
  label: string;
  value: string;
}

export interface OptSelectProps extends Props {}

export const OptSelect = React.forwardRef<Props<OptSelectionOption, boolean>, OptSelectProps>(
  ({ isMulti, ...props }: OptSelectProps, ref) => {
    const { currentTheme } = useOptTheme();
    const { borderRadius, colors, spacing } = optSelectTheme;

    return (
      <Select
        backspaceRemovesValue
        isMulti={isMulti}
        theme={{
          borderRadius,
          spacing,
          colors: {
            ...colors,
            primary: currentTheme.primary,
            primary75: color(currentTheme.primary).lighten(0.25).hex(),
            primary50: color(currentTheme.primary).lighten(0.5).hex(),
            primary25: color(currentTheme.primary).lighten(0.75).hex(),
          },
        }}
        placeholder="Selecione uma opção"
        noOptionsMessage={(_) => 'Sem opções pré-definidas'}
        ref={ref as any}
        {...props}
      />
    );
  },
);
