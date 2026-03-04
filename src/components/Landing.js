// src/components/LandingPage.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import NavBar from './Navbar';
import Experience from './Experience';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <NavBar />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',       // scrolls with page
          width: '100%',
          height: '60vh',             // 60% of viewport height
          mt: '64px',      
          backgroundImage: `url(${process.env.PUBLIC_URL}/backgroundimg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',   // vertically center text
          alignItems: 'flex-start',   // align text left
          pl: { xs: 3, md: 10 },      // left padding
          pt: '64px',                 // push content below navbar
          zIndex: 0,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: '#fff',
            textAlign: 'left',
          }}
        >
          Education, experience, etc.
        </Typography>

        <ScrollLink to="projects" smooth={true} duration={700} offset={-70}>
          
        </ScrollLink>
      </Box>

      {/* Additional content below hero */}
      <Box sx={{ minHeight: '100vh', p: 3, 
        fontFamily: '"Playfair Display", serif',
        fontSize: { xs: 16, md: 18 },
        
      }}>
        {<Experience />}
      </Box>
    </Box>
  );
};

export default LandingPage;