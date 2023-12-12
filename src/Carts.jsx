import { useState } from "react"

export default function Cart({studentdata,setStudentdata,showForm,setShowForm,setEditId}){
// handling delete function
const deleteTodo =(id)=>{
      const remainingTodo = studentdata.filter((studInfo,idx) => idx !== id);
      setStudentdata(remainingTodo);
}
// handling Edit function
const handleEdit=(id)=>{
 setShowForm(false);
setEditId(id);
};
// handling Status function
const handleStatusChange=(id,event)=>{
   studentdata[id].status = event.target.value;
   setStudentdata([...studentdata])
}
    return(
        <div className="flex flex-row gap-10 p-2 ">
            {studentdata &&(
                <>
                {studentdata?.map((studInfo,idx) =>(
                   <div key ={idx}>
                   <div className="p-5 card card-compact w-96 border h-60 shadow-xl">
                       <div className="card-body">
                           <h5>Name :{studInfo.TodoName}</h5>
                           <h5>Description :{studInfo.TodoDiscription}</h5>
                           <h5 className="p-2">Status 
                           <select className=" p-2 mx-2 h-10 max-w-xs bg-error"
                            onChange={(e) => handleStatusChange(idx,e)}
                           >
                            {studInfo.Status == "Completed"?(
                                 <option className="bg-primary">Completed</option>
                            ):(
                              <option>Not Completed</option>
                            )}
                            {studInfo.Status == "Not Completed" ? (
                               <option>Completed</option>
                            ):(
                            <option>Not Completed</option>)
                            }
                          </select></h5>
               <div className="card-actions justify-end">
                 <button onClick={()=>deleteTodo(idx)} className="btn btn-warning">Delete</button>
                 <button className="btn btn-accent"onClick={()=>handleEdit(idx)}>Edit</button>
               </div>
             </div>
           </div>
           </div>
                ))}
                </>
            )

            }
</div>
    )
}