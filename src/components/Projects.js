// src/components/Projects.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  { title: 'AuraNotes', desc: 'Mental health and mood tracking app built with React.' },
  { title: 'Carbon Footprint Tracker', desc: 'Tool to track transportation and electricity usage.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Projects = () => (
  <Container id="projects" sx={{ py: 5 }}>
    <Typography variant="h4" gutterBottom>Projects</Typography>
    <Grid container spacing={3}>
      {projects.map((proj, i) => (
        <Grid item xs={12} sm={6} md={4} key={proj.title}>
          <motion.div
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card>
              <CardContent>
                <Typography variant="h6">{proj.title}</Typography>
                <Typography>{proj.desc}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
