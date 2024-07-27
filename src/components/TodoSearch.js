import React from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "./TodoContext";

function TodoSearch() {//, todos, setTodos }) {
  // var filteredTodos = todos;
  // if (searchValue !== "") {
  //   filteredTodos = todos.filter((todo) => todo.text.includes(searchValue));
  //   setTodos(filteredTodos);
  // }
  // else {
  //   setTodos(todos);
  // }

  return (
    <TodoContext.Consumer>
      {({ searchValue, setSearchValue }) => (
        <input
          value={searchValue}
          className="TodoSearch"
          placeholder="Cortar cebolla"
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        ></input>
      )}

    </TodoContext.Consumer>
  );
}

export { TodoSearch };
