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
      Hi, I’m Rachel Kao—a frontend developer and Computer Science student at UC Irvine. I love building websites, exploring new tech, and expressing creativity through journaling, baking, and reading. I’m always learning, growing, and taking on new challenges—scroll down to see my projects and resume!
    </Typography>
    
    </motion.div>
  </Container>
);

export default About;
