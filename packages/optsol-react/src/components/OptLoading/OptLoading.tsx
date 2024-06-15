import { CircularProgress } from '@mui/material';

export interface OptLoadingProps {
  size?: number;
  color?: 'primary' | 'secondary' | 'inherit';
}

/**
 * @deprecated This will be removed soon
 */
export function OptLoading({ size = 100, color = 'primary' }: OptLoadingProps) {
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
