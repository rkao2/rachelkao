// src/components/Experience.js
import React from 'react';
import { Container, Typography, Box, Grid, Divider } from '@mui/material';

const Experience = () => {
  return (
    <Container sx={{ py: 6 }}>
      

      {/* Education Section */}
    <Box sx={{ mb: 6 }}>
    <Typography
        variant="h4"
        component="h2"
        sx={{ fontFamily: '"Times New Roman", serif', fontWeight: 600, mb: 3 }}
    >
        Education
    </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* School 1 */}
            <Box>
            <Typography variant="h5" sx={{ fontFamily: '"Times New Roman", serif', fontWeight: 600 }}>
                University of California, Irvine
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: '"Lexend", sans-serif' }}>
                Bachelor of Science, Major in Computer Science
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: '"Lexend", sans-serif', color: 'text.secondary' }}>
                September 2024 - Exp. June 2026
            </Typography>
            </Box>

            {/* School 2 */}
            <Box>
            <Typography variant="h5" sx={{ fontFamily: '"Times New Roman", serif', fontWeight: 600 }}>
                Mt. San Antonio College
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: '"Lexend", sans-serif' }}>
                General Education
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: '"Lexend", sans-serif', color: 'text.secondary' }}>
                May 2022 – May 2024
            </Typography>
            </Box>
        </Box>
    </Box>

      <Divider sx={{ mb: 6 }} />

      {/* Work Experience Section */}
      <Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontFamily: '"Times New Roman", serif', fontWeight: 600, mb: 3 }}
        >
          Experience
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h5" sx={{ fontFamily: '"Times New Roman", serif', fontWeight: 600 }}>
                Software Engineer Intern
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: '"Lexend", sans-serif', fontWeight: 500 }}>
                BAE Systems Inc.
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: '"Lexend", sans-serif', color: 'text.secondary', mb: 2 }}>
                June 2025 – Sep 2025
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: '"Lexend", sans-serif', lineHeight: 1.6}}>
              I developed a Satellite List Service prototype in Quarkus to compare performance with Spring Boot, replicating and enhancing core API functionality for future native executable deployment. I delivered production-ready features using <br/>
              Kafka, Elasticsearch, Docker, Gradle, Kubernetes, and Helm to improve data retrieval, scalability, and reliability. I also built and deployed secure RESTful APIs with full CRUD functionality, Keycloak authentication, and role-based access controls, <br/>
              while integrating OpenAPI/Swagger UI for testing and implementing automated CI/CD pipelines with Gradle and GitLab-CI. <br/> 
              Beyond engineering, I co-led a team of 15 interns in a three-week fundraising initiative that raised $3,000 to purchase bicycles for military families.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <Typography variant="h5" sx={{ fontFamily: '"Times New Roman", serif', fontWeight: 600 }}>
                Tech Fellow
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: '"Lexend", sans-serif', fontWeight: 500 }}>
                Codepath
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: '"Lexend", sans-serif', color: 'text.secondary', mb: 2 }}>
                July 2024 – April 2025
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: '"Lexend", sans-serif', lineHeight: 1.6 }}>
              I lead a 10-week course for over 200 students, facilitating small groups of 4-6 through technical assignments involving React.js, JavaScript, publicly available APIs, and CRUD operations. I provide one-on-one support to address technical questions and challenges, while collaborating with fellow instructors to continuously refine the curriculum. These efforts have resulted in a 15% improvement in student project quality and positive feedback from 80% of participants.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <Typography variant="h5" sx={{ fontFamily: '"Times New Roman", serif', fontWeight: 600 }}>
                Teacher
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: '"Lexend", sans-serif', fontWeight: 500 }}>
                School Connection
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: '"Lexend", sans-serif', color: 'text.secondary', mb: 2 }}>
                Sep 2022 – Sep 2024
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: '"Lexend", sans-serif', lineHeight: 1.6 }}>
                I tutored over 20 students across grades K-9 in subjects including math, English, science, and social studies, tailoring my teaching approach to accommodate each student’s unique learning style. Additionally, I taught a 15-week math course for more than 10 fifth-grade students, preparing them thoroughly for the sixth-grade curriculum. Beyond instruction, I supported classroom operations by grading over 100 assignments and exams, while also creating study guides and review materials to help students succeed on upcoming tests.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Experience;