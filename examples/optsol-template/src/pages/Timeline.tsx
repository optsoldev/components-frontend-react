import { Timeline } from '@optsol/react';
import { TimelineAction } from '@optsol/react/lib/esm/components/Timeline/Timeline';

function carregar(): Promise<TimelineAction[]> {
  const data: TimelineAction[] = [
    {
      order: 6,
      action: 'Revisar',
      description: 'Iniciar revisão do componente de timeline',
      createdDate: '19/02/2022 15:00',
      dateTimeAction: '19/02/2022 15:00',
      userName: 'Vladimir Christ',
      payload: []
    },
    {
      order: 5,
      action: 'Publicar pacote',
      description: 'Alterações no pacote publicadas com sucesso!',
      createdDate: '18/02/2022 11:01',
      dateTimeAction: '18/02/2022 11:01',
      userName: 'Luciano Rocha',
      payload: [
        {
          name: 'Recurso adicionado',
          value: 'OptTimeline'
        },
        {
          name: 'Tempo de implementação',
          value: '4h'
        }
      ]
    },
    {
      order: 4,
      action: 'Implementar',
      description: 'Iniciar implementação de componente de timeline',
      createdDate: '17/02/2022 15:00',
      dateTimeAction: '17/02/2022 15:00',
      userName: 'Luciano Rocha',
      payload: []
    },
    {
      order: 3,
      action: 'Definir requisitos',
      description: null,
      createdDate: '19/02/2022 14:30',
      dateTimeAction: '19/02/2022 14:30',
      userName: 'Rômulo Louzada',
      payload: [
        {
          name: 'Requisito',
          value: 'Campos'
        },
        {
          name: 'Requisito',
          value: 'Valores'
        },
        {
          name: 'Requisito',
          value: 'Design'
        }
      ]
    },
    {
      order: 2,
      action: 'Solicitar desenvolvimento',
      description: null,
      createdDate: '19/02/2022 14:01',
      dateTimeAction: '19/02/2022 14:01',
      userName: 'Vladimir Christ',
      payload: [
        {
          name: 'Desenvolvedor',
          value: 'Felipe'
        }
      ]
    },
    {
      order: 1,
      action: 'Conceber ideia',
      description:
        'Necessidade de reutilizar e padronizar exibição de logs de sistemas',
      createdDate: '19/02/2022 14:00',
      dateTimeAction: '19/02/2022 14:00',
      userName: 'Rômulo Louzada'
    },
    {
      payload:
        '[{"name":"Anexo","value":"29c0e322-d7f0-40bf-a5b9-5c4648b0ecc5.pdf","type":"file"}]',
      action: 'Anexo Adicionado',
      description: 'Um novo anexo do tipo CPF foi adicionado ao teste.',
      userName: 'Rômulo Louzada',
      userId: 'edca210b-63a0-4d36-95ad-ed4728608a5f',
      order: 1,
      dateTimeAction: '2022-04-29T14:38:16.048Z',
      createdDate: '2022-04-29T14:38:55.849Z'
    },
    {
      payload: '[]',
      action: 'Teste Criado',
      description: 'Teste importado com sucesso.',
      userName: 'Rômulo Louzada',
      userId: 'edca210b-63a0-4d36-95ad-ed4728608a5f',
      order: 2,
      dateTimeAction: '2022-04-29T14:35:33.724Z',
      createdDate: '2022-04-29T14:37:18.63Z'
    },
    {
      payload: '[{"name":"Teste","value":"Contrato teste","type":"text"}]',
      action: 'Teste Adicionada',
      description: 'Um novo teste foi adicionado de forma manual.',
      userName: 'Rômulo Louzada',
      userId: 'edca210b-63a0-4d36-95ad-ed4728608a5f',
      order: 3,
      dateTimeAction: '2022-04-29T14:37:01.358Z',
      createdDate: '2022-04-29T14:37:15.787Z'
    },
    {
      order: 1,
      action: 'Testar evento de click',
      createdDate: '30/04/2022 20:08',
      dateTimeAction: '30/04/2022 20:08',
      userId: '123',
      userName: 'Felipe Carvalho',
      payload: [
        { name: 'Texto', value: 'Exemplo de texto', type: 'text' },
        { name: 'Link', value: 'http://www.google.com', type: 'link' },
        { name: 'Arquivo', value: '123.jpg', type: 'file' },
        { name: 'Imagem', value: '456.jpg', type: 'image' }
      ]
    }
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export const TimelinePage = () => {
  return <Timeline data={carregar} />;
};
