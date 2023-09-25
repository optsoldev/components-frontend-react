import * as Yup from 'yup';

export interface Endereco {
  cep?: string;
  rua?: string;
  numero?: number | '';
  bairro?: string;
  cidade: string;
  estado: string;
  complemento?: string | null;
}

export type EnderecoFormModel = Endereco;

export const ENDERECO_DEFAULT: Endereco = {
  cep: '',
  bairro: '',
  cidade: '',
  estado: '',
  rua: '',
  numero: '',
  complemento: ''
};

const MSG_REQUIRED = 'Campo obrigatório';
const MSG_INVALID = 'Apenas números';
const ONLY_POSITIVES = 'Somente valores positivos';

export const EnderecoPJFormModelSchema: Yup.ObjectSchema<Endereco> =
  Yup.object<Endereco>().shape({
    cep: Yup.string()
      .transform((cep) => cep.replace(/\D+/g, ''))
      .length(8, 'CEP inválido')
      .required(MSG_REQUIRED),
    rua: Yup.string().required(MSG_REQUIRED).typeError(MSG_REQUIRED),
    numero: Yup.mixed<number | ''>()
      .test('empty', MSG_REQUIRED, (val) => !!val)
      .test('num', MSG_INVALID, (val) => !val || !isNaN(val))
      .test('maior que 0', ONLY_POSITIVES, (val) => !val || val > 0)
      .required(MSG_REQUIRED),
    bairro: Yup.string().required(MSG_REQUIRED).typeError(MSG_REQUIRED),
    cidade: Yup.string().required(MSG_REQUIRED).typeError(MSG_REQUIRED),
    complemento: Yup.string().nullable().notRequired(),
    estado: Yup.string()
      .required(MSG_REQUIRED)
      .max(2, 'Excedeu o limite de caracteres')
      .typeError(MSG_REQUIRED)
  });

export const EnderecoPFFormModelSchema: Yup.ObjectSchema<Endereco> =
  Yup.object<Endereco>().shape({
    cep: Yup.string()
      .transform((cep) => cep.replace(/\D+/g, ''))
      .test('len', 'CEP inválido', (val) => !val || val.length === 8),
    rua: Yup.string().optional().typeError(MSG_REQUIRED),
    numero: Yup.mixed<number | ''>()
      .test('num', MSG_INVALID, (val) => !val || !isNaN(val))
      .test('maior que 0', ONLY_POSITIVES, (val) => !val || val > 0)
      .optional(),
    bairro: Yup.string().optional().typeError(MSG_REQUIRED),
    cidade: Yup.string().required(MSG_REQUIRED).typeError(MSG_REQUIRED),
    complemento: Yup.string().nullable().optional(),
    estado: Yup.string()
      .max(2, 'Excedeu o limite de caracteres')
      .required(MSG_REQUIRED)
      .typeError(MSG_REQUIRED)
  });
