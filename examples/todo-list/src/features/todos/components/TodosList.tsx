import { Box, Container } from "@mui/material";
import { Todo } from "../types";
import { TodoComponent } from "./TodoComponent";

interface TodoListProps {
  editTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
  todos: Todo[];
}

export const TodosList = ({ todos, editTodo, removeTodo }: TodoListProps) => {
  return (
    <Container>
      <Box py={4}>Lista de Todos: {todos.length}</Box>
      {todos.map((todo) => (
        <TodoComponent
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          removeTodo={removeTodo}
        />
      ))}
    </Container>
  );
};
