import React, { useState } from 'react';
import { Box } from '@mui/material';

import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

const openWidth = "250px";
const closedWidth = "88px"

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        openWidth={openWidth} 
        closedWidth={closedWidth} 
      />
      <Box 
        sx={{ 
          marginLeft: isOpen ? openWidth : closedWidth, 
          width: `calc(100vw - ${isOpen ? openWidth : closedWidth})` 
        }}
        id="body"
      >
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </Box>
    </Box>
  );
}

export default App;
