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

OptTimelineLocalData.storyName = "Opt Timeline Local";
