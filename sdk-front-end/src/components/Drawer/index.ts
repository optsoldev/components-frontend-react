export interface OptMenuSection {
  title?: string;
  items: OptMenuItem[];
}

export interface OptMenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  activeShouldBeExact?: boolean;
}
