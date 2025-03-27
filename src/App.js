
import './App.css';
import { useEffect, useState } from 'react';
import TodoList from './TodoList';

function App() {
  const[task,setTask]=useState("");
  const[todos,setTodos]=useState([]); 
 const[editingIndex,setEditingIndex]=useState(null);
 const[editingTask,setEditingTask]=useState("");

 useEffect(() => {
  const storedTodos = localStorage.getItem("todos");

  try {
    setTodos(storedTodos ? JSON.parse(storedTodos) : []);
  } catch (error) {
    console.error("Error parsing JSON from localStorage", error);
    setTodos([]);
  }
}, []);


useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos]);



  const changeHandler=e=>{
    setTask(e.target.value)
  }

  const submitHandler=e=>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setTodos(newTodos);
    console.log(task);
    setTask("");

  }
  const deleteHandler=(indexValue)=>{
    const newTodos=todos.filter((todo,index)=>index!==indexValue);
    setTodos(newTodos);
  };

  const editHandler = (index) => {  
    setEditingIndex(index); 
    setEditingTask(todos[index]); 
  };

  const updateHandler=()=>{
    const updateTodos=todos.map((todo,index)=>
    index===editingIndex?editingTask:todo
    );

    setTodos(updateTodos);
    setEditingIndex(null);
    setEditingTask("");
  }

  {editingIndex !== null && (
    <div>
      <input 
        type="text" 
        value={editingTask} 
        onChange={(e) => setEditingTask(e.target.value)} 
      />
      <button onClick={updateHandler}>Update</button>
    </div>
  )}

  return (
    <div>
            <h3>Todo Management Application</h3>
            <form onSubmit={submitHandler}>
              <input type="text" name="task"  value={task} onChange={changeHandler} /> &nbsp;
              <button type="submit" name="Add">Add</button>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler} editHandler={editHandler}/>
    </div>
  );
}

export default App;
