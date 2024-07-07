import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Components/Home'
import Library from '../Components/Library'
import Entry from '../Components/Entry'
import Details from '../Components/Details'
import NotFound from '../Components/NotFound'
const RoutesComponent = () => {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Create" element={<Entry/>} />
    <Route path="/Show" element={<Library/>}>
    <Route path="/Show/:id" element={<Details/>} />
   </Route>
    {/* isme hm next component me open ho jata hai vahi page m lane k liye we use uppar vala tarika */}
    <Route path="/Show/:id" element={<Details/>}/>   
<Route path="*" element={<NotFound/>}/>
 </Routes>
  )
}

export default RoutesComponent