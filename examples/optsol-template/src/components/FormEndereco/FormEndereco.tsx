import { Grid } from '@mui/material';
import {
  Autocomplete,
  AutocompleteAsync,
  ControlledAutocomplete,
  ControlledDatePicker,
  ControlledInput,
  PatternInput
} from '@optsol/react';
import debounce from 'lodash.debounce';
import React, { useCallback, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import * as Yup from 'yup';

import { useCEP } from '../../hooks';
import { useYupFunctions } from '../../hooks/useYupFunctions';
import { ENDERECO_DEFAULT, Endereco } from '../../models';

const states = [
  { value: 'AC', description: 'AC - Acre' },
  { value: 'AL', description: 'AL - Alagoas' },
  { value: 'AP', description: 'AP - Amapá' },
  { value: 'AM', description: 'AM - Amazonas' },
  { value: 'BA', description: 'BA - Bahia' },
  { value: 'CE', description: 'CE - Ceará' },
  { value: 'DF', description: 'DF - Distrito Federal' },
  { value: 'ES', description: 'ES - Espírito Santo' },
  { value: 'GO', description: 'GO - Goías' },
  { value: 'MA', description: 'MA - Maranhão' },
  { value: 'MT', description: 'MT - Mato Grosso' },
  { value: 'MS', description: 'MS - Mato Grosso do Sul' },
  { value: 'MG', description: 'MG - Minas Gerais' },
  { value: 'PA', description: 'PA - Pará' },
  { value: 'PB', description: 'PB - Paraíba' },
  { value: 'PR', description: 'PR - Paraná' },
  { value: 'PE', description: 'PE - Pernambuco' },
  { value: 'PI', description: 'PI - Piauí' },
  { value: 'RJ', description: 'RJ - Rio de Janeiro' },
  { value: 'RN', description: 'RN - Rio Grande do Norte' },
  { value: 'RS', description: 'RS - Rio Grande do Sul' },
  { value: 'RO', description: 'RO - Rondônia' },
  { value: 'RR', description: 'RR - Roraíma' },
  { value: 'SC', description: 'SC - Santa Catarina' },
  { value: 'SP', description: 'SP - São Paulo' },
  { value: 'SE', description: 'SE - Sergipe' }
];

const getOptions = async (
  _request: any
): Promise<{
  items: { value: string; description: string }[];
  pageSize: number;
  page: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return Promise.resolve({
    items: states,
    pageSize: states.length,
    page: 1,
    totalCount: 1000,
    hasNextPage: false,
    hasPreviousPage: false
  });
};

const getOptionsAutocomplete = async (_termo: string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return Promise.resolve(states);
};
export interface EnderecoProps {
  validationSchema: Yup.ObjectSchema<Endereco>;
}

export default function FormEndereco({ validationSchema }: EnderecoProps) {
  const { buscar } = useCEP();
  const { isFieldRequired } = useYupFunctions();

  const bairroRef = useRef<HTMLInputElement>(null);
  const numeroRef = useRef<HTMLInputElement>(null);

  const { control, setValue, setError, watch } = useFormContext<{
    endereco: Endereco;
  }>();

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

  const estado = watch('endereco.estado') ?? {
    value: 'ES',
    description: 'ES - Espírito Santo'
  };

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
        <Autocomplete
          load={states}
          label="Estado"
          placeholder={getPlaceholder('estado', 'Estado')}
          getOptionLabel={(o) => o.description}
          isOptionEqualToValue={(option, value) => option.value === value.value}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <AutocompleteAsync
          control={control}
          label="Estado"
          name="endereco.estado"
          placeholder={getPlaceholder('estado', 'Estado')}
          load={getOptionsAutocomplete}
          getOptionLabel={(o) => (o ? o.description : '')}
          isOptionEqualToValue={function (option, value) {
            return option?.value === value?.value;
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
        <ControlledAutocomplete
          control={control}
          label="Estado"
          value={estado}
          name="endereco.estado"
          getOptionLabel={(o) => o.description}
          placeholder={getPlaceholder('estado', 'Estado')}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          load={getOptions}
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
