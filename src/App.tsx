import React from "react";
import "./App.css";
import Navbar from "./components/old/Navbar/Navbar/Nav";
import AboutMe from "./Fragments/About/AboutMe";
import Skills from "./Fragments/MySkills/Skills";
import Projects from "./Fragments/Projects/Projects";
import Contact from "./Fragments/Contact/Contact";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Old from "./Pages/Old";
import New from "./Pages/New";
function App() {
    return (
        <Router>
        <div className="App">
            <Routes>
            <Route path="/" element={<Old/>}/>
            <Route path="abc" element={<New/>}/>
            </Routes>
        </div>
        </Router>
    );
}

export default App;
