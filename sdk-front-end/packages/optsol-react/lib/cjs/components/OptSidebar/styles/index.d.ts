import { ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
export declare const sidebarMenuWidth = 88;
export declare const activeLinkClass = "active-link";
interface SidebarBaseContainerProps {
    background?: string;
    width?: number;
    bordercolor?: string;
}
export declare const SidebarContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SidebarBaseContainerProps, never>;
export declare const SidebarWithToolbarContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SidebarBaseContainerProps, never>;
export declare const SidebarWithToolbarContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SidebarBaseContainerProps, never>;
export declare const SidebarListItem: import("styled-components").StyledComponent<any, import("styled-components").DefaultTheme, object, string | number | symbol>;
export declare const SidebarNavLink: import("styled-components").StyledComponent<typeof NavLink, import("styled-components").DefaultTheme, {}, never>;
export declare const CustomList: import("styled-components").StyledComponent<import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").ListTypeMap<{}, "ul">>, import("styled-components").DefaultTheme, {}, never>;
export declare const SidebarListItemIcon: import("styled-components").StyledComponent<typeof ListItemIcon, import("styled-components").DefaultTheme, {}, never>;
export declare const SidebarListItemText: import("styled-components").StyledComponent<typeof ListItemText, import("styled-components").DefaultTheme, {}, never>;
export declare const SidebarMenuDivider: import("styled-components").StyledComponent<import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").DividerTypeMap<{}, "hr">>, import("styled-components").DefaultTheme, {}, never>;
export declare const FooterActionsContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
