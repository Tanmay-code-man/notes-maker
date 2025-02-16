import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
const page = () => {
  
  return (
    <div className="w-full h-screen bg-zinc-800 relative">
      <Background/>
      <Foreground/>
      
    </div>
  )
}

export default page