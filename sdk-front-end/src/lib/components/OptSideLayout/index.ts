import { CustomOptTheme } from '../../contexts/theme/themeState';
import { OptUserProfile } from '../OptAvatar';
import { OptMenuSection } from '../OptDrawer';
import { OptMainSidebarFooterAction } from '../OptSideAppbar/OptSideAppbarFooterActions/OptSideAppbarFooterActions';

export { OptSideLayout } from './OptSideLayout';
export { OptSideLayoutContent } from './OptSideLayoutContent';
export { OptSideLayoutPortal } from './OptSideLayoutPortal';
export { OptSideLayoutPortalContent } from './styles';
export { OptSideLayoutPortalContainer } from './OptSideLayoutPortalContainer';

export interface OptSideLayoutProviderProps {
  darkTheme?: boolean;
  theme?: CustomOptTheme;
}

export interface OptSideLayoutProps {
  /** Sections of the menus. Each object with the menu links will be splitted into different lists, separated by a Divider.  */
  sections: OptMenuSection[];
  /** Application routes within a \<Switch\> \</Switch\>   */
  routes?: JSX.Element;
  profile: OptUserProfile | undefined;

  onManageProfile: () => void;
  onLogout: () => void;

  appBarConfig?: {
    /** Actions that will be displayed at the end of the appbar, before the profile button */
    actions?: OptMainSidebarFooterAction[];
    /** Removes items description from the main sidebar */
    hideLinkDescription?: boolean;
  };

  version: string;
}
