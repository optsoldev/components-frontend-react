export { OptAvatar } from './OptAvatar';
export interface OptUserProfile {
    name: string;
    email: string;
    /** If no src is provided, the first and last initials are going to be taken as avatar */
    avatarSrc: string | undefined;
    alternativeColor?: string;
}
export interface OptAvatarProps {
    profile: OptUserProfile;
    size?: number;
}
