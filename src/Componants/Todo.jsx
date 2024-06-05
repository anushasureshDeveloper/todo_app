import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
 import DoneIcon from '@mui/icons-material/Done';
 import EditIcon from '@mui/icons-material/Edit';
const Todo=({taskName,id,deleteTask,editTask, completed,iscomplete,index})=>{
    return(
        <div className="flex justify-between gap-5 ">
              <h1 className={`cursor-pointer ${completed?"line-through text-cyan-800":"text-gray-300 hover:text-white gap-6"}`}><span className="mr-2 gap-4">{index+1}</span>{taskName} </h1>
                   <div className=" flex gap-5"> 
                   <DoneIcon onClick={()=>{iscomplete(id)}} className="  text-green-800 curser-pointer"/>
                   < DeleteIcon onClick={()=>{deleteTask(id) }} className=" text-red-600  curser-pointer"
                   />
                   <EditIcon onClick={()=>{editTask(id)}} className="text-blue-800 curser-pointer"/>
                   </div>
         </div>
    )
}
export default Todo