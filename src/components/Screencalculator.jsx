import React from 'react'

function Screencalculator({number}) {
  return (
    <div className='bg-slate-800 mx-2 my-1 px-3 py-2 flex justify-end font-bold h-16 overflow-hidden rounded-lg text-4xl'>
        {number}
    </div>
  )
}

export default Screencalculator