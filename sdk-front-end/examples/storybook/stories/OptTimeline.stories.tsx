import { OptTimeline, OptTimelineProps } from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ColorPalette } from "../shared/colors";

export default {
  title: "OptTimeline",
  component: OptTimeline,
} as Meta;

export const OptTimelineExample: Story<OptTimelineProps> = (args) => (
  <OptTimeline {...args}></OptTimeline>
);

OptTimelineExample.args = {
};

OptTimelineExample.storyName = "Opt Avatar";
