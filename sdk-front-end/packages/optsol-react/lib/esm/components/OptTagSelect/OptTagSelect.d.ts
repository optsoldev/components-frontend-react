import React, { FocusEventHandler } from 'react';
import { GroupBase } from 'react-select';
import { CreatableProps } from 'react-select/creatable';
import { OptSelectionOption } from '../OptSelect';
declare type OriginalCreatableProps = Omit<Omit<Omit<CreatableProps<OptSelectionOption, boolean, GroupBase<OptSelectionOption>>, 'onChange'>, 'value'>, 'ref'>;
export interface OptTagSelectProps extends OriginalCreatableProps {
    onChange: (tags: string[]) => void;
    onBlur: FocusEventHandler;
    value?: string[];
    name?: string;
}
export declare const OptTagSelect: React.ForwardRefExoticComponent<OptTagSelectProps & React.RefAttributes<CreatableProps<OptSelectionOption, boolean, GroupBase<OptSelectionOption>>>>;
export {};
