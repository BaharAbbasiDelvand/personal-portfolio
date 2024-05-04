import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Navbar from './components/Navbar/Navbar/Nav';
import AboutMe from './Pages/About/AboutMe';
import Skills from './Pages/MySkills/Skills';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <AboutMe/>
      <Skills />
      <Projects />
      <Contact />
      {/* <Buttons /> */}
      </header>
    </div>
  );
}

export default App;
