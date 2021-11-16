import React from 'react';
import { OptUserProfile } from '../../OptAvatar';
export interface OptMainSidebarFooterAction {
    /** Must be an @mdi/js path or a ReactNode */
    icon: string | React.ReactNode;
    iconColor?: string;
    title: string;
    onClick: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => void;
}
export interface FooterActionsProps {
    footerActions?: OptMainSidebarFooterAction[];
    profile?: OptUserProfile;
    onManageProfile: () => void;
    onLogout: () => void;
    toggleSidebar: () => void;
    hideLinkDescription?: boolean;
}
export declare const FooterActions: ({ footerActions, profile, onLogout, onManageProfile, toggleSidebar: expandSidebar, }: FooterActionsProps) => JSX.Element;
export declare const ExpandedFooterActions: ({ footerActions, profile, onLogout, onManageProfile, toggleSidebar: collapseSidebar, }: FooterActionsProps) => JSX.Element;
