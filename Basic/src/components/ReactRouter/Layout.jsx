import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  const [backgroundColor, setBackgroundColor] = useState('white')

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center p-6">
        <Outlet context={{ backgroundColor, setBackgroundColor }} />
      </div>
      <Footer />
    </div>
  )
}

export default Layout