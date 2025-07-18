import { createContext,useContext } from "react";

export const  TodoContext=createContext({
    todos:[{
        id:1 ,//unique number
        todo:"task",
        completed:false//checker box default value false unchecked
    }//like this object are get added in array for every task
],
addTodo: (todo)=>{},
UpdateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleComplete:(id)=>{}

})

export const useTodo =() =>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider