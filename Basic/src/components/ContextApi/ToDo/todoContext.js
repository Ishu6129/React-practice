import React from 'react'
import {createContext,useContext} from 'react'


export const TodoContext = createContext({
  todos:[
    {
      id:1,
      todoMsg:"Learn React",
      completed:false
    }
  ],
  addTodo:()=>{},
  deleteTodo:()=>{},
  editTodo:()=>{},
  toggleCompleted:()=>{}
})

export const TodoProvider=TodoContext.Provider

export const useTodoContext = () => {
    return useContext(TodoContext)
}
