import axios from '../helpers/axios';
import React, { useState } from 'react'

const Entry = () => {
  const [post,setpost]=useState(null);
  const getPosts = async ()=>{
    try{
      const{data}=await axios.get("posts");
      console.log(data)
      setpost(post)
    }
    catch(error){
      console.log(error);
  
    }
   };
  return (
    <div>
      <h1 className='text-2xl mt-8 ml-8 text-red-400 '>SHOW POST </h1>
         <button className=' mt-2  ml-4  px-6 py-3 bg-red-200' onClick={getPosts}>GET POST DATA</button>

   <ul className='list-disc mt-5'>
  {post ? post.map ((u)=>{
    <li key ={u.id}>{u.title}</li>
  }) :"Loading..."}
   </ul>
    </div>
  )
}

export default Entry