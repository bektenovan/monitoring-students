// src/pages/ResumeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const ResumeDetail = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/resumes/${id}`)
      .then(response => response.json())
      .then(data => setResume(data));
  }, [id]);

  if (!resume) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="md"  >
        <Box >
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh"  sx={{ backgroundColor: 'lightgrey', padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom color="primary" >
          {resume.fullName}
        </Typography>
        <Box component="img" src={resume.photo} alt={resume.fullName} width="200px" height="200px" borderRadius="50%" mb={4} />
        <Typography variant="body1" gutterBottom >
          <strong>Возраст:</strong> {resume.age}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Образование:</strong> {resume.education}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Год окончания:</strong> {resume.graduationYear}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Опыт работы:</strong> {resume.workExperience}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Навыки:</strong> {resume.skills}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Хобби:</strong> {resume.hobbies}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Контакты:</strong> {resume.contacts}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Почта:</strong> {resume.email}
        </Typography>
      </Box>
      </Box>
    </Container>
  );
}

export default ResumeDetail;

