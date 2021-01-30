import { LinearProgress } from '@material-ui/core';
import React, { PropsWithChildren, Suspense } from 'react';
import { OptMenuSection, OptSidebarMenu } from '../OptDrawer';
import { MainContainer, MainContentContainer } from './styles';

interface Props {
  sections: OptMenuSection[];
}

export const OptSideLayoutPortal = ({ sections, children }: PropsWithChildren<Props>) => {
  return (
    <MainContainer>
      <OptSidebarMenu sections={sections} />

      <MainContentContainer>
        <Suspense
          fallback={
            <div style={{ flex: 1, marginTop: 1 }}>
              <LinearProgress color="secondary" />
              <LinearProgress color="primary" />
            </div>
          }>
          {children}
        </Suspense>
      </MainContentContainer>
    </MainContainer>
  );
};
