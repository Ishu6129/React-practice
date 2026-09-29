import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import ColorButton from './ColorButton'

const BgChange = () => {
  const { backgroundColor, setBackgroundColor } = useOutletContext()
  const colors = ['black', 'cyan', 'yellow', 'purple']

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor
  }, [backgroundColor])

  return (
    <main className={`w-full max-w-2xl text-center ${backgroundColor === 'black' || backgroundColor === 'purple' ? 'text-white' : 'text-gray-900'}`}>
      <h1 className="text-2xl font-bold">Background color</h1>
      <p className="mt-2">Choose a color to change the page background.</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {colors.map((color) => (
          <ColorButton
            key={color}
            color={color}
            onClick={() => setBackgroundColor(color)}
          />
        ))}
      </div>
      <p className="mt-4" aria-live="polite">Selected: {backgroundColor}</p>
    </main>
  )
}

export default BgChange