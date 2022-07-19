import { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import * as S from "./styles";

const CustomTabs = styled(S.CustomTabs)`
  min-height: 30px;
  height: 30px;
`;

interface Props {
  tab: number;
  onChange: (newTab: number) => void;
}

export const OptTabs = ({
  tab,
  onChange,
  children,
}: PropsWithChildren<Props>) => {
  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    onChange(newValue);
  };

  return (
    <S.CustomTabAppBar>
      <CustomTabs
        value={tab}
        onChange={handleChange}
        variant="fullWidth"
        scrollButtons="auto"
        TabIndicatorProps={{
          hidden: true,
        }}
      >
        {children}
      </CustomTabs>
    </S.CustomTabAppBar>
  );
};
