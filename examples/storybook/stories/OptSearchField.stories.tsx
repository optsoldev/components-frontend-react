import {
  OptLayoutProvider,
  OptSearchField,
  OptSearchFieldProps,
  OptTheme,
} from "@optsol/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { theme } from "../shared/theme";

export default {
  title: "OptSearchField",
  component: OptSearchField,
} as ComponentMeta<typeof OptSearchField>;

interface OptSearchFieldArgs extends OptSearchFieldProps {}

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
