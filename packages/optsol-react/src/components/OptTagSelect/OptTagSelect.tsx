import color from 'color';
import React, { FocusEventHandler, useEffect, useState } from 'react';
import { GroupBase, MultiValue, PropsValue, SingleValue } from 'react-select';
import CreatableSelect, { CreatableProps } from 'react-select/creatable';

import { useOptTheme } from '../../contexts/theme/themeContext';
import { OptSelectionOption } from '../OptSelect';
import { optSelectTheme } from '../OptSelect/OptSelectTheme';

type OriginalCreatableProps = Omit<
  Omit<
    Omit<
      CreatableProps<
        OptSelectionOption,
        boolean,
        GroupBase<OptSelectionOption>
      >,
      'onChange'
    >,
    'value'
  >,
  'ref'
>;

/**
 * @deprecated This will be removed soon
 */
export interface OptTagSelectProps extends OriginalCreatableProps {
  onChange: (tags: string[]) => void;
  onBlur: FocusEventHandler;
  value?: string[];
  name?: string;
}

export const OptTagSelect = React.forwardRef<
  CreatableProps<OptSelectionOption, boolean, GroupBase<OptSelectionOption>>,
  OptTagSelectProps
>((props: any, ref) => {
  // todo: remover este any e readequar os tipos
  const { onChange, onBlur, value = [], name } = props;
  const { currentTheme } = useOptTheme();
  const { borderRadius, colors, spacing } = optSelectTheme;
  const [transformedValue, setTransformedValue] = useState<
    readonly OptSelectionOption[]
  >([]);

  const parseValue = (
    newValue: MultiValue<OptSelectionOption> | SingleValue<OptSelectionOption>
  ) => {
    if (!newValue) return [];
    if ('value' in newValue) return [newValue];
    return newValue.map((x) => x.value);
  };

  const onChangeHandler = (
    newValue: MultiValue<OptSelectionOption> | SingleValue<OptSelectionOption>
  ) => onChange(parseValue(newValue));

  useEffect(() => {
    const currentValue = value ?? [];

    setTransformedValue(
      currentValue.map((x: string) => ({ label: x, value: x }))
    );
  }, [value]);

  return (
    <CreatableSelect
      {...props}
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
      formatCreateLabel={(inputValue) => `Criar tag ${inputValue}`}
      placeholder="Informe as tags"
      noOptionsMessage={() => 'Sem opções pré-definidas'}
      isMulti
      ref={ref as any}
      value={transformedValue as PropsValue<OptSelectionOption> | undefined}
      name={name}
      onChange={onChangeHandler}
      onBlur={onBlur}
    />
  );
});

OptTagSelect.displayName = 'OptTagSelect';
