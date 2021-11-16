import { NavLink } from 'react-router-dom';
export declare const MainContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export interface HeaderProps {
    color?: string;
    background?: string;
}
export declare const Header: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, HeaderProps, never>;
export declare const CustomSidebarNavLink: import("styled-components").StyledComponent<typeof NavLink, import("styled-components").DefaultTheme, {}, never>;
export declare const CustomListItem: import("styled-components").StyledComponent<any, import("styled-components").DefaultTheme, object, string | number | symbol>;
export interface CreationButtonProps {
    customcolor?: string;
}
export declare const CreationButton: import("styled-components").StyledComponent<import("@mui/material").ExtendButtonBase<import("@mui/material").IconButtonTypeMap<{}, "button">>, import("styled-components").DefaultTheme, CreationButtonProps, never>;
