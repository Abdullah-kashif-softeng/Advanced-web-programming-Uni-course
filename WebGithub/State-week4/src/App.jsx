import React from 'react'
import { useState } from 'react'
const App = () => {
  
const [toggle,setToggle]=useState(false);

const handleToggle=()=>{
  setToggle(!toggle);
}
  return (
    <div className={`${toggle?`bg-black bg`:`bg-white`} h-screen w-full flex justify-center items-center`}>
      <button className='bg-gray-500 p-2 rounded-s' onClick={handleToggle}>{toggle?"OFF":"ON"}</button>
    </div>
  )
}

export default App