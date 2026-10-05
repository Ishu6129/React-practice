import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { ThemeContextProvider } from '../ContextApi/Toogle/Theme'

function Layout() {
  const [themeMode, setThemeMode] = useState(() =>
    localStorage.getItem('themeMode') === 'dark' ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', themeMode === 'dark')
    localStorage.setItem('themeMode', themeMode)
  }, [themeMode])

  const darkTheme = () => setThemeMode('dark')
  const lightTheme = () => setThemeMode('light')

  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex h-screen flex-col bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <div className="flex min-h-0 flex-1 items-start justify-center overflow-y-auto p-6">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeContextProvider>
  )
}

export default Layout