import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    const linkClass = ({ isActive }) =>
        `rounded px-3 py-2 ${isActive ? 'bg-blue-50 font-semibold text-blue-700' : 'text-gray-700 hover:text-blue-700'}`

    return (
        <footer className="mt-auto border-t bg-white p-4 text-center text-sm text-gray-600">
            <div className="mt-2 flex flex-wrap justify-center gap-3">
                <NavLink to="/background-changer" className={linkClass}>Background Changer</NavLink>
                <NavLink to="/password-generator" className={linkClass}>Password generator</NavLink>
                <NavLink to="/currency-converter" className={linkClass}>Currency converter</NavLink>
            </div>
        </footer>
    )
}

export default Footer