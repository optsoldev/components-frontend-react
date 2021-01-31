import { LinearProgress } from '@material-ui/core';
import React, { PropsWithChildren, Suspense } from 'react';
import { OptMenuSection } from '../OptDrawer';
import { OptSidebar } from '../OptSidebar';
import { MainContainer, MainContent } from './styles';

interface Props {
  sections: OptMenuSection[];
}

export const OptSideLayoutPortal = ({ sections, children }: PropsWithChildren<Props>) => {
  return (
    <MainContainer>
      <OptSidebar sections={sections} />

      <MainContent>
        <Suspense
          fallback={
            <div style={{ flex: 1, marginTop: 1 }}>
              <LinearProgress color="secondary" />
              <LinearProgress color="primary" />
            </div>
          }>
          {children}
        </Suspense>
      </MainContent>
    </MainContainer>
  );
};
