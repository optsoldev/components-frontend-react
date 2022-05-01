import {
  OptTimeline,
  OptTimelineAction,
  OptTimelineProps,
} from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ColorPalette } from "../../shared/colors";

export default {
  title: "OptTimeline",
  component: OptTimeline,
} as Meta;

const data: OptTimelineAction[] = [
  {
    order: 5,
    action: "Publicar pacote",
    description: "Alterações no pacote publicadas com sucesso!",
    createdDate: "18/02/2022 11:01",
    dateTimeAction: "18/02/2022 11:01",
    userName: "Felipe Carvalho",
    payload: [
      {
        name: "Recurso adicionado",
        value: "OptTimeline",
      },
      {
        name: "Tempo de implementação",
        value: "4h",
      },
    ],
  },
  {
    order: 4,
    action: "Implementar",
    description: "Iniciar implementação de componente de timeline",
    createdDate: "17/02/2022 15:00",
    dateTimeAction: "17/02/2022 15:00",
    userName: "Felipe Carvalho",
    payload: [],
  },
  {
    order: 3,
    action: "Definir requisitos",
    description: null,
    createdDate: "19/02/2022 14:30",
    dateTimeAction: "19/02/2022 14:30",
    userName: "Rômulo Louzada",
    payload: [
      {
        name: "Requisito",
        value: "Campos",
      },
      {
        name: "Requisito",
        value: "Valores",
      },
      {
        name: "Requisito",
        value: "Design",
      },
    ],
  },
  {
    order: 2,
    action: "Solicitar desenvolvimento",
    description: null,
    createdDate: "19/02/2022 14:01",
    dateTimeAction: "19/02/2022 14:01",
    userName: "Weslley Carneiro",
    payload: [
      {
        name: "Desenvolvedor",
        value: "Felipe",
      },
    ],
  },
  {
    order: 1,
    action: "Conceber ideia",
    description:
      "Necessidade de reutilizar e padronizar exibição de logs de sistemas",
    createdDate: "19/02/2022 14:00",
    dateTimeAction: "19/02/2022 14:00",
    userName: "Rômulo Louzada & Weslley Carneiro",
  },
];

export const OptTimelineLocalData: Story<OptTimelineProps> = (args) => (
  <OptTimeline {...args}></OptTimeline>
);

OptTimelineLocalData.args = {
  maxWidth: 800,
  data: data,
  dotColor: "primary",
};

OptTimelineLocalData.argTypes = {
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

OptTimelineLocalData.storyName = "Local data";
