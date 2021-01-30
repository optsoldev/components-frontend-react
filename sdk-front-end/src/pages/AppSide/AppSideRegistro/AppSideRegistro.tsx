import React from 'react';
import { useParams } from 'react-router-dom';
import { OptSideLayoutContent } from '../../../lib/components/OptSideLayout';

export const AppSideRegistro = () => {
  const param = useParams<{ id: string }>();

  return (
    <OptSideLayoutContent>
      <h3>Este é o registro {param.id}</h3>
    </OptSideLayoutContent>
  );
};
