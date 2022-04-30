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

function carregar(): Promise<OptTimelineAction[]> {
  const data: OptTimelineAction[] = [
    {
      position: 5,
      action: "Publicar pacote",
      description: "Alterações no pacote publicadas com sucesso!",
      createdDate: "18/02/2022 11:01",
      dateTimeAction: "18/02/2022 11:01",
      userName: "Felipe Carvalho",
      fields: [
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
      position: 4,
      action: "Implementar",
      description: "Iniciar implementação de componente de timeline",
      createdDate: "17/02/2022 15:00",
      dateTimeAction: "17/02/2022 15:00",
      userName: "Felipe Carvalho",
      fields: [],
    },
    {
      position: 3,
      action: "Definir requisitos",
      description: null,
      createdDate: "19/02/2022 14:30",
      dateTimeAction: "19/02/2022 14:30",
      userName: "Rômulo Louzada",
      fields: [
        {
          name: "Requisito",
          value: "Campos",
        },
        {
          name: "Requisito",
          value: "valuees",
        },
        {
          name: "Requisito",
          value: "Design",
        },
      ],
    },
    {
      position: 2,
      action: "Solicitar desenvolvimento",
      description: null,
      createdDate: "19/02/2022 14:01",
      dateTimeAction: "19/02/2022 14:01",
      userName: "Weslley Carneiro",
      fields: [
        {
          name: "Desenvolvedor",
          value: "Felipe",
        },
      ],
    },
    {
      position: 1,
      action: "Conceber ideia",
      description:
        "Necessidade de reutilizar e padronizar exibição de logs de sistemas",
        createdDate: "19/02/2022 14:00",
      dateTimeAction: "19/02/2022 14:00",
      userName: "Rômulo Louzada & Weslley Carneiro",
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export const OptTimelineRemoteData: Story<OptTimelineProps> = (args) => (
  <OptTimeline {...args}></OptTimeline>
);

OptTimelineRemoteData.args = {
  maxWidth: 800,
  data: carregar,
  dotColor: "primary",
};

OptTimelineRemoteData.argTypes = {
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

OptTimelineRemoteData.storyName = "Remote data";
