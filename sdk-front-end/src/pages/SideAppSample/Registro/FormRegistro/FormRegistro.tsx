import React from 'react';
import { useParams } from 'react-router-dom';
import { OptActionToolbar } from '../../../../lib/components/OptActionToobar';
import { OptBreadcrumb } from '../../../../lib/components/OptBreadcrumb';
import { OptSideLayoutContent } from '../../../../lib/components/OptSideLayout';

export const FormRegistro = () => {
  const param = useParams<{ id: string }>();

  return (
    <OptSideLayoutContent>
      <OptActionToolbar noBorder title={<OptBreadcrumb />} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum sapien in sapien tempor, pretium sodales
        mauris fermentum. Cras ultrices sem vitae nisl ullamcorper blandit. Sed ullamcorper sodales fringilla.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra
        turpis ut enim facilisis placerat. Ut rutrum quis ligula vitae fringilla. Curabitur et nibh ex. Mauris varius et
        orci vitae ornare. Duis pharetra efficitur neque non congue. Sed dolor odio, ultricies finibus nibh vitae,
        tincidunt accumsan metus. Donec accumsan nisl ac turpis interdum, sit amet lobortis risus lobortis. Proin porta
        pharetra sapien eget faucibus. Etiam congue, erat vitae faucibus venenatis, ex neque ullamcorper tortor, vitae
        sagittis quam quam tempor risus.
      </p>
    </OptSideLayoutContent>
  );
};
