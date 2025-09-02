// src/components/About.js
import React, { useState } from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const hobbies = [
  { title: 'Golden Gate Bridge 🌉', img: '/assets/img1.jpg' },
  { title: 'Arboretum ⛲️', img: '/assets/img2.jpg' },
  { title: 'Summerlands Concert 2025 🎵', img: '/assets/img3.jpg' },
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
          fontFamily: '"Nanum Pen Script", "Comic Sans MS", cursive',
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
          {hobbies.map((item, index) => {
            const isCurrent = index === currentPage;
            const isNext = index === (currentPage + 1) % hobbies.length;

            // Random rotation for stacked card
            const randomRotation = isNext ? Math.random() * 10 - 5 : 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50, rotate: Math.random() * 10 - 5 }}
                animate={{
                  opacity: isCurrent ? 1 : isNext ? 0.6 : 0,
                  x: isCurrent ? 0 : isNext ? 10 : 0, // slight horizontal offset for next card
                  y: isCurrent ? 0 : isNext ? 10 : 0, // slight vertical offset
                  rotate: isCurrent ? 0 : randomRotation,
                  scale: isCurrent ? 1 : isNext ? 0.95 : 0.9,
                  zIndex: isCurrent ? 2 : isNext ? 1 : 0,
                  boxShadow: isCurrent
                    ? '0px 10px 20px rgba(0,0,0,0.3)'
                    : isNext
                    ? '0px 6px 12px rgba(0,0,0,0.15)'
                    : 'none',
                }}
                transition={{ duration: 0.5 }}
                drag={isCurrent}
                dragConstraints={{ top: -80, bottom: 80, left: -80, right: 80 }}
                dragElastic={0.3}
                whileTap={isCurrent ? { cursor: 'grabbing', rotate: Math.random() * 20 - 10 } : {}}
                onDragEnd={isCurrent ? (event, info) => {
                  if (info.offset.x > 50) nextPage();
                  else if (info.offset.x < -50) prevPage();
                } : undefined}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: isCurrent ? 'grab' : 'default',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: '#fff',
                    borderRadius: 2,
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
                    src={item.img}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: 260,
                      objectFit: 'cover',
                      borderRadius: 1,
                      boxShadow: isCurrent ? 3 : 1,
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mt: 1,
                      fontFamily: '"Nanum Pen Script", cursive',
                      fontSize: 16,
                      textAlign: 'center',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}

          {/* Navigation arrows */}
          <Box sx={{ position: 'absolute', top: '50%', left: -40, transform: 'translateY(-50%)' }}>
            <IconButton onClick={prevPage}>
              <ArrowBackIosIcon />
            </IconButton>
          </Box>
          <Box sx={{ position: 'absolute', top: '50%', right: -40, transform: 'translateY(-50%)' }}>
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
