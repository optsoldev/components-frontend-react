import { CustomOptTheme } from '../../contexts/theme/themeState';
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
  darkTheme?: boolean;
  profile: OptUserProfile | undefined;

  onConfigurarPerfil: () => void;
  onLogout: () => void;

  appBarConfig?: {
    hideBreadcrumb?: boolean;
    /** Content that will be displayed at appbar's start */
    content?: JSX.Element;
    /** Actions that will be displayed at the end of the appbar, before the profile button */
    actions?: JSX.Element;
  };

  theme?: CustomOptTheme;

  /** Suggested max width of 136px */
  drawerLogo?: JSX.Element;
  version: string;
}
