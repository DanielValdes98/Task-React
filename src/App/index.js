import React from "react";
import  { TodoProvider } from '../TodoContext';
import  { AppUI } from './AppUI';



// const defaultTodos = [
//   { text: 'Tomar curso de React en Platzi', completed : true  },
//   { text: 'Terminar curso de desarrollo web en Udemy', completed : true },
//   { text: 'Terminar curso de Java en Youtube', completed : false },
//   { text: 'Seguir estudiando los cursos', completed : false },
// ];


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
