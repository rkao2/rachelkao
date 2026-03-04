import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        zIndex: 10,
        borderRadius: 0,
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
      }}
    >
      <Toolbar sx={{ 
        '& .MuiButton-root': { color: '#000' }, 
        
      }}>
        <Typography variant="h6" sx={{ 
          flexGrow: 1, 
          color: '#000',
          fontFamily: '"Playfair Display", serif',
        }}>
          Rachel Kao
        </Typography>
        <Button href="#about"
          sx={{
            
            fontFamily: '"Playfair Display", serif',
            '&:hover': {
                textDecoration: 'underline',       // underline on hover
                backgroundColor: 'transparent',    // optional: remove default hover bg
            },
          }}
          >About</Button>
        <Button href="#projects"
          sx={{
           
            fontFamily: '"Playfair Display", serif',
            '&:hover': {
                textDecoration: 'underline',       // underline on hover
                backgroundColor: 'transparent',    // optional: remove default hover bg
            },
          }}
          >Projects</Button>
          
        <Button href="#contact"
          sx={{
            color: '#fff',
            fontFamily: '"Playfair Display", serif',
            '&:hover': {
                textDecoration: 'underline',       // underline on hover
                backgroundColor: 'transparent',    // optional: remove default hover bg
            },
          }}
          >Contact</Button>
          
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
