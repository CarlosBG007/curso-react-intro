import React from "react";
import "./App.css";

import { TodoUI } from "./components/TodoUI";
import { TodoProvider } from "./components/TodoContext";

function App() {
  //const [todos, setTodos] = React.useState(parsedTodos);
  return (
    <TodoProvider>
      <TodoUI />
    </TodoProvider>
  );
}

export default App;