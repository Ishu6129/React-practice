import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    const linkClass = ({ isActive }) =>
        `rounded px-3 py-2 ${isActive ? 'bg-blue-50 font-semibold text-blue-700 animate-bounce dark:bg-blue-950 dark:text-blue-300' : 'text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300'}`

    return (
        <footer className="mt-auto border-t bg-white p-4 text-center text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
            <div className="mt-2 flex flex-wrap justify-center gap-3">
                <NavLink to="/back-drop" className={linkClass}>Back Drop</NavLink>
                <NavLink to="/hash-gen" className={linkClass}>Hash Gen</NavLink>
                <NavLink to="/coin-shift" className={linkClass}>Coin Shift</NavLink>
                <NavLink to="/task-list" className={linkClass}>Task List</NavLink>
            </div>
        </footer>
    )
}

export default Footer