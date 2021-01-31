import { CircularProgress } from '@material-ui/core';
import React from 'react';

export interface OptLoadingProps {
  size?: number;
  color?: 'primary' | 'secondary' | 'inherit';
}

export const OptLoading = ({ size = 100, color = 'primary' }: OptLoadingProps) => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: size }}>
      <CircularProgress size={size} color={color} />
    </div>
  );
};
