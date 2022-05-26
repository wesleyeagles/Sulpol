import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Navbar from "./components/Navbar/Navbar";
import ASulpol from "./pages/ASulpol";

function RoutesDOM() {

   return(
       <BrowserRouter>
           <TopNavBar />
           <Navbar />
          <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Contato' element={<Contato/>} />
           <Route path='/A-Sulpol' element={<ASulpol/>} />
          </Routes>
       </BrowserRouter>
   )
}

export default RoutesDOM;