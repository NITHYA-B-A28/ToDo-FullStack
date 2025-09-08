import React from 'react'

const TaskOutput = ({tasks,onToggle,onDelete}) => {
    console.log("task received")
    
    if(!Array.isArray(tasks)){
        console.log("invalid task props");
    }

  return (
    <div>
      <h2>your tasks to be done</h2>
      {tasks.length===0?(
        <p>no tasks available</p>
      ):(
        <ul>
            {tasks.map((item)=>(
                <li key={item._id}> 
      
          <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "gray" : "black",
                }}
              >
                {item.text}
                </span>
                <div>
                <button type='submit'
                onClick={()=>onToggle(item._id)}>
                    ✅
                </button>
                <button type='submit'
                onClick={()=>onDelete(item._id)}>
                    ❌
                </button>
                </div>
              </li>
            ))}
                </ul>
      )}
    </div>
  );
};


export default TaskOutput
