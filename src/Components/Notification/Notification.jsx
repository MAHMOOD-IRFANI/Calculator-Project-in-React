import React from 'react'

function Notification({value}) {
//   if(value>0){

//   }

    return (
        <>
        {value > 0 && value>0 && <div className='px-5 py-3 bg-green-600 rounded   relative  cursor-pointer hover:bg-green-700'>      <h1>Notifications</h1>
<span className='absolute -top-3 -right-2 bg-red-700 p-2 h-7 w-7  rounded-full items-center justify-center flex'>{value}</span>
    </div>}
        </>
     ) 
    
  
}

export default Notification
