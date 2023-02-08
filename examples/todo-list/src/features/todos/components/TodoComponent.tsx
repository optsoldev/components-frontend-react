import { Box, Typography } from "@mui/material";
import { Todo } from "../types";

interface TodoViewProps {
  todo: Todo;
  editTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

export const TodoComponent = ({
  editTodo,
  todo,
  removeTodo,
}: TodoViewProps) => {
  return (
    <Box display="flex" alignItems="center">
      <Box
        color="blue"
        onClick={() => editTodo(todo)}
        sx={{ cursor: "pointer" }}
      >
        Editar
      </Box>
      <Box
        color="red"
        onClick={() => removeTodo(todo)}
        mx={5}
        sx={{ cursor: "pointer" }}
      >
        Deletar
      </Box>
      <Typography fontSize={18}>
        <pre key={todo.id}>{JSON.stringify(todo)}</pre>
      </Typography>
    </Box>
  );
};
