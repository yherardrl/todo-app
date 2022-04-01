import React from "react";
import { AppUi } from "./AppUi";

// const defaultTodos = [
//   { text: "cortar cebolla", completed: true },
//   { text: "Tomar curso intro React", completed: false },
//   { text: "llorar con la llorona", completed: false },
//   { text: "LALALALALA", completed: true },
// ];

const useLocalStorage = () => {};

function App() {
  const localStorageTodos = localStorage.getItem("V1_TODOS");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("V1_TODOS", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  console.log(todos);
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue >= 1) {
    searchedTodos = todos;
  } else {
    console.log(todos);
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodo) => {
    const strinfiedTodos = JSON.stringify(newTodo);
    localStorage.setItem("V1_TODOS", strinfiedTodos);
    setTodos(newTodo);
  };

  const completeTodo = (text) => {
    // todoIndex finds position in the array
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // newTodos clones the array found in state
    const newTodos = [...todos];
    // changes the completed atribute to true
    newTodos[todoIndex].completed = true;
    // through the funtion setTodos update the state
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    // todoIndex finds position in the array
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // newTodos clones the array found in state
    const newTodos = [...todos];
    // we apply the splice method to the newTodos array to remove the index
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUi
      completed={completedTodos}
      total={totalTodos}
      completeTodo={completeTodo}
      searchedTodos={searchedTodos}
      deleteTodo={deleteTodo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
}

export default App;
