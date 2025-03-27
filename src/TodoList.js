import React from 'react'


// const TodoList = ({todolist,deleteHandler,editHandler}) => {
//   return (
//     <div>
//     {todolist.map((todo,index)=>
//     <div key={index}>
//         <h5>{todo} &nbsp;  
//         <button onClick={() => editHandler(index)}>Edit</button> &nbsp;
//           <button onClick={()=>deleteHandler(index)}>Delete</button>
//           </h5>
//     </div>)}
// </div>
//   )
// }

const TodoList = ({ todolist, deleteHandler, editHandler }) => {
  return (
    <div>
      {todolist.map((todo, index) => (
        <div key={todo.id}>
          <h5>{todo.todoTask} &nbsp;  
            <button onClick={() => editHandler(index)}>Edit</button> &nbsp;
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </h5>
        </div>
      ))}
    </div>
  );
};





// const TodoList = ({ todolist, deleteHandler }) => {
//   return (
//     <ul>
//       {todolist.map((todo) => (
//         <li key={todo.id}>
//           {todo.task} &nbsp;
//           <button onClick={() => deleteHandler(todo.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// };



export default TodoList