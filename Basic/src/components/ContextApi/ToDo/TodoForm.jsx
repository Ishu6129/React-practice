import React from 'react'
import { useTodoContext } from './todoContext'
import { useState } from 'react'
const TodoForm = () => {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodoContext();

  return (
        <form  className="flex" onSubmit={(e) => {
            e.preventDefault();
            const todoMsg = todo.trim();
            if (!todoMsg) return;
            addTodo({ todoMsg, completed: false });
            setTodo("")
        }}>
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
    );
}

export default TodoForm