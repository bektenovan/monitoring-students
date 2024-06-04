// src/pages/Resumes.js
import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Resumes = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/resumes')
      .then(response => response.json())
      .then(data => setResumes(data));
  }, []);

  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary"> 
          Резюме студента
        </Typography>
        <Grid container spacing={4}>
          {resumes.map((resume) => (
            <Grid item key={resume.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={resume.photo}
                  alt={resume.fullName}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {resume.fullName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Возраст: {resume.age}<br />
                    Образование: {resume.education}<br />
                    Год окончания: {resume.graduationYear}<br />
                    Опыт работы: {resume.workExperience}<br />
                    Навыки: {resume.skills}<br />
                    Хобби: {resume.hobbies}<br />
                    Контакты: {resume.contacts}<br />
                    Почта: {resume.email}
                  </Typography>
                </CardContent>
                <Box display="flex" justifyContent="center" pb={2}>
                  <Button
                    size="small"
                    color="primary"
                    component={Link}
                    to={`/resume/${resume.id}`}
                  >
                    Learn More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Resumes;

