import { mdiBellOutline, mdiShieldSync } from "@mdi/js";
import {
  OptActionButton,
  OptAppBar,
  OptLayoutProvider,
  OptLayoutProviderProps,
  OptTheme,
  OptUserProfile,
} from "@optsol/react";
import { ComponentMeta, Story } from "@storybook/react";
import React from "react";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptAppBar",
  component: OptAppBar,
} as ComponentMeta<typeof OptAppBar>;

const Template: Story<
  OptLayoutProviderProps & {
    theme: boolean;
    content: boolean;
    actions: boolean;
  }
> = (args) => {
  const userProfile: OptUserProfile = {
    name: "Luciano Rocha",
    email: "pedrinha@optsol.com",
    avatarSrc: "",
    alternativeColor: ColorPalette.green3,
  };

  let softTheme: OptTheme = {
    light: {
      style: "soft",
      primary: ColorPalette.white,
      primaryContrast: ColorPalette.green2,
      secondary: ColorPalette.green3,
      secondaryContrast: ColorPalette.white,
    },
  };

  let standardTheme: OptTheme = {
    light: {
      style: "standard",
      primary: ColorPalette.green2,
      primaryContrast: ColorPalette.white,
      secondary: ColorPalette.green3,
      secondaryContrast: ColorPalette.white,
    },
  };

  const contentButtonSoft = (
    <OptActionButton
      startIcon={{ path: mdiShieldSync, color: ColorPalette.green2 }}
    />
  );

  const actionsButtonSoft = (
    <OptActionButton
      startIcon={{ path: mdiBellOutline, color: ColorPalette.green2 }}
    />
  );

  const contentButtonStandard = (
    <OptActionButton
      startIcon={{ path: mdiShieldSync, color: ColorPalette.white }}
    />
  );

  const actionsButtonStandard = (
    <OptActionButton
      startIcon={{ path: mdiBellOutline, color: ColorPalette.white }}
    />
  );

  return (
    <OptLayoutProvider theme={args.theme ? softTheme : standardTheme} noRouter>
      <OptAppBar
        profile={userProfile}
        hideBreadcrumb={true}
        content={args.theme ? contentButtonSoft : contentButtonStandard}
        actions={args.theme ? actionsButtonSoft : actionsButtonStandard}
        onDrawerOpen={() => {}}
        onLogout={() => {}}
        onManageProfile={() => {}}
      />
    </OptLayoutProvider>
  );
};

export const OptAppBarExample = Template.bind({});
OptAppBarExample.args = {
  theme: true,
};

OptAppBarExample.storyName = "Opt App Bar";
