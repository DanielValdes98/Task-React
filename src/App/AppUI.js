import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
    const { error,
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal, 
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />


            <TodoList>
                {error  && <p>Wait, we have problems...</p>}
                {loading  && <p>Loading...</p>}
                {(!loading  && !searchedTodos.length) && <p>Create your first task...</p>}


                { searchedTodos.map( todo => (
                <TodoItem 
                    key={todo.text}  
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={ () => completeTodo(todo.text)}
                    onDelete={ () => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList> 

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}


            <CreateTodoButton 
                setOpenModal = {setOpenModal}
            />
    </React.Fragment>
    );
}

export { AppUI };