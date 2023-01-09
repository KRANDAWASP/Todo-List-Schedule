import React, { useState } from "react";

 import AddTodoForm from "./components/AddTodoForm"; 

function App() {
  const [todos,setTodos] = useState([]);


  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <AddTodoForm />
      {
        todos.length === 0 ? (
          <p className="text-center">You do not have to do yet</p>
        ) :(
          <div>
            <p>todos listing here</p>
            </div>
        )
      }
    </div>
  );
 }
export default App;{

}
 