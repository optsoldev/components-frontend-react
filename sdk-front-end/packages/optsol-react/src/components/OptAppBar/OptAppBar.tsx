import styled from "@emotion/styled";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Toolbar } from "@mui/material";
import { OptUserProfile } from "../OptAvatar";
import { OptBreadcrumb } from "../OptBreadcrumb/OptBreadcrumb";
import { OptAppBarAvatar } from "./OptAppBarAvatar";
import * as S from "./styles";

// 1201, see https://mui.com/pt/material-ui/customization/z-index/
const CustomAppBar = styled(S.CustomAppBar)`
  z-index: 1201;
`;

export interface OptAppBarProps {
  profile: OptUserProfile | undefined;
  onManageProfile: () => void;
  onLogout: () => void;
  onDrawerOpen: () => void;
  hideBreadcrumb?: boolean;
  hideDrawerButton?: boolean;
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

export const OptAppBar = ({
  profile,
  onManageProfile,
  onLogout,
  onDrawerOpen,
  hideDrawerButton,
  hideBreadcrumb,
  content,
  actions,
}: OptAppBarProps) => {
  return (
    <CustomAppBar position="fixed">
      <Toolbar>
        {!hideDrawerButton && (
          <S.AppBarDrawerButtonContainer>
            <S.AppBarDrawerButton
              aria-label="open drawer"
              onClick={onDrawerOpen}
              edge="start"
            >
              <Icon size={1} path={mdiMenu} />
            </S.AppBarDrawerButton>
          </S.AppBarDrawerButtonContainer>
        )}

        <S.AppBarContainer marginLeft={hideDrawerButton}>
          {!hideBreadcrumb && <OptBreadcrumb />}
          {content}
        </S.AppBarContainer>

        <S.AppBarEndContainer>
          {actions}

          <OptAppBarAvatar
            profile={profile}
            onManageProfile={onManageProfile}
            onLogout={onLogout}
          />
        </S.AppBarEndContainer>
      </Toolbar>
    </CustomAppBar>
  );
};
