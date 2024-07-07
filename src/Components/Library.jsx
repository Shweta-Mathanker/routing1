import axios from '../helpers/axios';
import React from 'react'
import { Link, Outlet,useLocation} from 'react-router-dom'

const Library = () => {
  const {pathname}=useLocation();
 const getUser = async ()=>{
  try{
    const{data}=await axios.get("users");
    console.log(data)
  }
  catch(error){
    console.log(error);

  }
 };
  return (
   <div>
     <h1 className='text-2xl'>Library</h1>
     <hr />
     <button></button>
     <hr />
     <ul>
      <li>
        <Link className='list-item' to={"/show/1"} > Book 1</Link>
        {/* use location use krne k liye link me  to  ={`${pathname}/1} */}
      </li>
      <li>
        <Link className='list-item' to="/show/2" > Book 2</Link>
      </li>
      <li>
        <Link className='list-item' to="/show/3" > Book 3</Link>
      </li>
     </ul>
     
     <button className=' mt-2  ml-4  px-6 py-3 bg-red-200' onClick={getUser}>GET USER DATA</button>
 
     <hr className='mt-4' />
 
  <Outlet/>
     
   </div>
 
  )
}

export default Library