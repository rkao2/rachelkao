// components/Contact.js
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => (
  <Container id="contact" sx={{ py: 5 }}>
    <Typography variant="h4" gutterBottom>Contact</Typography>
    <Box component="form">
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary">Send</Button>
    </Box>
  </Container>
);

export default Contact;