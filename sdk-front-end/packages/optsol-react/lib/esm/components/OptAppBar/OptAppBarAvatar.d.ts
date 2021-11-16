/// <reference types="react" />
import { OptUserProfile } from '../OptAvatar';
interface Props {
    profile: OptUserProfile | undefined;
    onManageProfile: () => void;
    onLogout: () => void;
    fromSidebar?: boolean;
    size?: number;
}
export declare const OptAppBarAvatar: ({ profile, onManageProfile, onLogout, fromSidebar, size }: Props) => JSX.Element;
export {};
