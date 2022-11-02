import { CustomOptTheme } from '../../../contexts/theme/themeState';
import { OptMenuSection } from '../../../types';
import { OptUserProfile } from '../../OptAvatar';
import { OptMainSidebarFooterAction } from '../../OptSideAppbar/OptSideAppbarFooterActions/OptSideAppbarFooterActions';

export interface OptSideLayoutProviderProps {
  darkTheme?: boolean;
  theme?: CustomOptTheme;
}

export interface OptSideLayoutProps {
  /** Sections of the menus. Each object with the menu links will be splitted into different lists, separated by a Divider.  */
  sections: OptMenuSection[];
  /** Application routes within a \<Switch\> \</Switch\>   */
  routes?: JSX.Element;
  profile?: OptUserProfile;

  onManageProfile: () => void;
  onLogout: () => void;

  appBarConfig?: {
    /** Actions that will be displayed at the end of the appbar, before the profile button */
    actions?: OptMainSidebarFooterAction[];
    /** Removes items description from the main sidebar */
    hideLinkDescription?: boolean;
    sideAppbarWidth?: number;
    expandedSideAppbarWidth?: number;
  };

  version: string;
}
