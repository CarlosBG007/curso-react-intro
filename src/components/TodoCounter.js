// const style = {
//   backgroundColor: 'lightgreen',
//   fontSize: 24,
//   textAlign: 'center',
//   margin: 0,
//   padding: '48px'
// }

import React from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  //using "useContext"
  const { total, completed } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      {total > 0 ? ShowCounter(total, completed) : "No hay TODOS"}
    </h1>
  );

  //using Consumer
  // return (
  //   <TodoContext.Consumer>
  //     {({ total, completed }) => (<h1 className="TodoCounter">
  //       {total > 0 ? ShowCounter(total, completed) : "No hay TODOS"}
  //     </h1>)}

  //   </TodoContext.Consumer>
  // );
}

function ShowCounter(total, completed) {
  return <div>Has completado <span>{completed}</span> de <span>{total}</span> TODOS</div>
}


//export default TodoCounter
export { TodoCounter };
