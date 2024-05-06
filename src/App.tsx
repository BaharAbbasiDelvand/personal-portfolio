import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Navbar from './components/Navbar/Navbar/Nav';
import AboutMe from './Fragments/About/AboutMe';
import Skills from './Fragments/MySkills/Skills';
import Projects from './Fragments/Projects/Projects';
import Contact from './Fragments/Contact/Contact';
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
