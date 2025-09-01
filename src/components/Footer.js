// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
  >
    <Box sx={{ backgroundColor: '#f5f5f5', py: 3, mt: 5 }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Rachel Kao. All rights reserved.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
          Built with 💻 React & MUI |
          {' '}
          <Link href="https://github.com/rkao2" target="_blank" rel="noopener" underline="hover">
            GitHub
          </Link>{' '}
          |{' '}
          <Link href="mailto:rachelsingkao@gmail.com" underline="hover">
            Email Me
          </Link>
        </Typography>
      </Container>
    </Box>
  </motion.div>
);

export default Footer;
