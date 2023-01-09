import React,{useState} from "react";

const AddTodoForm = ({todos,settodos}) => {
    const [todosText,settodosText]=useState("")

    const formuDenetle=(event)=>{
        event.preventDefault()
        /* validation */
        if(yapilacakText === ""){
            alert("Empty box do not register")
            return
        }
        const newTodo={
            id:String(new Date().getTime()),
            text:todosText,
            date:new Date(),
            todosText:false
        }
        settodos([...todos,newTodo])
        setYapilacakText("")
    }
  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={formuDenetle} className="w-75">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="write what to do..."
            value={yapilacakText}
            onChange={(event)=>settodosText(event.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
};