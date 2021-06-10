import color from 'color';
import React, { FocusEventHandler, useEffect, useState } from 'react';
import { ActionMeta, GroupTypeBase, OptionsType, OptionTypeBase } from 'react-select';
import CreatableSelect, { CreatableProps } from 'react-select/creatable';
import { useOptTheme } from '../../contexts/theme/themeContext';
import { optSelectTheme } from '../OptSelect/OptSelectTheme';

type OriginalCreatableSelectProps = Omit<
  Omit<Omit<CreatableProps<OptionTypeBase, boolean, GroupTypeBase<OptionTypeBase>>, 'onChange'>, 'value'>,
  'ref'
>;

interface Props extends OriginalCreatableSelectProps {
  onChange: (tags: string[]) => void;
  onBlur: FocusEventHandler;
  value?: string[];
  name?: string;
}

export const OptTagSelect = React.forwardRef<CreatableSelect<OptionTypeBase, boolean>, Props>(
  ({ onChange, onBlur, value = [], name, ...props }, ref) => {
    const { currentTheme } = useOptTheme();
    const { borderRadius, colors, spacing } = optSelectTheme;
    const [transformedValue, setTransformedValue] = useState<readonly OptionTypeBase[]>([]);

    function onChangeHandler(value: OptionsType<OptionTypeBase>, action: ActionMeta<OptionTypeBase>) {
      if (!value) {
        onChange([]);
      } else {
        if (!Array.isArray(value)) {
          value = [value] as any;
        }

        const simpifiedValues = (value as OptionsType<OptionTypeBase>)?.map((x) => x.value) ?? [];
        onChange(simpifiedValues);
      }
    }

    useEffect(() => {
      setTransformedValue(value.map((x) => ({ label: x, value: x })));
    }, [value]);

    return (
      <CreatableSelect
        backspaceRemovesValue
        createOptionPosition="first"
        menuPosition="fixed"
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
        formatCreateLabel={(inputValue) => 'Criar tag ' + inputValue}
        placeholder="Informe as tags"
        noOptionsMessage={(a) => 'Sem opções pré-definidas'}
        isMulti
        ref={ref as any}
        value={transformedValue}
        name={name}
        onChange={onChangeHandler}
        onBlur={onBlur}
        {...props}
      />
    );
  },
);
