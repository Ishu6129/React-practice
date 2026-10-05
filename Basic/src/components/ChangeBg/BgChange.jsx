import React, { useEffect, useState } from 'react'
import ColorButton from './ColorButton'

const BgChange = () => {
  const [backgroundColor, setBackgroundColor] = useState(() => {
    const savedColor = localStorage.getItem('backgroundColor')
    return savedColor ? savedColor : 'black'
  })
  const colors = ['black', 'cyan', 'yellow', 'purple']
  useEffect(() => {
    localStorage.setItem('backgroundColor', backgroundColor)
  }, [backgroundColor])
  return (
    <main
      style={{ backgroundColor }}
      className={`flex flex-col justify-center w-full h-full rounded-lg px-6 py-8 text-center ${backgroundColor === 'black' || backgroundColor === 'purple' ? 'text-white' : 'text-gray-900'}`}
    >
      <h1 className="text-2xl font-bold">BACK DROP</h1>
      <p className="mt-2">Choose a color to change this panel's background.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {colors.map((color) => (
          <ColorButton
            key={color}
            color={color}
            isSelected={color === backgroundColor}
            onClick={() => setBackgroundColor(color)}
          />
        ))}
      </div>
      <p className="mt-4" aria-live="polite">Selected: {backgroundColor}</p>
    </main>
  )
}

export default BgChange