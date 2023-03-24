import {
  OptLayoutProvider,
  OptTimeline,
  OptTimelineAction,
  OptTimelineProps,
} from "@optsol/react";
import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ColorPalette } from "../../shared/colors";
import { theme } from "../../shared/theme";

export default {
  title: "OptTimeline",
  component: OptTimeline,
} as Meta;

function carregar(): Promise<OptTimelineAction[]> {
  const data: OptTimelineAction[] = [
    {
      order: 6,
      action: "Revisar",
      description: "Iniciar revisão do componente de timeline",
      createdDate: "19/02/2022 15:00",
      dateTimeAction: "19/02/2022 15:00",
      userName: "Vladimir Christ",
      payload: [],
    },
    {
      order: 5,
      action: "Publicar pacote",
      description: "Alterações no pacote publicadas com sucesso!",
      createdDate: "18/02/2022 11:01",
      dateTimeAction: "18/02/2022 11:01",
      userName: "Luciano Rocha",
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
      userName: "Luciano Rocha",
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
      userName: "Vladimir Christ",
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
      userName: "Rômulo Louzada",
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export const OptTimelineRemoteData: Story<OptTimelineProps> = (args) => (
  <OptLayoutProvider theme={theme} noRouter>
    <OptTimeline {...args}></OptTimeline>
  </OptLayoutProvider>
);

OptTimelineRemoteData.args = {
  maxWidth: 800,
  data: carregar,
  color: undefined,
};

OptTimelineRemoteData.argTypes = {
  color: {
    type: "string",
  },
};

OptTimelineRemoteData.storyName = "Remote data";
