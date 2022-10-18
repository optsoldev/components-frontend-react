import { mdiFile, mdiImage } from '@mdi/js';
import Icon from '@mdi/react';
import IconButton from '@mui/material/IconButton';
import * as S from './styles';

export interface OptTimelineField {
  name: string;
  value: string;
  type?: 'text' | 'image' | 'file' | 'link';
}

interface Props {
  field: OptTimelineField;
  onClick?: (data: OptTimelineField) => void;
}

export function OptTimelineTableValue({ field, onClick }: Props) {
  if (!field.type || field.type === 'text') return <>{field.value}</>;

  if (field.type === 'link')
    return (
      <S.Link href={field.value} target="_blank">
        {field.value}
      </S.Link>
    );

  if (field.type === 'file')
    return (
      <IconButton onClick={() => !!onClick && onClick(field)} size="large">
        <Icon size={1.2} path={mdiFile} />
      </IconButton>
    );

  if (field.type === 'image')
    return (
      <IconButton onClick={() => !!onClick && onClick(field)} size="large">
        <Icon size={1.2} path={mdiImage} />
      </IconButton>
    );

  return <>{field.value}</>;
}
