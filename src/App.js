// src/App.js
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';

import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container>

      <Navbar/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>


    </Container>
  );
}

export default App;

