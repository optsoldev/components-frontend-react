import { PropsWithChildren } from 'react';
import { IconPathColor } from '../../types/IconPathColor';
export declare type OptActionButtonProps = {
    /** path do @mdi/js */
    startIcon?: IconPathColor | JSX.Element;
    /** path do @mdi/js */
    endIcon?: IconPathColor | JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    loading?: boolean;
    textColor?: string;
    hover?: {
        textColor: string;
    };
};
export declare const OptActionButton: ({ startIcon, endIcon, onClick, children, disabled, loading, textColor, hover, }: PropsWithChildren<OptActionButtonProps>) => JSX.Element;
