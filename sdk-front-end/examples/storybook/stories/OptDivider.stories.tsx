import { OptDivider, OptDividerProps } from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptDivider",
  component: OptDivider,
} as Meta;

const Template: Story<OptDividerProps> = (args) => <OptDivider {...args} />;

export const DefaultOptDivider = Template.bind({});

DefaultOptDivider.args = {
  marginy: 50,
  color: ColorPalette.primary,
};

DefaultOptDivider.storyName = "Opt Divider";

DefaultOptDivider.argTypes = {
  ref: {
    table: { disable: true },
  },
  absolute: {
    table: { disable: true },
  },
  light: {
    table: { disable: true },
  },
  flexItem: {
    table: { disable: true },
  },
  orientation: {
    table: { disable: true },
  },
  variant: {
    table: { disable: true },
  },
  theme: {
    table: { disable: true },
  },
  as: {
    table: { disable: true },
  },
  forwardedAs: {
    table: { disable: true },
  },
};
