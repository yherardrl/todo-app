import React from "react";
import { AppUi } from "./AppUi";

// const defaultTodos = [
//   { text: "cortar cebolla", completed: true },
//   { text: "Tomar curso intro React", completed: false },
//   { text: "llorar con la llorona", completed: false },
//   { text: "LALALALALA", completed: true },
// ];

//this custon hook localStorage return an item and the function that modified state
const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const strinfiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, strinfiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
};

function App() {
  const [todos, saveTodos] = useLocalStorage("V1_TODOS", []);
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
