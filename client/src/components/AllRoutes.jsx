import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes from react-router-dom
import {Home} from '../pages/Home'; // Change import statement to use default import
import {Details} from '../pages/Details'; // Change import statement to use default import

const AllRoutes = () => { // Change export statement to use default export
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Details/>} />
        <Route path="/series" element={<Details/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes; // Change export statement to use default export
