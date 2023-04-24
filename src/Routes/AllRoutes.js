import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'

const AllRoutes = () => {
  return (
   <React.Fragment>
   <BrowserRouter>
   <Routes>
   <Route path={`/`} element={<Dashboard />} />
   </Routes>
   </BrowserRouter>
   </React.Fragment>
  )
}

export default AllRoutes
