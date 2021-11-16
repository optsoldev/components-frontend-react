/// <reference types="react" />
import { OptMenuSection } from '.';
import { OptUserProfile } from '../OptAvatar';
import { OptMainSidebarFooterAction } from './OptSideAppbarFooterActions/OptSideAppbarFooterActions';
interface OptMainSidebarProps {
    sections: OptMenuSection[];
    footerActions?: OptMainSidebarFooterAction[];
    profile?: OptUserProfile;
    onManageProfile: () => void;
    onLogout: () => void;
    hideLinkDescription?: boolean;
}
export declare const OptSideAppbar: ({ sections, hideLinkDescription, profile, onManageProfile, onLogout, footerActions, }: OptMainSidebarProps) => JSX.Element;
export {};
