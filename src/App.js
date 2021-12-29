import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Project from "./Project";


const App = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App;