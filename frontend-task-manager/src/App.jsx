import {useState} from 'react'
import './App.css'
import Login from './components/Login'
import TaskManager from './components/TaskManager'
import UpForm from './components/UpForm'

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
         <UpForm/>
    </div>
   
  )
}

export default App