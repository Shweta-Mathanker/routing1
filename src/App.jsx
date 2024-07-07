import React from 'react'
import Nav from './Components/Nav'
import axios from 'axios'
import RoutesComponent from './Routes/RoutesComponent'
const App = () => {
  const getusers=async ()=>{
  try{
   const {data}=await axios.get(
    "https://jsonplaceholder.typicode.com/users"
   )

  }
  catch(err){
    console.log(err)
  }
  };
  return (
    <div>
       <Nav/>
        <RoutesComponent/>
    </div>
  )
}

export default App