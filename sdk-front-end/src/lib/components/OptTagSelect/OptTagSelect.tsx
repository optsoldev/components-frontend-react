import React, { FocusEventHandler, useEffect, useState } from 'react';
import { ActionMeta, GroupTypeBase, NamedProps, OptionsType, ValueType } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { optTagSelectTheme } from './OptTagSelectTheme';

type OptionType = { label: string; value: string };
type OriginalCreatableSelectProps = Omit<
  Omit<Omit<NamedProps<OptionType, boolean, GroupTypeBase<OptionType>>, 'onChange'>, 'value'>,
  'ref'
>;

interface Props extends OriginalCreatableSelectProps {
  onChange: (tags: string[]) => void;
  onBlur: FocusEventHandler;
  value?: string[];
  name?: string;
}

export const OptTagSelect = React.forwardRef<CreatableSelect<OptionType, boolean>, Props>(
  ({ onChange, onBlur, value = [], name, ...props }, ref) => {
    const [transformedValue, setTransformedValue] = useState<OptionType[]>([]);

    function onChangeHandler(value: ValueType<OptionType, boolean>, action: ActionMeta<OptionType>) {
      if (!value) {
        onChange([]);
      } else {
        if (!Array.isArray(value)) {
          value = [value] as OptionsType<OptionType>;
        }

        const simpifiedValues = (value as OptionsType<OptionType>)?.map((x) => x.value) ?? [];
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
        menuPlacement="top"
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
