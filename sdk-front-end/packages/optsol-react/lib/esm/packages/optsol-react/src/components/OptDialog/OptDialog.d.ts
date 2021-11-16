import { PropsWithChildren } from "react";
import { IconPathColor } from "../../types/IconPathColor";
export interface OptDialogProps {
    open: boolean;
    title: string;
    icon?: IconPathColor;
    onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}
export declare const OptDialog: ({ open, title, icon, onClose, children, }: PropsWithChildren<OptDialogProps>) => JSX.Element;
