import React from "react";
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { TodoContext } from "./TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";


function TodoUI() {
    const { loading, error, filteredTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);

    return (<React.Fragment>
        {/* <TodoCounter completed={completed} total={total} />
  
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} /> */}

        {/* using React Context */}
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {loading && (<><TodosLoading /> <TodosLoading /> <TodosLoading /></>)}
            {error && <TodosError />}
            {!loading && filteredTodos.length === 0 && (
                <p>No se encontraron TODOS</p>
            )}

            {!loading && filteredTodos.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onComplete={() => completeTodo(item.id)}
                        onDelete={() => deleteTodo(item.id)}
                    />
                );
            })}
        </TodoList>

        <CreateTodoButton />

        {openModal && (
            <Modal>
                {/* open the add todo panel */}
                <TodoForm />
            </Modal>
        )}

    </React.Fragment>);

}

export { TodoUI }