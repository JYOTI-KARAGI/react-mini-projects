import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos,settodos]=useState([])//empty array

  const addTodo =(todo)=>{
    // here todo is task with checked method and prev is also whole set of todo list which is added previosly
    // new task id is added with using timestamp ,spreaded(then the todo msg, completetoggle) which are a object,
    // prev tasks array is speaded   
    settodos((prev)=>[{id: Date.now(),...todo},...prev])
  }

  const UpdateTodo =(id,todo)=>{
    // for updateing the todo call the prevtodos for each todo match with id 
    // if its matches with id then new updated to otherwise the prevtodo
    settodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id ? todo:prevtodo))
  }

  const deleteTodo =(id)=>{
    // In deleting the todo task check wether it is matching with id the expect that task return (filter)todos
    settodos((prev)=>prev.filter((todo)=>(todo.id !==id)))
  }

  const toggleComplete=(id)=>{

    // For completed task marking take all the todos map each todo with id if it is mathde then 
    // keep the todo prop same just then the complete prop to its reverse
    settodos((prev)=>prev.map((prevtodo)=>prevtodo.id ===id ?{...prevtodo,completed:!prevtodo.completed}:prevtodo))
  }

useEffect(()=>{
  // getItems on load JSON.parse convert string to JSON fomat before loading 
const todos=JSON.parse(localStorage.getItem("todos"))
// if todos exist and lenght is >0 then only load on page
if(todos && todos.length > 0){
  settodos(todos);
}else return;
  
},[])

// setItem localStoarge whenever task added
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])//todos from array list

  return (
<TodoProvider value={{todos,addTodo,UpdateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-gray-700 min-h-screen py-8">
       <div className=" bg-gray-700 w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
           <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
           <div className="mb-4">
               {/* Todo form goes here */} 
              <TodoForm/>

           </div>
           <div className="flex flex-wrap gap-y-3">
               {/*Loop and Add TodoItem here */}
              {todos.map((todo)=>(
                <div key={todo.id}
                className='w-full'>
                  <TodoItem todo={todo} />
                </div>
              ))}

               
           </div>
       </div>
   </div>    
            
 </TodoProvider>
  )
}

export default App
