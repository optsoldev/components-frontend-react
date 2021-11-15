/// <reference types="react" />
import { OptUserProfile } from '../OptAvatar';
export interface OptAppBarProps {
    profile: OptUserProfile | undefined;
    onManageProfile: () => void;
    onLogout: () => void;
    onDrawerOpen: () => void;
    hideBreadcrumb?: boolean;
    hideDrawerButton?: boolean;
    content?: React.ReactNode;
    actions?: React.ReactNode;
}
export declare const OptAppBar: ({ profile, onManageProfile, onLogout, onDrawerOpen, hideDrawerButton, hideBreadcrumb, content, actions, }: OptAppBarProps) => JSX.Element;
