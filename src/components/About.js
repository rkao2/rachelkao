// src/components/About.js
import React, { useState } from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const hobbies = [
  { title: 'Golden Gate Bridge 🌉', img: '/assets/img1.jpg'},
  { title: 'Arboretum ⛲️', img: '/assets/img2.jpg' },
  { title: 'Summerlands Concert 2025 🎵', img: '/assets/img3.jpg' },
  // Add more hobbies as needed
];

const About = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % hobbies.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + hobbies.length) % hobbies.length);
  };

  return (
    <Container id="about" sx={{ py: 5 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 4, md: 8 },
          fontFamily: '"Nanum Pen Script", "Comic Sans MS", cursive', // Polaroid-style font
        }}
      >
        {/* Text on the left */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            About me
          </Typography>
          <Typography variant="body1">
            I’m a fullstack developer and Computer Science student at UC Irvine. I love building websites, exploring new tech, and expressing creativity through journaling, baking, and reading. I’m always learning, growing, and taking on new challenges—scroll down to see my projects and resume!
          </Typography>
        </Box>

        {/* Slideshow Polaroid Card on the right */}
        <Box sx={{ position: 'relative', width: 260, height: 320 }}>
          <AnimatePresence initial={false}>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Polaroid Frame */}
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  bgcolor: '#fff',
                  borderRadius: 2,
                  boxShadow: 6,
                  border: '4px solid #f0f0f0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  p: 1.2,
                }}
              >
                <Box
                  component="img"
                  src={hobbies[currentPage].img}
                  alt={hobbies[currentPage].title}
                  sx={{
                    width: '100%',
                    height: 260,
                    objectFit: 'cover',
                    borderRadius: 1,
                    boxShadow: 3,
                  }}
                />
                <Typography variant="subtitle2" 
                sx={{ 
                  mt: 1,
                  fontFamily: '"Nanum Pen Script", cursive',
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                  {hobbies[currentPage].title}
                </Typography>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: -40,
              transform: 'translateY(-50%)',
            }}
          >
            <IconButton onClick={prevPage}>
              <ArrowBackIosIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: -40,
              transform: 'translateY(-50%)',
            }}
          >
            <IconButton onClick={nextPage}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
