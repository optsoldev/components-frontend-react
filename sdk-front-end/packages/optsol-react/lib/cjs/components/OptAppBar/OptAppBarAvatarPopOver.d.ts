/// <reference types="react" />
import { OptUserProfile } from "../OptAvatar";
interface Props {
    profile: OptUserProfile;
    onManageProfile: () => void;
    onLogout: () => void;
    onBackdropClick?: (event: React.MouseEvent<HTMLElement>) => void;
    fromSidebar?: boolean;
    open?: boolean;
    anchorEl: HTMLElement | null;
}
export declare const OptAppBarAvatarPopOver: ({ profile, onManageProfile, onLogout, anchorEl, fromSidebar, open, onBackdropClick, }: Props) => JSX.Element;
export {};
