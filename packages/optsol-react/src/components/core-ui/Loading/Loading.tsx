import { CircularProgress } from '@mui/material';

export interface LoadingProps {
  size?: number;
  color?: 'primary' | 'secondary' | 'inherit';
}

export function Loading({
  size = 100,
  color = 'primary',
}: Readonly<LoadingProps>) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: size,
        flex: 1,
      }}
    >
      <CircularProgress size={size} color={color} />
    </div>
  );
}
