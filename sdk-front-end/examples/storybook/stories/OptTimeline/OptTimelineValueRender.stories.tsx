import {
  OptTimeline,
  OptTimelineProps,
  OptTimelineAction,
} from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "OptTimeline",
  component: OptTimeline,
} as Meta;

const data: OptTimelineAction[] = [
  {
    order: 1,
    action: "Exemplificar value complexo",
    description: "Exibir exemplo de value complexo",
    createdDate: "23/02/2022 00:40",
    dateTimeAction: "23/02/2022 00:40",
    userName: "Felipe Carvalho",
    payload: [
      {
        name: "Teste",
        value: "Este é um teste",
        type: "text",
      },
      {
        name: "Pessoa",
        value: "Felipe",
      },
    ],
  },
];

export const OptTimelineValueRender: Story<OptTimelineProps> = (args) => (
  <OptTimeline {...args}></OptTimeline>
);

OptTimelineValueRender.args = {
  maxWidth: 800,
  data: data,
  dotColor: "primary",
  valuesTableOptions: {
    valueRender: (field) => {
      return <h4>Value: {field.value}</h4>;
    },
  },
};

OptTimelineValueRender.argTypes = {
  dotColor: {
    control: "select",
    options: [
      "primary",
      "secondary",
      "inherit",
      "grey",
      "success",
      "error",
      "info",
      "warning",
      undefined,
    ],
  },
};

OptTimelineValueRender.storyName =
  "Custom table value render with complex typing";
