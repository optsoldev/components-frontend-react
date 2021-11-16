import { PropsWithChildren } from 'react';
import { IconPathColor } from '../../types/IconPathColor';
export interface Props {
    open: boolean;
    title: string;
    cancelButtonText?: string;
    confirmationButtonText?: string;
    icon?: IconPathColor;
    onConfirm: () => void;
    onCancel: () => void;
    onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}
export declare const OptConfirmationDialog: ({ open, title, cancelButtonText, confirmationButtonText, icon, onClose, onCancel, onConfirm, children, }: PropsWithChildren<Props>) => JSX.Element;
