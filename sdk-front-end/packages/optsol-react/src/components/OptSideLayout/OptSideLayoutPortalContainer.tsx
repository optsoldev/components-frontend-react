import { PropsWithChildren } from 'react';
import { useOptTheme } from '../../contexts/theme/themeContext';
import * as S from './styles';

export function OptSideLayoutPortalContainer({
  children,
}: PropsWithChildren<{}>) {
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
