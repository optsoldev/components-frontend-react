import {
  mdiAccountBox,
  mdiBriefcasePlus,
  mdiContentSave,
  mdiDatabaseCog,
  mdiHome,
} from "@mdi/js";
import {
  OptDrawerMenu,
  OptLayoutProvider,
  OptMenuSection,
  OptTheme,
} from "@optsol/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptDrawerMenu",
  component: OptDrawerMenu,
} as ComponentMeta<typeof OptDrawerMenu>;

const Template: ComponentStory<typeof OptDrawerMenu> = (args) => {
  const theme: OptTheme = {
    light: {
      style: "soft",
      primary: ColorPalette.green2,
      primaryContrast: ColorPalette.white,
      secondary: ColorPalette.green3,
      secondaryContrast: ColorPalette.white,
    },
  };

  const sectionsDefault: OptMenuSection[] = [
    {
      title: "Main",
      items: [
        {
          title: "Home",
          path: "/",
          icon: mdiHome,
          // iconColor: "",
          activeShouldBeExact: true,
        },
        {
          title: "Brief",
          path: "/brief",
          icon: mdiBriefcasePlus,
          // iconColor: "",
        },
        {
          title: "Content",
          path: "/content",
          icon: mdiContentSave,
          iconColor: ColorPalette.black,
        },
        {
          title: "Data",
          path: "/data",
          icon: mdiDatabaseCog,
          // iconColor: "",
        },
        {
          title: "Profile",
          path: "/profile",
          icon: mdiAccountBox,
          // iconColor: "",
        },
      ],
    },
  ];

  return (
    <OptLayoutProvider theme={theme} noRouter>
      <OptDrawerMenu
        sections={sectionsDefault}
        onToggleDockDrawer={() => {}}
        version={"1.0.0"}
      />
    </OptLayoutProvider>
  );
};

export const OptDrawerMenuExample = Template.bind({});

OptDrawerMenuExample.args = {};

OptDrawerMenuExample.storyName = "Opt Drawer";
