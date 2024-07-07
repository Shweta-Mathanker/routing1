import React from 'react'
import {NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='w-screen   flex gap-[20px] justify-center '>
       <NavLink style={(e)=>({fontWeight:e.isActive ? "900":"400" })} className={(e)=>(e.isActive ?"text-red-300":"")}  to='/'>Home</NavLink>
       <NavLink style={(e)=>({fontWeight:e.isActive ? "900":"400" })} className={(e)=>(e.isActive ?"text-red-300":"")} to='/Create'>Create Page</NavLink>
       <NavLink style={(e)=>({fontWeight:e.isActive ? "900":"400" })} className={(e)=>(e.isActive ?"text-red-300":"")} to='/Show'>Show page</NavLink>
    </div>
  )
}

export default Nav