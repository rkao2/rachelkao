// src/components/About.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import {motion} from 'framer-motion';

const About = () => (
  <Container id="about" sx={{ py: 5 }}>
    <motion.div
      initial={{ opacity: 0, y: 30}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 0.8 }}
    >
    <Typography variant="h4" gutterBottom>About Me</Typography>
    <Typography>
      I'm Rachel Kao, a passionate frontend developer and computer science student.
    </Typography>
    
    </motion.div>
  </Container>
);

export default About;
