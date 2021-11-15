import { ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
export declare const sideAppbarWidth = 50;
export declare const expandedSideAppbarWidth = 260;
export declare const activeLinkClass = "active-link";
interface SidebarMenuContainerProps {
    expanded?: boolean;
}
export declare const SidebarMenuContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, SidebarMenuContainerProps, never>;
export declare const SidebarListItem: import("styled-components").StyledComponent<any, import("styled-components").DefaultTheme, object, string | number | symbol>;
export declare const SidebarNavLink: import("styled-components").StyledComponent<typeof NavLink, import("styled-components").DefaultTheme, {}, never>;
export declare const CustomList: import("styled-components").StyledComponent<import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").ListTypeMap<{}, "ul">>, import("styled-components").DefaultTheme, {}, never>;
export declare const SidebarListItemIcon: import("styled-components").StyledComponent<typeof ListItemIcon, import("styled-components").DefaultTheme, {}, never>;
export declare const SidebarListItemText: import("styled-components").StyledComponent<typeof ListItemText, import("styled-components").DefaultTheme, {}, never>;
export declare const SidebarMenuDivider: import("styled-components").StyledComponent<import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").DividerTypeMap<{}, "hr">>, import("styled-components").DefaultTheme, {}, never>;
export {};
