import React from 'react'

const ColorButton = (props) => {
    const handleClick=()=>{
        document.body.style.backgroundColor=props.color;
    }
  return (
    <button
      onClick={handleClick}
      className="rounded-md border-2 border-black px-4 py-2 font-semibold capitalize text-white hover:opacity-80"
      style={{ backgroundColor: props.color }}
    >
      {props.color}
    </button>
  )
}

export default ColorButton