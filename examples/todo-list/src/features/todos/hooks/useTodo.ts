import { useCallback } from "react";
import { get } from "../../../lib/Http";
import { Todo } from "../types";

export const useTodo = () => {
  const save = useCallback((todo: Todo) => {
    if (todo.id)
      fetch(`http://localhost:5000/todos/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify(todo),
      }).then(console.log);
    else
      fetch(`http://localhost:5000/todos`, {
        method: "POST",
        body: JSON.stringify(todo),
      }).then(console.log);
  }, []);

  const remove = (todo: Todo) => {
    fetch(`http://localhost:5000/todos/${todo.id}`, {
      method: "DELETE",
    });
  };

  const listar = useCallback(() => {
    /*     return fetch("http://localhost:5000/todos").then((response) =>
      response.json()
    ); */
    return get<Todo[]>("/todos");
  }, []);

  return { save, remove, listar };
};
