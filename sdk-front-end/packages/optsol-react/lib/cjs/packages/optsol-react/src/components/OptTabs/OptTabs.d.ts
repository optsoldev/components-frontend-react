import { PropsWithChildren } from 'react';
interface Props {
    tab: number;
    onChange: (newTab: number) => void;
}
export declare const OptTabs: ({ tab, onChange, children }: PropsWithChildren<Props>) => JSX.Element;
export {};
