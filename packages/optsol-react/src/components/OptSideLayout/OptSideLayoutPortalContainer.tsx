import { PropsWithChildren } from 'react';

import { useOptTheme } from '../../contexts/theme/themeContext';

import * as S from './styles';

/**
 * @deprecated This will be removed soon
 */
export function OptSideLayoutPortalContainer({
  children,
}: PropsWithChildren<object>) {
  const {
    state: { currentSideAppbarWidth },
  } = useOptTheme();

  return (
    <S.StyledOptSideLayoutPortalContainer
      currentsidebarwidth={currentSideAppbarWidth}
    >
      {children}
    </S.StyledOptSideLayoutPortalContainer>
  );
}
