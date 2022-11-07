import { TimelineOppositeContent } from '@mui/lab';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot, { TimelineDotProps } from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
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

const dotColorOptions = [
  'primary',
  'secondary',
  'inherit',
  'grey',
  'success',
  'error',
  'info',
  'warning',
];

type DotColor = Pick<TimelineDotProps, 'color'>;

export type OptTimelineProps = DotColor & {
  maxWidth?: number;
  data: OptTimelineAction[] | (() => Promise<OptTimelineAction[]>);
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

  const userNameColorMapRef = useRef<Map<string, DotColor['color']>>(new Map());

  const hasMaxWidth = maxWidth !== null && maxWidth !== undefined;

  async function loadVersoes() {
    if (isDataFunction) {
      setLoading(true);
      const novasVersoes = await (data as () => Promise<OptTimelineAction[]>)();
      setVersoes(novasVersoes);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadVersoes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderColor(userName: string): DotColor['color'] {
    const hasColor = userNameColorMapRef.current.get(userName);

    if (hasColor) {
      return hasColor;
    }

    let userColor = dotColorOptions[
      Math.floor(Math.random() * dotColorOptions.length)
    ] as DotColor['color'];

    const usedColor = [...userNameColorMapRef.current].find(
      ([key, value]) => userName === key
    );

    if (usedColor && usedColor[1] === userColor) {
      let i = 0;
      while (usedColor[1] === userColor || i < 3) {
        i += 1;
        userColor = dotColorOptions[
          Math.floor(Math.random() * dotColorOptions.length)
        ] as DotColor['color'];

        userNameColorMapRef.current.set(userName, userColor);
      }
    } else {
      userNameColorMapRef.current.set(userName, userColor);
    }

    return userColor;
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
                    <TimelineDot color={color ?? renderColor(versao.userName)}>
                      <Avatar sx={{ bgcolor: 'transparent' }}>
                        {versao.order}
                      </Avatar>
                    </TimelineDot>
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
