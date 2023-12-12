import { useState } from "react";

/* eslint-disable react/prop-types */
export default function TopBar({studentdata,setStudentdata}){
  const[todoName,setTodoName] = useState("")
  const[todoDescription,setTodoDescription]=useState("")
//   adding todo function
  const addNewTodo= () => {
     const newAddTodo = {
      TodoName:todoName,
      TodoDiscription:todoDescription,
      Status:"Completed"
     }
     setStudentdata([...studentdata,newAddTodo]);
  }
    
            return(
                <div className="container text-center">
          <h3 className="head grid place-items-center m-5">My todo</h3>
          <div className="add">
           <input 
           type="text" 
           className="form-control border mx-4 w-80" 
           placeholder="Todo Name" 
           value={todoName}
           onChange={(e) => setTodoName(e.target.value)}
           />
              <input 
           type="text" 
           className="form-control border mx-4 w-80" 
           placeholder="Todo description"
           value={todoDescription}
           onChange={(e) => setTodoDescription(e.target.value)}/>
          {/* //  aria-describedby="basic-addon1" */}
           <button className="btn btn-accent w-60 h-10"onClick={addNewTodo}>Add Todo</button>
  </div>
  </div>

    )
}