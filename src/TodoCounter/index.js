import React from "react";
import { TodoContex } from "../TodoContex";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContex);
  return (
    <h2 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
