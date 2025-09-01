import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const LandingPage = () => {
  return (
    <Box
        sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg,#A0F6FF 0%, #6AC4FF 50%, #3642C6 100%)',




            color: '#fff',
            px: 3,
        }}
    >

      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
            Hi, I’m Rachel Kao
          </Typography>
          <Typography variant="h5" sx={{ mb: 5, fontWeight: 400, lineHeight: 1.5 }}>
            Fullstack Developer & HCI Enthusiast <br />
            Dedicated to learn, grow, and craft elegant user experiences
          </Typography>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={700}
            offset={-70} // adjust if you have a fixed navbar height
          >
            <Button
              variant="contained"
              size="large"
              sx={{ borderRadius: 3, px: 5, fontWeight: 600 }}
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
