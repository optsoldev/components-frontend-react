import {
  OptGrid,
  OptGridColumn,
  OptGridOptions,
  OptSideLayoutContent,
} from '@optsol/react';

const Registros = () => {
  const options: OptGridOptions = {
    search: true,
    pageSize: 10,
  };

  const columns: OptGridColumn<any>[] = [
    {
      title: 'Id',
      field: 'usuarioId',
      hidden: true,
    },
    {
      title: 'Nome',
      field: 'nome',
      align: 'start',
    },
    {
      title: 'CPF',
      field: 'cpf',
      align: 'start',
    },
    {
      title: 'Telefone',
      field: 'telefone',
      align: 'start',
    },
  ];

  return (
    <OptSideLayoutContent>
      <OptGrid data={[]} columns={columns} options={options} />
    </OptSideLayoutContent>
  );
};

export default Registros;
