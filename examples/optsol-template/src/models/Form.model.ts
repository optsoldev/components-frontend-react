import * as Yup from 'yup';
import { Endereco, EnderecoPJFormModelSchema } from './Endereco.model';

export type Form = { endereco: Endereco };
export const validation: Yup.ObjectSchema<Form> = Yup.object<Form>().shape({
  endereco: EnderecoPJFormModelSchema
});
