// components/Projects.js
import { Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const Projects = () => (
  <Grid container spacing={3} id="projects" sx={{ py: 5 }}>
    {/* Repeat this block for each project */}
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="/assets/images/project1.png"
          alt="Project 1"
        />
        <CardContent>
          <Typography variant="h6">AuraNotes</Typography>
          <Typography variant="body2" color="text.secondary">
            A web app for mood and mental health tracking built with React and Firebase.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default Projects;