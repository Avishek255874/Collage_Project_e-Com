import React from 'react'
import Scroll from './Scroll'
import Fresh from './Fresh'
import List from './List'

const Menubar = () => {
  return (
    <div className='bg-slate-900 text-white p-2 flex justify-around'>
    <Scroll/>
    <Fresh/>
    <List/>
  
    
    </div>
  )
}

export default Menubar