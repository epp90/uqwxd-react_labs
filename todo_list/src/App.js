import React, {useState} from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState([]);
  // Add the handlesubmit code here
  function handleSubmit(e){
      e.preventDefault();

      let todo = document.getElementById("todoAdd");
    
      const newTodo = {
          id: new Date().getTime(),
          text: todo.value.trim(),
          completed: false
      };
      if (todo.value === ""){
          alert("Enter a valid task (cannot be empty).")
      }
      else {
          setTodos(todos.concat(newTodo));
      }
      todo.value = "";
  }
  
  // Add the deleteToDo code here
  function deleteTodo(id){
    let updatedTodos = todos.filter(todo => todo.id !== id);
    
    setTodos(updatedTodos);
  }
  
  // Add the toggleComplete code here
  function toggleCompleteted(id){
    let checkedTodos = [...todos];
    let todo = checkedTodos.find((x) => x.id === id);
    todo.completed = !todo.completed;
    setTodos(checkedTodos);
  }

  
  // Add the submitEdits code here
  function submitEdits(){

  }
  
return(
<div className ="App">
<h1>Todo List</h1>
<form onSubmit={handleSubmit}>
<input type ="text" align ="right" id= 'todoAdd'/>
<button type ="submit">Add Todo</button>
</form>
<div>
    {todos.map((todo) => 
        <div className="todo" key={todo.id}>
            if (todoEditing){
                <div>
                    <input type="text" placeholder={todo.text}></input>
                    <button>Confirm</button>
                </div>
            }
            else{
                <div>
                    <div className="todo-text">{todo.text}</div>
                    <button>Edit</button>
                </div>
                
            }
            
            <input type="checkbox" onChange={() => toggleCompleteted(todo.id)} checked={todo.completed}></input>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <span>checked={todo.completed.toString()}</span>
        </div>
        
    )}
</div>
</div>
);
};
export default App;
