import {
  OptTimeline,
  OptTimelineAction,
  OptTimelineProps,
} from "@optsol/react";
import { OptTimelineField } from "@optsol/react/lib/esm/components/OptTimeline/OptTimelineTableValue";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

export default {
  title: "OptTimeline",
  component: OptTimeline,
} as Meta;

interface ExtraProps {
  onValueClick?: (data: OptTimelineField) => void;
}

const data: OptTimelineAction[] = [
  {
    payload:
      '[{"name":"Anexo","value":"29c0e322-d7f0-40bf-a5b9-5c4648b0ecc5.pdf","type":"file"}]',
    action: "Anexo Adicionado",
    description: "Um novo anexo do tipo CPF foi adicionado ao teste.",
    userName: "Rômulo Louzada",
    userId: "edca210b-63a0-4d36-95ad-ed4728608a5f",
    order: 1,
    dateTimeAction: "2022-04-29T14:38:16.048Z",
    createdDate: "2022-04-29T14:38:55.849Z",
  },
  {
    payload: "[]",
    action: "Teste Criado",
    description: "Teste importado com sucesso.",
    userName: "Rômulo Louzada",
    userId: "edca210b-63a0-4d36-95ad-ed4728608a5f",
    order: 2,
    dateTimeAction: "2022-04-29T14:35:33.724Z",
    createdDate: "2022-04-29T14:37:18.63Z",
  },
  {
    payload: '[{"name":"Teste","value":"Contrato teste","type":"text"}]',
    action: "Teste Adicionada",
    description: "Um novo teste foi adicionado de forma manual.",
    userName: "Rômulo Louzada",
    userId: "edca210b-63a0-4d36-95ad-ed4728608a5f",
    order: 3,
    dateTimeAction: "2022-04-29T14:37:01.358Z",
    createdDate: "2022-04-29T14:37:15.787Z",
  },
];

export const OptTimelineStringPayload: Story<OptTimelineProps & ExtraProps> = ({
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

OptTimelineStringPayload.args = {
  maxWidth: 800,
  data: data,
  color: undefined,
};

OptTimelineStringPayload.argTypes = {
  color: {
    type: "string",
  },
  onValueClick: {
    action: (data) => "onValueClick fired " + data,
    table: { disable: true },
  },
};

OptTimelineStringPayload.storyName = "String Payload";
