import React from 'react';

import { ReactDivStyle } from '../../types/ReactDivStyle';

import * as S from './styles';

/**
 * @deprecated This will be removed soon
 */
export const OptSideLayoutContent = React.forwardRef<
  HTMLDivElement,
  ReactDivStyle & { noPadding?: boolean }
>(({ noPadding = false, ...props }, ref) => (
  <S.SideLayoutContent $noPadding={noPadding} {...props} ref={ref} />
));

OptSideLayoutContent.displayName = 'OptSideLayoutContent';
