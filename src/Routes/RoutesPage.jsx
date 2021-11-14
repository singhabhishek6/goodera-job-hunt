import React from 'react'
import {Routes,Route} from "react-router-dom"
import { PostAJob } from '../Components/PostAJob'
import { Home } from '../Pages/Home'
export const RoutesPage = () => {
    return (
       <div>
           <Routes>
               <Route exact path="/" element={<Home/>}/>
           </Routes>
           <Routes>
               <Route exact path="/post-a-job" element={<PostAJob/>}/>
           </Routes>
       </div>
    )
}
