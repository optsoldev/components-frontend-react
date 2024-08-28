import { Grid } from '@mui/material';
import {
  AutoComplete,
  AutocompleteAsync,
  ControlledDatePicker,
  ControlledInput,
  PatternInput
} from '@optsol/react';
import debounce from 'lodash.debounce';
import React, { useCallback, useRef } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import * as Yup from 'yup';

import { useCEP } from '../../hooks';
import { useYupFunctions } from '../../hooks/useYupFunctions';
import { ENDERECO_DEFAULT, Endereco } from '../../models';

const states = [
  { value: 'AC', label: 'AC - Acre' },
  { value: 'AL', label: 'AL - Alagoas' },
  { value: 'AP', label: 'AP - Amapá' },
  { value: 'AM', label: 'AM - Amazonas' },
  { value: 'BA', label: 'BA - Bahia' },
  { value: 'CE', label: 'CE - Ceará' },
  { value: 'DF', label: 'DF - Distrito Federal' },
  { value: 'ES', label: 'ES - Espírito Santo' },
  { value: 'GO', label: 'GO - Goías' },
  { value: 'MA', label: 'MA - Maranhão' },
  { value: 'MT', label: 'MT - Mato Grosso' },
  { value: 'MS', label: 'MS - Mato Grosso do Sul' },
  { value: 'MG', label: 'MG - Minas Gerais' },
  { value: 'PA', label: 'PA - Pará' },
  { value: 'PB', label: 'PB - Paraíba' },
  { value: 'PR', label: 'PR - Paraná' },
  { value: 'PE', label: 'PE - Pernambuco' },
  { value: 'PI', label: 'PI - Piauí' },
  { value: 'RJ', label: 'RJ - Rio de Janeiro' },
  { value: 'RN', label: 'RN - Rio Grande do Norte' },
  { value: 'RS', label: 'RS - Rio Grande do Sul' },
  { value: 'RO', label: 'RO - Rondônia' },
  { value: 'RR', label: 'RR - Roraíma' },
  { value: 'SC', label: 'SC - Santa Catarina' },
  { value: 'SP', label: 'SP - São Paulo' },
  { value: 'SE', label: 'SE - Sergipe' },
  { value: 'TO', label: 'TO - Tocantins' }
];

const getOptions = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return Promise.resolve(states);
};
export interface EnderecoProps {
  validationSchema: Yup.ObjectSchema<Endereco>;
}

export default function FormEndereco({ validationSchema }: EnderecoProps) {
  const { buscar } = useCEP();
  const { isFieldRequired } = useYupFunctions();

  const { control, setValue, setError } = useFormContext<{
    endereco: Endereco;
  }>();
  const bairroRef = useRef<HTMLInputElement>(null);
  const numeroRef = useRef<HTMLInputElement>(null);

  const checkCEP = useCallback(
    (e: React.FocusEvent<HTMLInputElement, Element>) => {
      const cep = e.target.value;
      buscar(cep)
        .then((endereco) => {
          if (endereco) {
            setValue('endereco', endereco);
            setValue('endereco.cep', cep);
            setError('endereco', {});
            if (!endereco.bairro) bairroRef.current?.focus();
            else numeroRef.current?.focus();
          }
        })
        .catch(() => {
          setValue('endereco', { ...ENDERECO_DEFAULT, cep });
        });
    },
    [buscar, setError, setValue]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCEPChange = useCallback(debounce(checkCEP, 500), [checkCEP]);

  const getPlaceholder = (key: keyof Endereco, placeholder: string) =>
    (isFieldRequired(validationSchema, key) ? '*' : '').concat(placeholder);

  return (
    <Grid container item spacing={3}>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <PatternInput
          label="CEP"
          control={control}
          format="#####-###"
          name="endereco.cep"
          placeholder={getPlaceholder('cep', 'CEP')}
          onChange={handleCEPChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <AutoComplete
          options={states}
          control={control}
          label="Estado"
          placeholder={getPlaceholder('estado', 'Estado')}
          name="endereco.estado"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <AutocompleteAsync
          multiple
          control={control}
          label="Estado"
          placeholder={getPlaceholder('estado', 'Estado')}
          name="endereco.estado"
          load={getOptions}
          getOptionLabel={(o) => o.label}
          isOptionEqualToValue={function (
            option: FieldValues,
            value: FieldValues
          ): boolean {
            return option.value === value.value;
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <ControlledInput
          label="Cidade"
          control={control}
          placeholder={getPlaceholder('cidade', 'Cidade')}
          name="endereco.cidade"
          inputProps={{ maxLength: 100 }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <ControlledDatePicker
          label="Data"
          control={control}
          name="endereco.data"
          inputProps={{ maxLength: 100 }}
          value={null}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <ControlledInput
          inputRef={bairroRef}
          control={control}
          name="endereco.bairro"
          label="Bairro"
          placeholder={getPlaceholder('bairro', 'Bairro')}
          inputProps={{ maxLength: 100 }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <ControlledInput
          label="Rua"
          control={control}
          placeholder={getPlaceholder('rua', 'Rua')}
          name="endereco.rua"
          inputProps={{ maxLength: 150 }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <ControlledInput
          inputRef={numeroRef}
          control={control}
          name="endereco.numero"
          label="Número da residência"
          inputProps={{ maxLength: 5 }}
          placeholder={getPlaceholder('numero', 'Número')}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <ControlledInput
          control={control}
          name="endereco.complemento"
          label="Complemento"
          placeholder={getPlaceholder('complemento', 'Complemento')}
          inputProps={{ maxLength: 50 }}
        />
      </Grid>
    </Grid>
  );
}
