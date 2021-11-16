import { CSSProperties, PropsWithChildren } from 'react';
import * as S from './styles';
export interface OptSidebarListBaseProps {
    createTo?: string;
    title: string;
    background?: string;
    borderColor?: string;
    width?: number;
    goBackRoute?: string;
    header?: S.HeaderProps;
    style?: CSSProperties;
}
export declare const OptSidebarListBaseContainer: ({ createTo, title, background, borderColor, width, goBackRoute, children, header, style, }: PropsWithChildren<OptSidebarListBaseProps>) => JSX.Element;
