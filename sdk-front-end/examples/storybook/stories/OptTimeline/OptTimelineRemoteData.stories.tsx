import {
  OptTimeline,
  OptTimelineVersao,
  OptTimelineProps,
} from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ColorPalette } from "../../shared/colors";

export default {
  title: "OptTimeline",
  component: OptTimeline,
} as Meta;

function carregar(): Promise<OptTimelineVersao[]> {
  const data: OptTimelineVersao[] = [
    {
      posicao: 5,
      acao: "Publicar pacote",
      descricao: "Alterações no pacote publicadas com sucesso!",
      dataRealizada: "18/02/2022 11:01",
      usuarioNome: "Felipe Carvalho",
      campos: [
        {
          nome: "Recurso adicionado",
          valor: "OptTimeline",
        },
        {
          nome: "Tempo de implementação",
          valor: "4h",
        },
      ],
    },
    {
      posicao: 4,
      acao: "Implementar",
      descricao: "Iniciar implementação de componente de timeline",
      dataRealizada: "17/02/2022 15:00",
      usuarioNome: "Felipe Carvalho",
      campos: [],
    },
    {
      posicao: 3,
      acao: "Definir requisitos",
      descricao: null,
      dataRealizada: "19/02/2022 14:30",
      usuarioNome: "Rômulo Louzada",
      campos: [
        {
          nome: "Requisito",
          valor: "Campos",
        },
        {
          nome: "Requisito",
          valor: "Valores",
        },
        {
          nome: "Requisito",
          valor: "Design",
        },
      ],
    },
    {
      posicao: 2,
      acao: "Solicitar desenvolvimento",
      descricao: null,
      dataRealizada: "19/02/2022 14:01",
      usuarioNome: "Weslley Carneiro",
      campos: [
        {
          nome: "Desenvolvedor",
          valor: "Felipe",
        },
      ],
    },
    {
      posicao: 1,
      acao: "Conceber ideia",
      descricao:
        "Necessidade de reutilizar e padronizar exibição de logs de sistemas",
      dataRealizada: "19/02/2022 14:00",
      usuarioNome: "Rômulo Louzada & Weslley Carneiro",
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

OptTimelineRemoteData.storyName = "Opt Timeline Remote";
