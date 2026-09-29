import React from 'react'

const ColorButton = ({ color, isSelected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={color}
      aria-pressed={isSelected}
      className={`h-10 w-10 rounded-full border ${isSelected ? 'ring-2 ring-offset-2 ring-blue-600' : ''}`}
      style={{ backgroundColor: color }}
    />
  )
}

export default ColorButton