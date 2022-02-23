import { TimelineOppositeContent } from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { OptLoading } from "..";
import * as S from "./styles";

interface OptTimelineCampo<TValor> {
  nome: string;
  valor: TValor;
  tipo?: "cpf";
}

export interface OptTimelineVersao<TValor = string> {
  posicao: number;
  acao: string;
  descricao?: string | null;
  dataRealizada: string;
  usuarioNome: string;
  campos?: OptTimelineCampo<TValor>[];
}

export interface OptTimelineProps<TValor = string> {
  maxWidth?: number;
  data:
    | OptTimelineVersao<TValor>[]
    | (() => Promise<OptTimelineVersao<TValor>[]>);
  dotColor?:
    | "primary"
    | "secondary"
    | "inherit"
    | "grey"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  valuesTableOptions?: {
    nameHeader?: string;
    valueHeader?: string;
    valueRender?: (data: TValor) => JSX.Element;
  };
}

export const OptTimeline = <TValor extends unknown = string>({
  maxWidth,
  data,
  dotColor,
  // ***** valuesTableOptions
  valuesTableOptions: {
    nameHeader = "Nome",
    valueHeader = "Valor",
    valueRender = undefined,
  } = {
    nameHeader: "Nome",
    valueHeader: "Valor",
    valueRender: undefined,
  },
}: // ***** valuesTableOptions
OptTimelineProps<TValor>) => {
  const isDataFunction = !Array.isArray(data);
  const hasValueRender = !!valueRender;

  const [loading, setLoading] = useState(isDataFunction);
  const [versoes, setVersoes] = useState<OptTimelineVersao<TValor>[]>(
    !isDataFunction ? data : []
  );

  const hasMaxWidth = maxWidth !== null && maxWidth !== undefined;

  async function loadVersoes() {
    if (isDataFunction) {
      setLoading(true);
      const novasVersoes = await (data as () => Promise<OptTimelineVersao<TValor>[]>)();
      setVersoes(novasVersoes);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadVersoes();
  }, []);

  return (
    <S.Secao style={{ maxWidth: hasMaxWidth ? `${maxWidth}px` : "100%" }}>
      {loading && <OptLoading size={50} />}

      {!loading && (
        <Timeline>
          {versoes &&
            versoes.length > 0 &&
            versoes.map((versao) => (
              <TimelineItem key={versao.posicao} sx={{ paddingY: 2 }}>
                <TimelineOppositeContent
                  style={{ flex: 0.1, minWidth: 150, fontSize: 12 }}
                >
                  {versao.dataRealizada}
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot color={dotColor}>
                    <Avatar sx={{ bgcolor: "transparent" }}>
                      {versao.posicao}
                    </Avatar>
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle2" gutterBottom>
                    {versao.usuarioNome}
                  </Typography>

                  <Typography variant="h6" gutterBottom fontSize={16}>
                    <b>{versao.acao}</b>
                  </Typography>

                  {versao.descricao && (
                    <Typography variant="body2" gutterBottom>
                      {versao.descricao}
                    </Typography>
                  )}

                  {versao.campos && versao.campos.length > 0 && (
                    <S.TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell component="th" align="left">
                              {nameHeader}
                            </TableCell>
                            <TableCell component="th" align="left">
                              {valueHeader}
                            </TableCell>
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {versao.campos.map((campo, index) => (
                            <TableRow key={index}>
                              <TableCell align="left" scope="row">
                                {campo.nome}
                              </TableCell>
                              <TableCell align="left">
                                {hasValueRender && valueRender(campo.valor)}
                                {!hasValueRender && campo.valor}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </S.TableContainer>
                  )}
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      )}
    </S.Secao>
  );
};
