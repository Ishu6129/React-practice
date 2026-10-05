import React from 'react'
import TodoForm from './TodoForm'
import { useEffect, useState } from 'react'
import {TodoProvider} from './todoContext'
import TodoItem from './TodoItem'
const App = () => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    const addTodo = (todoMsg) => {
        const newTodo = {
            id: Date.now(),
            ...todoMsg
        };
        setTodos((previousTodos) => [...previousTodos, newTodo]);
    }
    const editTodo = (id,todo)=>{
        setTodos((pre)=>pre.map(
            (todoItem)=>(todoItem.id===id?todo:todoItem)))
    }
    const deleteTodo = (id) => {
        setTodos((pre)=>pre.filter((todoItem)=>todoItem.id!==id))
    }
    const toggleCompleted = (id) => {
        setTodos((pre)=>pre.map((todoItem)=>(todoItem.id===id?{...todoItem,completed:!todoItem.completed}:todoItem)))
    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

  return ( 
    <TodoProvider value={{todos,addTodo,deleteTodo,editTodo,toggleCompleted}}>
        <div className="h-full min-h-0 w-2/3 rounded-2xl bg-[#172842] py-4">
            <div className="mx-auto flex h-full min-h-0 w-full max-w-2xl flex-col rounded-lg px-4 py-3 text-white shadow-md">
                <h1 className="mt-2 mb-8 shrink-0 text-center text-2xl font-bold">TASK LIST</h1>
                <div className="mb-4">
                    <TodoForm/>
                </div>
                <div className="min-h-0 flex-1 space-y-3 overflow-y-auto">
                    {todos.map((todo) => (
                          <div key={todo.id}
                          className="w-full"
                          >
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