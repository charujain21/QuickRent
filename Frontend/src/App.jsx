// import { useState } from 'react'
import React from 'react'
import Home from './home/Home'
import {Route, Routes} from "react-router-dom";
import Rentareas from './Rentareas/Rentareas';
import Aboutus from './Aboutus';
import Categories from './components/categories';
import Signup from './components/Signup';

function App() {
  return (
    <>
    {/* <Home />
    <RentalAreas /> */}
    <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/Rentarea" element={<Rentareas />}/>
  <Route path="/Aboutus" element={<Aboutus />}/>
  <Route path="/Categories" element={<Categories />}/>
  <Route path="/Signup" element={<Signup />}/>
</Routes>
    </>
  )
}

export default App
