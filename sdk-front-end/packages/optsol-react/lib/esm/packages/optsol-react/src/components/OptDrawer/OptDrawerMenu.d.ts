/// <reference types="react" />
import { OptMenuSection } from '.';
interface OptDrawerMenuProps {
    sections: OptMenuSection[];
    onHideDrawer?: () => void;
    onToggleDockDrawer: () => void;
    docked?: boolean;
    drawerLogo?: JSX.Element;
    version: string;
}
export declare const OptDrawerMenu: ({ sections, onHideDrawer, onToggleDockDrawer, docked, drawerLogo, version, }: OptDrawerMenuProps) => JSX.Element;
export {};
