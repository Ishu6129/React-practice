import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo } from './features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

  return (
    <>
    <div className="font-bold text-lg m-2 flex justify-center"
     >TODOS</div>
    {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between items-center border border-black/10 rounded-lg px-3 py-1.5 my-2 bg-white/20">
            <span>{todo.title}</span>
            <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-600 text-white px-2 py-1 rounded-lg"
            >
                Remove
            </button>
        </div>
    ))}
    </>
  )
}

export default Todos