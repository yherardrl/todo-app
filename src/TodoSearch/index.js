import React from "react";
import { TodoContex } from "../TodoContex";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContex);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="TodoSearch"
        placeholder="Nombre de tarea"
        onChange={onSearchValueChange}
        value={searchValue}
      />
    </>
  );
}

export { TodoSearch };
