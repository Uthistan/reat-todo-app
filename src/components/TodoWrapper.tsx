import { useState } from "react";
import { TodoFrom } from "./TodoFrom";

export const TodoWrapper = () => {
  const [todo, setTodo] = useState([]);
  const addTodo = () => {
    setTodo([...todo]);
  };
  return (
    <>
      <TodoFrom addTodo={addTodo} />
    </>
  );
};
