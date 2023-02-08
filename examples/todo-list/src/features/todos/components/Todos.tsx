import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "../../../components/Form/Checkbox";
import { Input } from "../../../components/Form/Input";
import { Colors } from "../../../shared/colors";
import { Todo, TodoSchema } from "../types";

interface Props {
  todo?: Todo;
  saveTodo: (todo: Todo) => void;
}

export const Todos = ({ todo, saveTodo }: Props) => {
  const form = useForm({
    defaultValues: todo ?? ({} as Todo),
    resolver: yupResolver(TodoSchema),
  });

  const onValid: SubmitHandler<Todo> = (todo) => {
    saveTodo(todo);
  };

  useEffect(() => {
    form.reset(todo);
  }, [form, todo]);

  return (
    <Container>
      <FormProvider {...form}>
        <Grid container spacing={2} paddingY={2}>
          <Grid item xs={12}>
            <Typography color={Colors.secondary} variant="h6">
              Todos
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Input
              name="id"
              control={form.control}
              label="Id"
              placeholder="Id"
              inputProps={{ maxLength: 150 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Input
              name="title"
              control={form.control}
              label="Titulo"
              placeholder="Titulo"
              inputProps={{ maxLength: 150 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Input
              name="userId"
              control={form.control}
              label="UserId"
              placeholder="UserId"
              inputProps={{ maxLength: 150 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} display="flex" alignItems="center">
            <Checkbox
              name="completed"
              control={form.control}
              label="Concluido"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              onClick={form.handleSubmit(onValid)}
            >
              <Typography variant="body1" textTransform="none" lineHeight={1}>
                Salvar
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
};
