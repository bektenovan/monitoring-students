
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import grad from './files/wp.jpg'
const PostResume = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    photo: '',
    age: '',
    education: '',
    graduationYear: '',
    workExperience: '',
    skills: '',
    hobbies: '',
    contacts: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/resumes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        setSubmitted(true);
        setError(false);
      } else {
        setError(true);
        console.error('Failed to submit form', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(true);
    }
  };

  return (
    <Box >
    <img width="100%" className='img' src={grad} alt='' />
    <Container >
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="85vh"  >
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary"> 
          Оставить резюме
        </Typography>
        {submitted ? (
          <Alert severity="success" width="200">Резюме успешно отправлено!</Alert>
        ) : (
          <Box component="form" noValidate autoComplete="off" width="100%">
            <TextField fullWidth margin="normal" label="ФИО" name="fullName" value={formData.fullName} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="URL фото" name="photo" value={formData.photo} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Возраст" name="age" value={formData.age} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Образование" name="education" value={formData.education} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Год окончания" name="graduationYear" value={formData.graduationYear} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Опыт работы" name="workExperience" value={formData.workExperience} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Навыки" name="skills" value={formData.skills} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Хобби" name="hobbies" value={formData.hobbies} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Контакты" name="contacts" value={formData.contacts} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Почта" name="email" value={formData.email} onChange={handleChange} />

            {error && <Alert severity="error">Произошла ошибка при отправке формы!</Alert>}

            <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
              Загрузить резюме
            </Button>
          </Box>
        )}
      </Box>
    </Container>
    </Box>
  );
}

export default PostResume;
