export interface OptMenuItem {
  title: string;
  path: string;
  /** Must be an @mdi/js path or a ReactNode */
  icon: string | React.ReactNode;
  iconColor?: string;
  activeShouldBeExact?: boolean;
}

export type OptAppLogo = Omit<OptMenuItem, 'title' | 'activeShouldBeExact'>;
