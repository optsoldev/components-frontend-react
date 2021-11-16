import React from 'react';
import { Props } from 'react-select';
export interface OptSelectionOption {
    label: string;
    value: string;
}
export interface OptSelectProps extends Props {
}
export declare const OptSelect: React.ForwardRefExoticComponent<OptSelectProps & React.RefAttributes<Props<OptSelectionOption, boolean, import("react-select").GroupBase<OptSelectionOption>>>>;
