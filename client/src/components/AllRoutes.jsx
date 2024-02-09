import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import  Details  from '../pages/Details'; 
import { Home } from '../pages/Home'; 
import Search from '../pages/Search';


const AllRoutes = () => { 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes;
