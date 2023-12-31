// import React, { useReducer } from 'react';

// type TodoObject = {
//   title: string,
//   done: boolean
// }

// const initialTodo: TodoObject[] = [
//   { title: 'Buy milk', done: true },
//   { title: 'Eat tacos', done: false },
//   { title: 'Brew tea', done: false },
// ];


// export default function TaskProvider() {

//   const [task, dispatch] = useReducer<React.FC>(taskReducer, initialTodo)


//   return (
//     <div>Reducer</div>
//   )
// }

// enum ACTIONTYPE {
//   ADD, EDIT, DELETE
// };

// function taskReducer(todo: typeof initialTodo, action: ACTIONTYPE): void {
//   console.log(todo);
// }
