import {
  OptLayoutProvider,
  OptSearchField,
  OptSearchFieldProps,
  OptTheme,
} from "@optsol/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
  title: "OptSearchField",
  component: OptSearchField,
} as ComponentMeta<typeof OptSearchField>;

interface OptSearchFieldArgs extends OptSearchFieldProps {}

export const theme: OptTheme = {
  light: {
    style: "soft",
    primary: "#f00",
    primaryContrast: "#f5f5f5",
    secondary: "#A0C938",
    secondaryContrast: "#f5f5f5",
  },
};

const Template: ComponentStory<typeof OptSearchField> = (args) => {
  return (
    <OptLayoutProvider theme={theme} noRouter>
      <OptSearchField {...args} />
    </OptLayoutProvider>
  );
};

export const OptSearchFieldExample = Template.bind({});

OptSearchFieldExample.args = {
  placeholder: "Pesquisar",
  noBorder: false,
  paddingX: 0,
  width: 0,
};

OptSearchFieldExample.argTypes = {
  onSearch: {
    action: "onSearch fired",
    table: { disable: true },
  },
};
OptSearchFieldExample.storyName = "Opt Search Field";
