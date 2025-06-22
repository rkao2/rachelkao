// components/About.js
import { Typography, Container } from '@mui/material';

const About = () => (
  <Container id="about" sx={{ py: 5 }}>
    <Typography variant="h4" gutterBottom>About Me</Typography>
    <Typography variant="body1">
      I'm Rachel Kao, a computer science student passionate about frontend development, HCI, and creating meaningful web experiences.
    </Typography>
  </Container>
);


export default About;