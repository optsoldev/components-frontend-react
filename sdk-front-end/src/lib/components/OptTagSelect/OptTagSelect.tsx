import React, { FocusEventHandler, useEffect, useState } from 'react';
import { ActionMeta, GroupTypeBase, OptionsType, OptionTypeBase } from 'react-select';
import CreatableSelect, { CreatableProps } from 'react-select/creatable';
import { optTagSelectTheme } from './OptTagSelectTheme';

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
        theme={optTagSelectTheme}
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
