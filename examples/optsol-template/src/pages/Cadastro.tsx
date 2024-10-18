import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm
} from 'react-hook-form';

import { FormEndereco } from '../components/FormEndereco';
import { ENDERECO_DEFAULT, EnderecoPJFormModelSchema } from '../models';
import { Form, validation } from '../models/Form.model';

function Cadastro() {
  const form = useForm<Form>({
    defaultValues: { endereco: ENDERECO_DEFAULT },
    resolver: yupResolver(validation)
  });

  const handleSubmit: SubmitHandler<Form> = (data) => {
    console.log({ data });
  };
  const handleErrorSubmit: SubmitErrorHandler<Form> = (data) => {
    console.log({ data });
  };

  return (
    <Box p={2} display="flex" flex={1} flexDirection="column">
      <FormProvider {...form}>
        <FormEndereco validationSchema={EnderecoPJFormModelSchema} />
        <Box mt={2}>
          <Button
            fullWidth
            variant="contained"
            onClick={form.handleSubmit(handleSubmit, handleErrorSubmit)}
          >
            <Typography variant="body1" textTransform="none">
              Confirmar associação
            </Typography>
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
}

export default Cadastro;
