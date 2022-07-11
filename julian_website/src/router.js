import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./index";
import blog from "./pages/blog";
import games from "./pages/games";
import projects from "./pages/per_scholas_projects";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
                <Route index element={<Home />}></Route>
                <Route path="./pages/blog" element={<Blog />}></Route>    
                <Route path="./pages/games" element={<Games/>}></Route>
                <Route path="./pages/per_scholas_projects" element={<Projects />}></Route>
            </Routes>
        </BrowserRouter>
    );
}