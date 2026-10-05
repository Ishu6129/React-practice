import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ContextApi/Toogle/Button'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const navLinkClass = ({ isActive }) =>
    `rounded px-3 py-2 ${isActive ? 'bg-blue-50 font-semibold text-blue-700 animate-bounce dark:bg-blue-950 dark:text-blue-300' : 'text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-300'}`

  return (
    <header className="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
      <nav aria-label="Main navigation" className="relative mx-auto max-w-5xl p-3">
        <button
          type="button"
          className="flex flex-col gap-1 p-2 sm:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-0.5 w-5 bg-gray-800 dark:bg-gray-200" />
          <span className="h-0.5 w-5 bg-gray-800 dark:bg-gray-200" />
          <span className="h-0.5 w-5 bg-gray-800 dark:bg-gray-200" />
        </button>
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Button />
        </div>
        <div className={`${menuOpen ? 'flex' : 'hidden'} flex-col gap-1 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2`}>
          <NavLink to="/" end className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header