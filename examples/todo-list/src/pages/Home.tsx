import { Todo, Todos, TodosList, useTodo } from "@/features/todos";
import { mdiPencilOutline } from "@mdi/js";
import { Container } from "@mui/material";
import {
  OptActionButton,
  OptActionToolbar,
  OptSideLayoutContent,
} from "@optsol/react";
import { useCallback, useEffect, useState } from "react";
import { Routes } from "../routes/index.routes";
import { Colors } from "../shared/colors";
const CONFIRMAR = "Editar";

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = useCallback(() => setIsEditing(true), []);
  const [todo, setTodo] = useState<Todo>();
  const [todos, setTodos] = useState<Todo[]>([]);

  const { save, remove, listar } = useTodo();

  const editTodo = (todo: Todo) => {
    setTodo(todo);
  };

  useEffect(() => {
    listar().then(setTodos);
  }, [listar]);

  console.log("Home");
  return (
    <OptSideLayoutContent>
      <OptActionToolbar
        goBackRoute={Routes.Home}
        title="Exibição da proposta"
        background={Colors.white}
        color={Colors.primary}
        clearMargin
      >
        <OptActionButton
          startIcon={{
            path: mdiPencilOutline,
            color: Colors.primary,
          }}
          disabled={isEditing}
          onClick={handleClick}
        >
          {CONFIRMAR}
        </OptActionButton>
      </OptActionToolbar>
      <Container maxWidth="md">
        <Todos saveTodo={save} todo={todo} />
        <TodosList editTodo={editTodo} todos={todos} removeTodo={remove} />
      </Container>
    </OptSideLayoutContent>
  );
};

export default Home;
