import React from 'react';
import { OptMenuSection } from '.';
export interface OptSidebarMenuProps {
    sections: OptMenuSection[];
    hideLinkDescription?: boolean;
    footerActions?: React.ReactNode;
}
export declare const OptSidebar: ({ sections, footerActions }: OptSidebarMenuProps) => JSX.Element;
