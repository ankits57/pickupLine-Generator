import React from 'react'
import { IoRefreshCircleSharp } from "react-icons/io5";

function Options({newData,setCat}) {
  return (
    <div>
        <button onClick={newData} className='flex m-auto border border-2 rounded rounded-md text-2xl p-2 bg-white'><IoRefreshCircleSharp className='mt-1 mr-1'/>Generate New</button>
    </div>
  )
}

export default Options