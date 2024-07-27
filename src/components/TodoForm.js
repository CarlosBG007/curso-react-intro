import React from 'react';
import { TodoContext } from './TodoContext';
import '../styles/TodoForm.css'

function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [showError, setShowError] = React.useState(false);

    const onSubmit = (event) => {
        event.preventDefault(); //to avoid reloading the page when submit is triggered!)
        if (newTodoValue.trim() !== "") {
            addTodo(newTodoValue);
            setOpenModal(false);
        }
        else {
            setShowError(true);
        }
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onTODOInput = (event) => {
        var todo = event.target.value;
        // console.log(todo);
        setNewTodoValue(todo);
        setShowError(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Ingrese el TODO</label>
            <textarea onChange={onTODOInput} value={newTodoValue} placeholder='Escriba el TODO...' />
            <br></br>
            {showError && (<div style={{color: "red"}}> <p>No se aceptan TODOs vacios</p></div>)}
            <div className='TodoForm-buttonContainer'>
                <button onClick={onCancel} type="button" className='TodoForm-button TodoForm-button--cancel'>
                    Cancelar
                </button>
                {/* submit by default */}
                <button className='TodoForm-button TodoForm-button--add'>
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };