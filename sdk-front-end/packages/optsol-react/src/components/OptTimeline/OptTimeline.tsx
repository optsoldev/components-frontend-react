import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import * as S from "./styles";
import { TimelineOppositeContent } from "@mui/lab";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const response = {
  success: true,
  data: {
    id: "95a5d088-30f4-442d-a513-a5471c8ece96",
    dataCriacao: "2022-02-15T11:25:39.2706065",
    identificadorOrigem1: "PCPEDIDO",
    identificadorOrigem2: "70219",
    identificadorOrigem3: "419526",
    aplicacaoId: "b90dd1db-bfc2-4726-84cc-6c6e77211a2c",
    versoes: [
      {
        posicao: 3,
        dataCriacao: "2022-02-15T12:00:32.7184686",
        acao: "Pedido particionado",
        descricao: "Pedido dividido 1 kg",
        dataRealizada: "2022-02-15T11:59:47.5051503",
        usuarioNome: "Lucas Alonso",
        usuarioId: "3feaec42-6551-4f3e-b498-8f42b6c31d03",
        campos: [
          {
            nome: "Peso anterior",
            valor: "2 kg",
          },
          {
            nome: "Peso atual",
            valor: "1 kg",
          },
        ],
      },
      {
        posicao: 2,
        dataCriacao: "2022-02-15T11:25:39.6242589",
        acao: "Pedido criado a partir do particionamento",
        descricao: null,
        dataRealizada: "2022-02-15T11:25:32.2318311",
        usuarioNome: "Jakson Laquini",
        usuarioId: "6630d893-8d3e-44d7-ba39-c12d9fcb6119",
        campos: [
          {
            nome: "Dia anterior",
            valor: "14/02/2022",
          },
          {
            nome: "Dia atual",
            valor: "15/02/2022",
          },
          {
            nome: "Peso",
            valor: "2 kg",
          },
        ],
      },
      {
        posicao: 1,
        dataCriacao: "2022-02-15T11:25:39.2706165",
        acao: "Pedido de carga programado",
        descricao: null,
        dataRealizada: "2022-02-15T11:25:31.9212131",
        usuarioNome: "Jakson Laquini",
        usuarioId: "6630d893-8d3e-44d7-ba39-c12d9fcb6119",
        campos: [
          {
            nome: "Dia anterior",
            valor: "14/02/2022",
          },
          {
            nome: "Dia atual",
            valor: "15/02/2022",
          },
        ],
      },
    ],
  },
  messages: null,
  statusCode: 200,
};

export interface OptTimelineProps {}

export const OptTimeline = ({}: OptTimelineProps) => {
  return (
    <S.Secao>
      <Timeline>
        {response.data.versoes.map((versao) => (
          <TimelineItem key={versao.posicao} sx={{ paddingY: 2 }}>
            <TimelineOppositeContent
              style={{ flex: 0.1, minWidth: 150, fontSize: "12px" }}
            >
              {versao.dataRealizada}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot>
                <Icon path={mdiAccount} size={1} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <b>{versao.usuarioNome}</b>
              <p>{versao.acao}</p>

              <TableContainer component={Paper} sx={{ marginY: 2 }}>
                <Table>
                  <TableBody>
                    {versao.campos.map((campo, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {campo.nome}
                        </TableCell>
                        <TableCell align="right">{campo.valor}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </S.Secao>
  );
};
