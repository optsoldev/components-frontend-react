import { CustomOptTheme } from '../../../contexts/theme/themeState';
import { OptAppLogo, OptMenuSection } from '../../../types';
import { OptUserProfile } from '../../OptAvatar';
import { OptMainSidebarFooterAction } from '../../OptSideAppbar/OptSideAppbarFooterActions/OptSideAppbarFooterActions';

export interface OptSideLayoutProviderProps {
  darkTheme?: boolean;
  theme?: CustomOptTheme;
}

export interface OptSideLayoutProps {
  logo?: OptAppLogo;
  /** Sections of the menus. Each object with the menu links will be splitted into different lists, separated by a Divider.  */
  sections: OptMenuSection[];
  /** Application routes within a \<Switch\> \</Switch\>   */
  routes?: JSX.Element;
  profile?: OptUserProfile;

  onManageProfile: () => void;
  onLogout: () => void;
  expandable?: boolean;
  appBarConfig?: {
    /** Actions that will be displayed at the end of the appbar, before the profile button */
    actions?: OptMainSidebarFooterAction[];
    /** Removes items description from the main sidebar */
    hideLinkDescription?: boolean;
    sideAppbarWidth?: number;
    expandedSideAppbarWidth?: number;
    sectionsAlignment?: 'start' | 'center' | 'end';
  };

  version: string;
}
