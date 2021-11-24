import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home"
import Album from "../pages/Album"

const Routers = () => {
    return(
    
        <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/album" element={<Album/>}/>
                </Routes>
        </BrowserRouter>     
    
    );
}

export default Routers;