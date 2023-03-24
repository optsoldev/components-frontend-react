import {
  OptTimeline,
  OptTimelineAction,
  OptTimelineProps,
} from "@optsol/react";
import React from "react";
import { OptTimelineField } from "@optsol/react/lib/esm/components/OptTimeline/OptTimelineTableValue";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "OptTimeline",
  component: OptTimeline,
} as Meta;

interface ExtraProps {
  onValueClick?: (data: OptTimelineField) => void;
}

const data: OptTimelineAction[] = [
  {
    order: 1,
    action: "Testar evento de click",
    createdDate: "30/04/2022 20:08",
    dateTimeAction: "30/04/2022 20:08",
    userId: "123",
    userName: "Felipe Carvalho",
    payload: [
      { name: "Texto", value: "Exemplo de texto", type: "text" },
      { name: "Link", value: "http://www.google.com", type: "link" },
      { name: "Arquivo", value: "123.jpg", type: "file" },
      { name: "Imagem", value: "456.jpg", type: "image" },
    ],
  },
];

export const OptTimelineEvents: Story<OptTimelineProps & ExtraProps> = ({
  onValueClick,
  ...args
}) => (
  <OptTimeline
    {...args}
    valuesTableOptions={{
      onValueClick: onValueClick,
    }}
  ></OptTimeline>
);

OptTimelineEvents.args = {
  maxWidth: 800,
  data: data,
  color: undefined,
};

OptTimelineEvents.argTypes = {
  color: {
    type: "string",
  },
  onValueClick: {
    action: (data) => "onValueClick fired " + data,
    table: { disable: true },
  },
};

OptTimelineEvents.storyName = "Events";
