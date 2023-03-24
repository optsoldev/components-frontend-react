import * as Yup from "yup";

export type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export const TodoSchema: Yup.SchemaOf<Todo> = Yup.object().shape({
  id: Yup.number().required(),
  userId: Yup.number().required(),
  title: Yup.string().required(),
  completed: Yup.boolean().required(),
});
