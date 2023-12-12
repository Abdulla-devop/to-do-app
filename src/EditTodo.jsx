import React, { useEffect, useState } from "react";
const EditTodo =({studentdata,setStudentdata,showForm,setShowForm,editId}) =>{
    const[todoName,setTodoName] = useState("");
  const[todoDescription,setTodoDescription]=useState("");
  const[todoStatus,setTodoStatus]=useState("")
//   edit function
  useEffect(() => {
    const selectedStudent = studentdata.filter((info,idx)=> idx == editId)
    console.log(selectedStudent)
    setTodoName(selectedStudent[0].TodoName);
    setTodoDescription(selectedStudent[0].TodoDiscription);
    setTodoStatus(selectedStudent[0].Status)
 },[editId]);
//   update todo info
const updateTodoDetails=()=>{
   const editedTodo ={
      TodoName:todoName,
      TodoDiscription:todoDescription,
      Status:todoStatus,
   };
   studentdata[editId] = editedTodo;
   setStudentdata([...studentdata]);
      setShowForm(!showForm)
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
   <button className="btn btn-secondary w-60 h-10"onClick={updateTodoDetails}>Update</button>
</div>
</div>
)
};

export default EditTodo;

