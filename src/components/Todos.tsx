import React from "react";
import Todo from "../models/todo";
import TodoItems from "./TodoItems";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItems item={item} />
      ))}
    </ul>
  );
};

export default Todos;
