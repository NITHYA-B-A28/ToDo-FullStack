import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const TaskInput = ({ addTask }) => {
const [task, setTask] = useState("");

const handleTask=async (e)=>{
    e.preventDefault();
    if(!task.trim()) return;
    try{
        const response= await axios.post("http://localhost:5000/submit",{
            text:task,
            completed:false,
        })
    
       addTask(response.data);
       setTask("");
    }catch(error){
    console.log("error submiting form",error.responde?.data ||error.message);
};
}


  return (
    <div>
       <form onSubmit={handleTask} >
            <input type="text"
            placeholder="enter the task"
            value={task}
            onChange={(e)=>setTask(e.target.value)} />
            <br />
            <br />
            <button type="submit">Add task
            </button>
        </form>
    </div>
  )
}

export default TaskInput
