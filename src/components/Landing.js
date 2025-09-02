// src/components/LandingPage.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import AnimatedHeading from './AnimatedHeading';

const LandingPage = () => {

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Sky background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, #A0F6FF, #FDFCF6)',
          zIndex: -3,
        }}
      />

      {/* Clouds */}
      <motion.img
        src="/assets/cloud1.png"
        alt="front cloud"
        initial={{ x: 0, y: 0, opacity: 0.9, scale: 1.3 }}
        animate={{ x: -1400, y: -150, opacity: 0, scale: 1.3 }}
        transition={{ duration: 3, ease: 'easeInOut', delay: 0.4 }}
        style={{
          position: 'fixed',
          top: '0%',
          left: '-10%',
          width: 1600,
          zIndex: 6,
          pointerEvents: 'none',
        }}
      />

      <motion.img
        src="/assets/cloud1.png"
        alt="middle cloud"
        initial={{ x: 0, y: 0, opacity: 0.8, scale: 1.2 }}
        animate={{ x: 1300, y: 100, opacity: 0, scale: 1.2 }}
        transition={{ duration: 3, ease: 'easeInOut', delay: 0.6 }}
        style={{
          position: 'fixed',
          top: '25%',
          left: '10%',
          width: 1500,
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      <motion.img
        src="/assets/cloud2.png"
        alt="back cloud"
        initial={{ x: 0, y: 0, opacity: 0.7, scale: 1.1 }}
        animate={{ x: -900, y: -50, opacity: 0, scale: 1.1 }}
        transition={{ duration: 3, ease: 'easeInOut', delay: 0.8 }}
        style={{
          position: 'fixed',
          top: '45%',
          left: '5%',
          width: 1100,
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />

      <motion.img
        src="/assets/cloud3.png"
        alt="back cloud"
        initial={{ x: 0, y: 0, opacity: 0.6, scale: 1.05 }}
        animate={{ x: 900, y: 70, opacity: 0, scale: 1.05 }}
        transition={{ duration: 3, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'fixed',
          top: '65%',
          left: '50%',
          width: 1000,
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Landing Content (directly on the page) */}
      <Container
        maxWidth="md"
        sx={{
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2,
          color: '#1E1E2F',
          px: 3,
        }}
      >
        <motion.div
          animate={{ y: ["0%", "-2%", "0%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
        <AnimatedHeading text="Hi, I’m Rachel Kao" />


          <Typography
            variant="h4"
            sx={{
              mb: 5,
              fontWeight: 400,
              lineHeight: 1.5,
              fontSize: '1.4rem',
            }}
          >
            Fullstack Developer & HCI Enthusiast <br />
            Dedicated to learning, growing, and crafting elegant user experiences
          </Typography>

          <ScrollLink to="projects" smooth={true} duration={700} offset={-70}>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: 3,
                px: 5,
                fontWeight: 600,
                backgroundColor: '#6AC4FF',
                color: '#fff',
                fontFamily: '"Roboto", sans-serif',
                boxShadow: '0px 5px 15px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#4DA1D1',
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              View My Work
            </Button>
          </ScrollLink>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LandingPage;
