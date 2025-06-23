// src/App.js
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {

  

  return (
  
    <div>
      <Navbar/>
      <Landing/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

