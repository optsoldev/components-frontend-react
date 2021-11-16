/// <reference types="react" />
interface Props {
    placeholder?: string;
    onSearch: (searchTerm?: string) => void;
    width?: number;
    paddingX?: number;
    noBorder?: boolean;
}
export declare const OptSearchField: ({ placeholder, onSearch, noBorder, width, paddingX }: Props) => JSX.Element;
export {};
