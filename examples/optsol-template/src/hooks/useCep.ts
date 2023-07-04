import { Endereco } from '../models/Endereco.model';

type ViaCepEndereco = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

type ViaCepError = { erro: boolean };

export const useCEP = () => {
  const parseResponse = (response: ViaCepEndereco | ViaCepError): Endereco => {
    if ('erro' in response) {
      throw new Error('CEP inválido');
    }

    return {
      cep: response.cep,
      rua: response.logradouro,
      bairro: response.bairro,
      cidade: response.localidade,
      estado: response.uf,
      numero: ''
    };
  };

  const buscar = async (cep?: string): Promise<Endereco | undefined> => {
    if (!cep || cep.replace(/\D/g, '').length !== 8) return;

    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then(parseResponse)
      .catch((error: Error) => {
        throw error;
      });
  };

  return { buscar };
};
