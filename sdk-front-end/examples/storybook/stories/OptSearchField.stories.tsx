import { OptSearchField } from "@optsol/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

export default {
  title: "OptSearchField",
  component: OptSearchField,
} as ComponentMeta<typeof OptSearchField>;

const Template: ComponentStory<
  typeof OptSearchField & {
    placeholder: string;
    noBorder: boolean;
    paddingX: number;
    width: number;
  }
> = (args) => {
  return <OptSearchField {...args} />;
};

export const OptSearchFieldExample = Template.bind({});

OptSearchFieldExample.args = {
  placeholder: "Pesquisar",
  noBorder: false,
  paddingX: 0,
  width: 0,
};

OptSearchFieldExample.storyName = "Opt Search Field";
