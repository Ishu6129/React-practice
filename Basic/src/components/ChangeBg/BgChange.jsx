import React from 'react'
import ColorButton from './ColorButton'

const BgChange = () => {
  return (
    <div className="fixed bottom-7 left-7/8 flex -translate-x-1/2 gap-4 bg-amber-100 p-2 rounded-2xl border-black border-3">
        <ColorButton color="black"/>
        <ColorButton color="cyan"/>
        <ColorButton color="yellow"/>
        <ColorButton color="purple"/>
    </div>
  )
}

export default BgChange