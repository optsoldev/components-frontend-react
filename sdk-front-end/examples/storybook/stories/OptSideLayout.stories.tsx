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
  OptMenuSection,
  OptSideLayout,
  OptTheme,
  OptUserProfile,
} from "@optsol/react";
import { OptMainSidebarFooterAction } from "@optsol/react/lib/esm/components/OptSideAppbar/OptSideAppbarFooterActions/OptSideAppbarFooterActions";
import { ComponentMeta, Story } from "@storybook/react";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptSideLayout",
  component: OptSideLayout,
} as ComponentMeta<typeof OptSideLayout>;

const Template: Story<
  typeof OptSideLayout & {
    hasProfile: boolean;
    appBarConfigActions: boolean;
    appBarConfigHideLinkDescription: boolean;
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

  let userProfile: OptUserProfile = undefined;

  if (args.hasProfile) {
    userProfile = {
      name: "Luciano Rocha",
      email: "rochinha@email.com.br",
      avatarSrc: "",
    };
  }

  const sectionsArray: OptMenuSection[] = [
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

  let actionsArrayAppBarConfig: OptMainSidebarFooterAction[] = [];

  if (args.appBarConfigActions) {
    actionsArrayAppBarConfig = [
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

  const AppBarConfigExample = {
    actions: actionsArrayAppBarConfig,
    hideLinkDescription: args.appBarConfigHideLinkDescription,
  };

  return (
    <OptLayoutProvider theme={theme}>
      <OptSideLayout
        sections={sectionsArray}
        //routes={}
        profile={userProfile}
        onManageProfile={() => {}}
        onLogout={() => {}}
        appBarConfig={AppBarConfigExample}
        version="1.0.0"
      />
    </OptLayoutProvider>
  );
};

export const OptSideLayoutExample = Template.bind({});

OptSideLayoutExample.args = {
  appBarConfigActions: true,
  appBarConfigHideLinkDescription: true,
  hasProfile: true,
};

OptSideLayoutExample.storyName = "Opt Side Layout";
