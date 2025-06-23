import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        borderRadius: 0,
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Rachel Kao
        </Typography>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#projects">Projects</Button>
        <Button color="inherit" href="#resume">Resume</Button>
        <Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
