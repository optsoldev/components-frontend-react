import { PropsWithChildren } from 'react';
import * as S from './styles';
interface Props {
    titulo?: string;
    background?: string;
    borderColor?: string;
    width?: number;
    loading?: boolean;
    header?: S.HeaderProps;
    goBackRoute?: string;
}
export declare const OptSidebarFilterContainer: ({ titulo, background, borderColor, width, loading, goBackRoute, children, }: PropsWithChildren<Props>) => JSX.Element;
export {};
