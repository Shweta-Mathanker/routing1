import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Details = () => {
    const {id}= useParams();
    const navigate= useNavigate();
  return (
    <div>
        <h1>Details</h1>
        <h1 className='ml-5'>
            Book Id:<span className='font-extrabold ml-3'>{id} </span>
        </h1>
        <button className=' mt-2  ml-4  px-6 py-3 bg-red-200' onClick={()=> navigate("/")} > BackHome </button>
        <button className=' mt-2  ml-4  px-6 py-3 bg-red-200' onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Details