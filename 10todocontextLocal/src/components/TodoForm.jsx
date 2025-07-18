import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {

    // For individual todo initial its empty
    const [todo,settodo]=useState("")
    // functionity addtodo call from usetodo hook

    const {addTodo}=useTodo();

    const add=(e)=>{
       e.preventDefault()
    //    check if any todo is added otherwise return
       if(!todo) return
    // in app.jsx during addtodo method defination we already added id and spreaded reamining prop
    // so here add todo with new todo value (state variable)
       addTodo({todo:todo,completed:false})
    //    after adding set input field empty
    settodo("");
    }

    

    return (
        <form  className="flex"  onSubmit={add}>
            <input
               
                type="text"
                placeholder="Write To do..."
                value={todo}
                onChange={(e)=>settodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

