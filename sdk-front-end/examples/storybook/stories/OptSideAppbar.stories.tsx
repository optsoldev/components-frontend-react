import {
  mdiAccountSupervisorCircle,
  mdiBellOutline,
  mdiCogs,
  mdiFileDocument,
  mdiFolderTable,
  mdiHome,
} from "@mdi/js";
import {
  OptLayoutProvider,
  OptSideAppbar,
  OptTheme,
  OptUserProfile,
} from "@optsol/react";
import { OptMainSidebarFooterAction } from "@optsol/react/lib/esm/components/OptSideAppbar/OptSideAppbarFooterActions/OptSideAppbarFooterActions";
import { ComponentMeta, Story } from "@storybook/react";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptSideAppbar",
  component: OptSideAppbar,
} as ComponentMeta<typeof OptSideAppbar>;

const Template: Story<
  typeof OptSideAppbar & {
    profile: boolean;
    hideLinkDescription: boolean;
    hasFooterActions: boolean;
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

  const userProfile: OptUserProfile = {
    name: "Luciano Rocha",
    email: "rochinha@email.com.br",
    avatarSrc: "",
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

  let footerActions: OptMainSidebarFooterAction[] = [];

  if (args.hasFooterActions) {
    footerActions = [
      {
        title: "Alert",
        icon: mdiBellOutline,
        iconColor: ColorPalette.green3,
        onClick: () => {},
      },
      {
        title: "Config",
        icon: mdiCogs,
        iconColor: ColorPalette.green3,
        onClick: () => {},
      },
    ];
  }

  return (
    <OptLayoutProvider theme={theme}>
      <OptSideAppbar
        profile={args.profile && userProfile}
        sections={sectionsArray}
        onManageProfile={() => {}}
        onLogout={() => {}}
        hideLinkDescription={args.hideLinkDescription}
        footerActions={footerActions}
      />
    </OptLayoutProvider>
  );
};

export const OptSideAppbarExample = Template.bind({});

OptSideAppbarExample.args = {
  hasFooterActions: true,
  profile: true,
  hideLinkDescription: true,
};

OptSideAppbarExample.storyName = "Opt Side Appbar";
