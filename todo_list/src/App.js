import React, {useState, useEffect} from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);

  useEffect(() => {
    if(todos.length > 0) {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }
  }, [todos]);

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
  function submitEdits(id){
    let updatedTodos = todos.map(todo => {
        if (todo.id === id){
            todo.text = document.getElementById(id).value;
        }
        return todo;
    });

    setTodos(updatedTodos);
    setTodoEditing(0);
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
            {todoEditing === todo.id ? (
                <div>
                    <input type="text" defaultValue={todo.text} id={todo.id}></input>
                    <button className="todo-actions" onClick={() => submitEdits(todo.id)}>Confirm</button>
                </div>) :
                (<div>
                    <div className="todo-text">{todo.text}</div>
                    <button className="todo-actions" onClick={() => setTodoEditing(todo.id)}>Edit</button>
                </div>)
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
