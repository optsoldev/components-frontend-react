import {
  mdiAccountSupervisorCircle,
  mdiBellOutline,
  mdiCogs,
  mdiFileDocument,
  mdiFolderTable,
  mdiHome,
} from "@mdi/js";
import {
  OptActionButton,
  OptDivider,
  OptLayoutProvider,
  OptSidebar,
  OptTheme,
} from "@optsol/react";
import { ComponentMeta, Story } from "@storybook/react";
import React from "react";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptSidebar",
  component: OptSidebar,
} as ComponentMeta<typeof OptSidebar>;

const Template: Story<
  typeof OptSidebar & {
    hideLinkDescription: boolean;
    footerActions: boolean;
  }
> = (args) => {
  const theme: OptTheme = {
    light: {
      style: "soft",
      primary: ColorPalette.green2,
      primaryContrast: ColorPalette.white,
      secondary: ColorPalette.green3,
      secondaryContrast: ColorPalette.white,
    },
  };

  const sectionsArray = [
    {
      title: "Main",
      items: [
        {
          title: "Home",
          path: "/",
          icon: mdiHome,
          activeShouldBeExact: true,
        },
        {
          title: "Account",
          path: "/account",
          icon: mdiAccountSupervisorCircle,
        },
        {
          title: "Documents",
          path: "/documents",
          icon: mdiFileDocument,
        },
        {
          title: "Folder",
          path: "/folder",
          icon: mdiFolderTable,
        },
      ],
    },
  ];

  const footerActionsFragment = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <OptDivider marginy={6} color={ColorPalette.gray8} />
      <div style={{ marginTop: "13%" }} />
      <OptActionButton startIcon={{ path: mdiBellOutline }} />
      <OptActionButton startIcon={{ path: mdiCogs }} />
    </div>
  );

  return (
    <OptLayoutProvider theme={theme} noRouter>
      <OptSidebar
        sections={sectionsArray}
        hideLinkDescription={args.hideLinkDescription}
        footerActions={args.footerActions && footerActionsFragment}
      />
    </OptLayoutProvider>
  );
};

export const OptSidebarExample = Template.bind({});

OptSidebarExample.args = {
  footerActions: true,
  hideLinkDescription: true,
};

OptSidebarExample.storyName = "Opt Sidebar";
