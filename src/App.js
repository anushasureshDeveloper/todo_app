import { useEffect, useState } from "react"
import Todo from "./Componants/Todo"
  // import DeleteIcon from '@mui/icons-material/Delete';
// import DoneIcon from '@mui/icons-material/Done';te } from "react";
const localData=()=>{
  let list=localStorage.getItem("data")
  if(list)
  {
    return JSON.parse(list)
  }
  else{
    return[]
  }
}




function App() {
  const [newTask,setNewTask]=useState("")
  const [todoList,setTodoList]=useState(localData())
//add task
const addTask=(e)=>{
 e.preventDefault()

if(!newTask){
  alert("please enter something !")
}
else{
  let task={
  id:todoList.length===0 ? 1 :todoList[todoList.length-1].id+1,
  taskName:newTask,
  completed:false

}

let newTodoList=[...todoList,task]
setTodoList(newTodoList)
setNewTask("")
}
}



useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(todoList))
})

//complete task

const iscomplete=(id)=>{
  setTodoList(todoList.map((item)=>{
    if(item.id===id){
      return{...item,completed:true}
    }
    else{
      return item
    }
  }))
}

// delete task
const deleteTask=(id)=>{
  let newTodoList=todoList.filter((item)=>{
    return item.id !== id
  })
  setTodoList(newTodoList)
  
}

//edit task

const editTask=(id)=>{
  let changeTask=todoList.find((item)=>{
    return item.id===id
  })
  let newTodolist=todoList.filter((item)=>{
    return item.id!==id
  })
  setNewTask(changeTask.taskName)
  setTodoList(newTodolist)
}


  return (
    <div className=" flex flex-col justify-start items-center py-24 text-white bg-black min-h-screen">
      <h1 className="flex justify-center text-5xl font-bold text-purple-900 pt-24 ">Todo App</h1>
    <form className="mt-10 flex gap-4">
     <input onChange={(e)=>{setNewTask(e.target.value)}} value={newTask} type="text" placeholder="Enter the task" className="flex justify-center items-center bg-gray-600 taxt-xl rounded-md px-5 py-2 w-[300px] border-none outline-none tracking-wider " />
     <button onClick={addTask} className="px-7 py-3 bg-blue-800 rounded-md ">Add Task</button>
     </form>
  

     <div className=" pt-10 ">
      {
        todoList && todoList.map((item,index)=>{
          return(
            <Todo key={item.id} taskName={item.taskName} index= 
            {index} id={item.id} deleteTask={deleteTask} editTask={editTask} completed={item.completed} iscomplete={iscomplete}/>
//            <div className="flex justify-between w-[300px] relative position:fixed"  key={item.id} >
//              <h1 className="text-cyan-700 text-xl font-semibold ">{item.id} {item.taskName} </h1>
//              <DoneIcon onClick={()=>{complete(item.id)}} className="  text-green-800 curser-pointer"/>
//             < DeleteIcon onClick={()=>{deleteTask(item.id) }} className=" relative position:relative text-red-600  curser-pointer"
//             /> 
// //  </div>
          )
      })
       }
     

      </div>
    </div>
  );
}

export default App;
