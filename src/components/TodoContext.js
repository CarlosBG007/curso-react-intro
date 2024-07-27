import React from 'react';

const TodoContext = React.createContext();

const TODOSNAME = "TODOS";

const defaultTODOS = [
    { id: 1, text: "Sacar la basura", completed: false },
    { id: 2, text: "Desplegar cambios a UAT", completed: false },
    { id: 3, text: "Pagar la luz/agua", completed: false },
    { id: 4, text: "Transferir ahorros a cuenta", completed: false },
    { id: 5, text: "Ir al megamaxi", completed: false },
];

function useLocalStorage(initialStateValue) {
    const [item, setItem] = React.useState(initialStateValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                let jsonItem = localStorage.getItem(TODOSNAME);
                let parsedItem;

                if (!jsonItem) {
                    parsedItem = initialStateValue;
                } else {
                    parsedItem = JSON.parse(jsonItem);
                    setItem(parsedItem);
                }

                if (parsedItem.length === 0) {
                    var initialJson = JSON.stringify(initialStateValue);
                    localStorage.setItem(TODOSNAME, initialJson);
                    parsedItem = initialStateValue;
                }

                setLoading(false);
            } catch (ex) {
                setError(true);
                setLoading(false);
            }
        }, 2000);
    }, []);

    const saveItem = (item) => {
        //persists the data in localStorage
        var jsonNewTodos = JSON.stringify(item);
        localStorage.setItem(TODOSNAME, jsonNewTodos);

        //update the state
        setItem(item);
    };

    //return [item, saveItem];
    return { item, saveItem, loading, error };
}

function TodoProvider({ children }) {
    //encapsulate all business logic here!!

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage(defaultTODOS);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    console.log("filtro de TODO: " + searchValue);

    var completed = todos.filter((todo) => todo.completed === true).length;
    var total = todos.length;

    var filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    const completeTodo = (id) => {
        const newTodos = [...todos]; //copia del estado de array de TODOS
        newTodos.find((item) => item.id === id).completed = !newTodos.find(
            (item) => item.id === id
        ).completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((item) => item.id === id);
        newTodos.splice(index, 1);
        saveTodos(newTodos);
    };

    const addTodo = (todo) => {
        const newTodos = [...todos]; //copia del estado de array de TODOS
        const newId = newTodos.length + 1;
        newTodos.push({
            id: newId, text: todo, completed: false
        });
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading, error, filteredTodos, completeTodo, deleteTodo, searchValue, setSearchValue,
            completed, total, openModal, setOpenModal, addTodo
        }}>
            {children} {/* any component wrapped in here will have access to all the props from Provider */}
        </TodoContext.Provider>);
}

export { TodoContext, TodoProvider }