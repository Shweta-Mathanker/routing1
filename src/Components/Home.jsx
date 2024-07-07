import React, { useState } from 'react'

const Home = () => {
  const [page,setpage]= useState(1);
  const [images,setimages]=useState([]);
 
  const getimages =async ()=>{
   try{
    const {data} = await axios.get(
     `https://picsum.photos/v2/list?page=${page}&limit=100`
    );
    setimages(data); 
   }
   catch(error){
     console.log(error);
   }
  };
  return  (
    <div>
      <div>
        {
          
        }
      </div>
    </div>
  )
}

export default Home