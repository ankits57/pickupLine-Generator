import React from 'react'
let x = Math.floor((Math.random() * 15) + 1)
function Line({line}) {
  return (
    <>
    
    <div className='font-primary text-white tracking-widest text-center mt-5 border-solid border-2 m-4 rounded rounded-lg'>
        <h3 className='p-6 text-justify text-5xl'>{line.text}</h3>
    </div>
    <div>
        <h3 className='m-4 text-white font-bold text-xl text-center w-fit p-2 border border-2 rounded rounded-lg'>{line.category}</h3>
    </div>
    </>
  )
}

export default Line