import { CustomOptTheme } from '../../contexts/theme/themeState';
import { OptUserProfile } from '../OptAvatar';
import { OptMenuSection } from '../OptDrawer';

export { OptSideLayout } from './OptSideLayout';
export { OptSideLayoutContent } from './OptSideLayoutContent';
export { OptSideLayoutPortal } from './OptSideLayoutPortal';

export interface OptSideLayoutProviderProps {
  darkTheme?: boolean;
  theme?: CustomOptTheme;
}

export interface OptSideLayoutProps {
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
    /** Actions that will be displayed at the end of the appbar, before the profile button */
    actions?: JSX.Element;
  };

  version: string;
}
