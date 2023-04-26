import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import ContactUS from '../Pages/ContactUS/ContactUS'

const AllRoutes = () => {
  return (
   <React.Fragment>
   <BrowserRouter>
   <Routes>
   <Route path={`/`} element={<Dashboard />} />
   <Route path={`/contactus`} element={<ContactUS />} />

   </Routes>
   </BrowserRouter>
   </React.Fragment>
  )
}

export default AllRoutes
