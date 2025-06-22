// components/Resume.js
import { Container, Typography, Button } from '@mui/material';

const Resume = () => (
  <Container id="resume" sx={{ py: 5, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>Resume</Typography>
    <Button
      variant="contained"
      color="primary"
      href="/assets/Rachel_Kao_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Resume
    </Button>
  </Container>
);

export default Resume;