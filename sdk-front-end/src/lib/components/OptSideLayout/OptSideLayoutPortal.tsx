import { LinearProgress } from '@material-ui/core';
import React, { PropsWithChildren, Suspense } from 'react';
import { OptMenuSection } from '../OptDrawer';
import { OptSidebar } from '../OptSidebar';
import { OptSideLayoutPortalContainer } from './OptSideLayoutPortalContainer';
import { OptSideLayoutPortalContent } from './styles';

interface Props {
  sections: OptMenuSection[];
}

export const OptSideLayoutPortal = ({ sections, children }: PropsWithChildren<Props>) => {
  return (
    <OptSideLayoutPortalContainer>
      <OptSidebar sections={sections} />

      <OptSideLayoutPortalContent>
        <Suspense
          fallback={
            <div style={{ flex: 1, marginTop: 1 }}>
              <LinearProgress color="secondary" />
              <LinearProgress color="primary" />
            </div>
          }>
          {children}
        </Suspense>
      </OptSideLayoutPortalContent>
    </OptSideLayoutPortalContainer>
  );
};
