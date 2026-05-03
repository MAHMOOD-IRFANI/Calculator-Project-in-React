import React from 'react'
import Notification from '../../Notification/Notification'

function Navbar() {
  return (
    <div className='flex justify-between bg-black text-white  p-5 items-center '>
        
            <h1 className='font-bold text-xl'>My Website</h1>
        <ul className='flex gap-5'>
            <li>Home </li>
            <li>About </li>
            <li>Features </li>
        </ul>
      <Notification value={0} />
    </div>
  )
}

export default Navbar
