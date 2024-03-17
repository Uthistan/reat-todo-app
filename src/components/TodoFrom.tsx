import { ChangeEvent, useState } from "react";

type formProps = {
  addTodo: () => void;
};

export const TodoFrom = ({ addTodo }: formProps) => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = () => {
    console.log(value);
    addTodo();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} type="text" />
      <button type="submit">Add task</button>
    </form>
  );
};
