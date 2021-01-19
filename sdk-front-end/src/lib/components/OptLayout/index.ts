import { OptMenuSection } from '../OptDrawer';

export { OptAppBar } from './OptAppBar';
export { OptAvatar } from './OptAvatar';
export { OptLayout } from './OptLayout';

export interface OptUserProfile {
  name: string;
  email: string;
  /** If no src is provided, the first and last initials are going to be taken as avatar */
  avatarSrc: string | undefined;
  alternativeColor?: string;
}

export interface OptLayoutProps {
  /** Sections of the menus. Each object with the menu links will be splitted into different lists, separated by a Divider.  */
  sections: OptMenuSection[];
  /** Application routes within a \<Switch\> \</Switch\>   */
  routes?: JSX.Element;
  /** Disables the sidebar */
  noSidebar?: boolean;
  profile: OptUserProfile | undefined;
  onConfigurarPerfil: () => void;
  onLogout: () => void;
  onNotificationsClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onModulesClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
