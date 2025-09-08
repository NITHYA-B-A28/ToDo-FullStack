import {useState} from 'react'
import './App.css'
import Login from './components/Login'
import TaskManager from './components/TaskManager'

function App() {
 const[user,setUser]=useState(null)

  return (
  
      <div>
        <h1>Todo app</h1>
        {!user?(
          <Login onLogin={(user) => setUser(user)} />
        ):(
        <TaskManager/>
        )}
    </div>
   
  )
}

export default App