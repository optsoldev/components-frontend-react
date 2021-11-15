import { PropsWithChildren } from 'react';
import { OptUserProfile } from '..';
import { OptMenuSection } from '../OptSidebar';
export interface OptLayoutProps {
    /** Sections of the menus. Each object with the menu links will be splitted into different lists, separated by a Divider.  */
    sections: OptMenuSection[];
    /** Application routes within a \<Switch\> \</Switch\>   */
    routes?: JSX.Element;
    /** Disables the sidebar */
    noSidebar?: boolean;
    profile: OptUserProfile | undefined;
    onManageProfile: () => void;
    onLogout: () => void;
    appBarConfig?: {
        hideBreadcrumb?: boolean;
        /** Content that will be displayed at appbar's start */
        content?: JSX.Element;
        /** Actions that will be displayed at the end of the appbar, before the profile button */
        actions?: JSX.Element;
    };
    /** Suggested max width of 136px */
    drawerLogo?: JSX.Element;
    version: string;
}
export declare const OptLayout: ({ sections, routes, noSidebar, onManageProfile, profile, children, onLogout, drawerLogo, version, appBarConfig, }: PropsWithChildren<OptLayoutProps>) => JSX.Element;
