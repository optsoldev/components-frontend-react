import {
  TimelineOppositeContent,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { randomRgbColor } from '../../shared/functions';
import { OptLoading } from '../OptLoading';

import {
  OptTimelineField,
  OptTimelineTableValue,
} from './OptTimelineTableValue';
import * as S from './styles';

export interface OptTimelineAction {
  order: number;
  action: string;
  description?: string | null;
  dateTimeAction: string;
  createdDate: string;
  userId?: string;
  userName: string;
  payload?: OptTimelineField[] | string;
}

export type OptTimelineProps = {
  maxWidth?: number;
  data: OptTimelineAction[] | (() => Promise<OptTimelineAction[]>);
  color?: string;
  valuesTableOptions?: {
    nameHeader?: string;
    valueHeader?: string;
    valueRender?: (data: OptTimelineField) => JSX.Element;
    onValueClick?: (data: OptTimelineField) => void;
  };
};

export function OptTimeline({
  maxWidth,
  data,
  color,
  // ***** valuesTableOptions
  valuesTableOptions: {
    nameHeader = 'Nome',
    valueHeader = 'Valor',
    valueRender = undefined,
    onValueClick = undefined,
  } = {
    nameHeader: 'Nome',
    valueHeader: 'Valor',
    valueRender: undefined,
    onValueClick: undefined,
  },
}: // ***** valuesTableOptions
OptTimelineProps) {
  const isDataFunction = !Array.isArray(data);
  const hasValueRenderFunction = !!valueRender;

  const [loading, setLoading] = useState(isDataFunction);
  const [versoes, setVersoes] = useState<OptTimelineAction[]>(
    !isDataFunction ? data : []
  );

  const userNameColorMapRef = useRef<Map<string, string>>(new Map());

  const hasMaxWidth = maxWidth !== null && maxWidth !== undefined;
  useEffect(() => {
    async function loadVersoes() {
      if (isDataFunction) {
        setLoading(true);
        const novasVersoes = await (
          data as () => Promise<OptTimelineAction[]>
        )();
        setVersoes(novasVersoes);
        setLoading(false);
      }
    }

    loadVersoes();
  }, [data, isDataFunction]);

  function renderColor(userName: string) {
    const hasColor = userNameColorMapRef.current.get(userName);

    if (hasColor) return hasColor;

    const userColor = randomRgbColor().hex();

    if (userColor) {
      userNameColorMapRef.current.set(userName, userColor);
      return userColor;
    }

    return 'primary';
  }

  return (
    <S.Secao style={{ maxWidth: hasMaxWidth ? `${maxWidth}px` : '100%' }}>
      {loading && <OptLoading size={50} />}

      {!loading && (
        <Timeline>
          {versoes &&
            versoes.length > 0 &&
            versoes.map((versao) => {
              let payload: OptTimelineField[] = [];

              if (versao.payload) {
                if (typeof versao.payload === 'string') {
                  payload = JSON.parse(versao.payload) as OptTimelineField[];
                } else {
                  payload = versao.payload;
                }
              }

              return (
                <TimelineItem key={versao.order} sx={{ paddingY: 2 }}>
                  <TimelineOppositeContent
                    style={{ flex: 0.1, minWidth: 150, fontSize: 12 }}
                  >
                    {versao.dateTimeAction}
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <Box
                      bgcolor={color ?? renderColor(versao.userName)}
                      width="fit-content"
                      height="fit-content"
                      borderRadius="50%"
                      my={1}
                    >
                      <TimelineDot color="inherit" sx={{ margin: 0 }}>
                        <Avatar sx={{ bgcolor: 'transparent' }}>
                          {versao.order}
                        </Avatar>
                      </TimelineDot>
                    </Box>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="subtitle2" gutterBottom>
                      {versao.userName}
                    </Typography>

                    <Typography variant="h6" gutterBottom fontSize={16}>
                      <b>{versao.action}</b>
                    </Typography>

                    {versao.description && (
                      <Typography variant="body2" gutterBottom>
                        {versao.description}
                      </Typography>
                    )}

                    {payload && payload.length > 0 && (
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
                            {payload.map((field, index) => (
                              <TableRow key={index}>
                                <TableCell align="left" scope="row">
                                  {field.name}
                                </TableCell>
                                <TableCell align="left">
                                  {hasValueRenderFunction && valueRender(field)}
                                  {!hasValueRenderFunction && (
                                    <OptTimelineTableValue
                                      field={field}
                                      onClick={onValueClick}
                                    />
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </S.TableContainer>
                    )}
                  </TimelineContent>
                </TimelineItem>
              );
            })}
        </Timeline>
      )}
    </S.Secao>
  );
}
