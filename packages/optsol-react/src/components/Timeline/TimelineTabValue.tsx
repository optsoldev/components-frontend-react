import { AttachRegular, ImageRegular } from '@fluentui/react-icons';
import { IconButton, Typography } from '@mui/material';

export interface TimelineField {
  name: string;
  value: string;
  type?: 'text' | 'image' | 'file' | 'link';
}

interface Props {
  field: TimelineField;
  onClick?: (data: TimelineField) => void;
}

export function TimelineTableValue({ field, onClick }: Props) {
  if (!field.type || field.type === 'text') return <span>{field.value}</span>;

  if (field.type === 'link')
    return (
      <Typography component="a" href={field.value} target="_blank">
        {field.value}
      </Typography>
    );

  if (field.type === 'file')
    return (
      <IconButton onClick={() => !!onClick && onClick(field)} size="large">
        <AttachRegular />
      </IconButton>
    );

  if (field.type === 'image')
    return (
      <IconButton onClick={() => !!onClick && onClick(field)} size="large">
        <ImageRegular />
      </IconButton>
    );

  return <span>{field.value}</span>;
}
