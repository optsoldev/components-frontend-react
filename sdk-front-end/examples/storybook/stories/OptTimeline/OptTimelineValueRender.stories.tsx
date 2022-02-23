import {
  OptTimeline,
  OptTimelineProps,
  OptTimelineVersao,
} from "@optsol/react";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "OptTimeline",
  component: OptTimeline,
} as Meta;

interface Pessoa {
  id: string;
  nome: string;
}

type TableValue = Pessoa | string;

const data: OptTimelineVersao<TableValue>[] = [
  {
    posicao: 5,
    acao: "Exemplificar valor complexo",
    descricao: "Exibir exemplo de valor complexo",
    dataRealizada: "23/02/2022 00:40",
    usuarioNome: "Felipe Carvalho",
    campos: [
      {
        nome: "Valor string",
        valor: "Este é um valor string",
      },
      {
        nome: "Pessoa",
        valor: {
          id: "123",
          nome: "Felipe",
        },
      },
    ],
  },
];

export const OptTimelineValueRender: Story<OptTimelineProps<TableValue>> = (
  args
) => <OptTimeline {...args}></OptTimeline>;

OptTimelineValueRender.args = {
  maxWidth: 800,
  data: data,
  dotColor: "primary",
  valuesTableOptions: {
    valueRender: (data: TableValue) => {
      if (typeof data === "string") {
        return <>Valor: {data}</>;
      } else {
        return (
          <h4>
            [Id: {data.id} | Nome: {data.nome}]
          </h4>
        );
      }
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
