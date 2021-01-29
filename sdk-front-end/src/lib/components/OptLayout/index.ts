import { CustomOptTheme } from '../../contexts/theme/themeState';
import { OptUserProfile } from '../OptAvatar';
import { OptMenuSection } from '../OptDrawer';

export { OptAppBar } from './OptAppBar';
export { OptAppBarAvatar } from './OptAppBarAvatar';
export { OptAvatar } from '../OptAvatar/OptAvatar';
export { OptLayoutProvider } from './OptLayoutProvider';
export { OptLayout } from './OptLayout';

export interface OptLayoutProviderProps {
  darkTheme?: boolean;
  theme?: CustomOptTheme;
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
