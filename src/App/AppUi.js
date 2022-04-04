import React from "react";

import { TodoContex } from "../TodoContex";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUi() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContex);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <p>Estamos cargando, no te desesperes</p>}
        {error && <p>Desesperate por hay un error</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer Todo</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export { AppUi };
