import React from 'react';
import { useParams } from 'react-router-dom';
import { OptSidebarFilterContainer } from '../../../lib/components/OptSideLayout';

export const AppSideRegistro = () => {
  const param = useParams<{ id: string }>();

  return (
    <OptSidebarFilterContainer>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
      <h3>Este é o registro {param.id}</h3>
    </OptSidebarFilterContainer>
  );
};
