 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Carts'
import TopBar from './topbar'
import EditTodo from './EditTodo'
import Todos from './Todo.jsx'
// todo data
function App(){
  const data =[
    {
       TodoName:"office task 1",
       TodoDiscription:"this is the discription for My first task",
       Status:"Not Completed"
},
{
    TodoName:"office task 2",
    TodoDiscription:"this is the discription for My Second task",
    Status:"Completed"
},
{
    TodoName:"office task 3",
    TodoDiscription:"this is the discription for My Third task",
    Status:"Not Completed"
},
]
// using usestate
  const [studentdata, setStudentdata] = useState(data)
  const [filterstudentdata, setFilterStudentdata] = useState(null)
  const [showForm, setShowForm]= useState(true);
  const[editId,setEditId]=useState("");

  return (
    <>
    {showForm === true?(<TopBar studentdata={studentdata} setStudentdata={setStudentdata}/>):
     (<EditTodo studentdata={studentdata} setStudentdata={setStudentdata} showForm={showForm} setShowForm={setShowForm} editId={editId} /> )}
<Todos studentdata={studentdata} setFilterStudentdata={setFilterStudentdata}/>
<Cart studentdata={filterstudentdata ? filterstudentdata: studentdata} setStudentdata ={setStudentdata}
showForm={showForm} setShowForm={setShowForm} setEditId={setEditId} editId={editId}/>
</>
  )
}   

export default App
