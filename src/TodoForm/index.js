import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {

    const [newTodoValue, setnewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setnewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length <= 0) return;
            addTodo(newTodoValue);
            setOpenModal(false);
    }


    return (
        <form onSubmit={onSubmit}>
            <label>Add a new task</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Your task'
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="buttom"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}> 
                    Cancel 
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                    > 
                    Add 
                </button>
            </div>
        </form>
    );
}

export { TodoForm };