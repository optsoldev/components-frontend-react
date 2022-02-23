import {
  OptDialog,
  OptDialogActions,
  OptTimeline,
  OptTimelineProps,
  OptTimelineVersao,
} from "@optsol/react";
import { Box, Button, IconButton } from "@mui/material";
import { Meta, Story } from "@storybook/react/types-6-0";
import Icon from "@mdi/react";
import { mdiImage } from "@mdi/js";
import { useState } from "react";

export default {
  title: "OptTimeline",
  component: OptTimeline,
} as Meta;

interface Imagem {
  id: string;
}

const data: OptTimelineVersao<Imagem>[] = [
  {
    posicao: 5,
    acao: "Exemplificar valor complexo",
    descricao: "Exibir exemplo de valor complexo",
    dataRealizada: "23/02/2022 00:40",
    usuarioNome: "Felipe Carvalho",
    campos: [
      {
        nome: "Valor string",
        valor: { id: "123" },
      },
      {
        nome: "Pessoa",
        valor: { id: "456" },
      },
    ],
  },
];

export const OptTimelineValueRenderImage: Story<OptTimelineProps<Imagem>> = (
  args
) => {
  const [imagemExibida, setImagemExibida] = useState<string>();

  return (
    <>
      {!!imagemExibida && (
        <OptDialog title="Imagem" open>
          <Box>
            Id: {imagemExibida}
            <br />
            <img src={`https://picsum.photos/id/${imagemExibida}/600/300`} />
          </Box>

          <OptDialogActions>
            <Button onClick={() => setImagemExibida(undefined)}>Fechar</Button>
          </OptDialogActions>
        </OptDialog>
      )}

      <OptTimeline
        {...args}
        valuesTableOptions={{
          valueRender: (data: Imagem) => {
            return (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="auto"
                style={{ background: "#eee" }}
              >
                <IconButton
                  onClick={() => {
                    setImagemExibida(data.id);
                  }}
                  size="large"
                >
                  <Icon size={1} path={mdiImage} />
                </IconButton>
              </Box>
            );
          },
        }}
      />
    </>
  );
};

OptTimelineValueRenderImage.args = {
  maxWidth: 800,
  data: data,
  dotColor: "primary",
};

OptTimelineValueRenderImage.argTypes = {
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

OptTimelineValueRenderImage.storyName = "Custom table value render image";
