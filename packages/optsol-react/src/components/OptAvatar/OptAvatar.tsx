import * as S from './styles';

export interface OptUserProfile {
  name: string;
  email: string;
  /** If no src is provided, the first and last initials are going to be taken as avatar */
  avatarSrc: string | undefined;
  alternativeColor?: string;
}

export interface OptAvatarProps {
  profile: OptUserProfile;
  //* * Size in pixels */
  size?: number;
}

export function OptAvatar({ profile, size = 32 }: OptAvatarProps) {
  let initials = '-';
  const trimmedName = profile.name.trim();

  if (trimmedName.length > 0) {
    const splittedName = trimmedName.split(' ');

    // eslint-disable-next-line prefer-destructuring
    initials = splittedName[0][0];

    if (splittedName.length > 1) {
      initials += splittedName[splittedName.length - 1][0];
    }
  }

  return (
    <S.CustomAvatar
      alt={profile.name}
      src={profile.avatarSrc}
      alternativecolor={profile.alternativeColor}
      size={size}
    >
      {!profile.avatarSrc && initials.toUpperCase()}
    </S.CustomAvatar>
  );
}
