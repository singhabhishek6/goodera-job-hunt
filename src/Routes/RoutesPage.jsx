import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from '../Pages/Home'
export const RoutesPage = () => {
    return (
       <div>
           <Routes>
               <Route exact path="/" element={<Home/>}/>
           </Routes>
       </div>
    )
}
