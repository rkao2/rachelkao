import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box, Chip, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  { 
    title: 'Satellite List Service Prototype', 
    desc: 'Developed a prototype in Quarkus to evaluate against Spring Boot, replicating and extending core API functionality for native executable deployment.', 
    tech: ['Quarkus', 'Spring Boot', 'Kafka', 'Elasticsearch', 'Docker', 'Gradle', 'Kubernetes', 'Helm'], 
    date: 'June 2025',
    image: '/assets/satellitelistapi.png', // Add your screenshot image path here
    demoLink: '#', // Add live demo link if available
    codeLink: '#'  // Add GitHub link if available
  },
  { 
    title: 'AuraNotes', 
    desc: 'Our project, AuraNotes, is a web application designed to empower young adults, writers, and productivity enthusiasts with a high-quality, user-friendly mental health and mood-tracking tool. Built with CSS, HTML, and JavaScript, AuraNotes will offer seamless user authentication, organized entry creation, a robust search and filter feature, and a mood tracker to analyze emotional trends over time. This intuitive platform aims to help users understand and manage their mental well-being through thoughtful design and functionality.',
    tech: ['React', 'MongoDB'], 
    date: 'December 2024',
    image: '/assets/auranotesdemo1.gif',
    demoLink: '#',
    codeLink: 'https://github.com/rkao2/journal-app'
  },
  { 
    title: 'Care Voice', 
    desc: 'Full-stack medical translator mobile app bridging communication gaps between doctors and patients, featuring real-time translation and speech synthesis.', 
    tech: ['Deepl', 'Groq (Whisper AI, Meta Llama 70B)', 'Eleven Labs'], 
    date: 'June 2024',
    image: '/assets/care_voice.png',
    demoLink: 'https://devpost.com/software/care-voice',
    codeLink: 'https://github.com/rkao2/ucbhackathon24'
  },
  { 
    title: 'Good Eats', 
    desc: 'Full-stack web app that generates curated meal options with nutritional facts, backed by MySQL and Flask with a responsive React UI.', 
    tech: ['Google Gemini', 'Flask', 'MySQL', 'Python', 'React', 'Material UI'], 
    date: 'April 2024',
    image: '/assets/good_eats.png',
    demoLink: 'https://devpost.com/software/good-eats-a6o5y0',
    codeLink: 'https://github.com/rkao2/GoodEats'
  },
  
];

export default function ProjectsPage() {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.03 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card sx={{ borderRadius: 4, boxShadow: 4, height: "100%" }}>
                {project.image && (
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={`${project.title} screenshot`}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {project.date}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {project.desc}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
                    {project.tech.map((tech, i) => (
                      <Chip key={i} label={tech} variant="outlined" size="small" />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    {project.demoLink && (
                      <Button variant="contained" size="small" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        View Project
                      </Button>
                    )}
                    {project.codeLink && (
                      <Button variant="outlined" size="small" href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        View Code
                      </Button>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
