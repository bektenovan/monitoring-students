// src/pages/PostJob.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import grad from './files/wp.jpg'
const PostJob = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [jobData, setJobData] = useState({
    title: '',
    photo: '',
    experience: '',
    salary: '',
    company: '',
    tasks: '',
    contacts: '',
    email: ''
  });

  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setJobData({
        ...jobData,
        photo: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    setJobs([jobData, ...jobs]);
    setFormVisible(false);
    setJobData({
      title: '',
      photo: '',
      experience: '',
      salary: '',
      company: '',
      tasks: '',
      contacts: '',
      email: ''
    });
  };

  return (
    <Box >
    <img width="100%" className='img' src={grad} alt='' />
    <Container maxWidth="md">
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button variant="contained" color="primary" onClick={() => setFormVisible(true)}>
          Разместить вакансию
        </Button>
      </Box>
      {formVisible && (
        <Box mt={2}>
          <Typography variant="h4" gutterBottom color="primary">
            Форма размещения вакансии
          </Typography>
          <TextField fullWidth margin="normal" label="Должность вакансии" name="title" value={jobData.title} onChange={handleChange} />
          <Button variant="contained" component="label" fullWidth margin="normal">
            Загрузить фото
            <input type="file" hidden onChange={handlePhotoChange} />
          </Button>
          <TextField fullWidth margin="normal" label="Опыт работы" name="experience" value={jobData.experience} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Зарплата" name="salary" value={jobData.salary} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Название компании" name="company" value={jobData.company} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Задачи" name="tasks" value={jobData.tasks} onChange={handleChange} multiline rows={4} />
          <TextField fullWidth margin="normal" label="Контакты" name="contacts" value={jobData.contacts} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Почта" name="email" value={jobData.email} onChange={handleChange} />
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Опубликовать
            </Button>
          </Box>
        </Box>
      )}
      <Box mt={4}>
        {jobs.map((job, index) => (
          <Card key={index} sx={{ marginBottom: 2 }}>
            {job.photo && <CardMedia component="img" height="140" image={job.photo} alt={job.title} />}
            <CardContent>
              <Typography variant="h5" component="div">{job.title}</Typography>
              <Typography variant="body2" color="text.secondary">{job.company}</Typography>
              <Typography variant="body2" color="text.secondary">Зарплата: {job.salary}</Typography>
              <Typography variant="body2" color="text.secondary">Опыт работы: {job.experience}</Typography>
              <Typography variant="body2" color="text.secondary">Задачи: {job.tasks}</Typography>
              <Typography variant="body2" color="text.secondary">Контакты: {job.contacts}</Typography>
              <Typography variant="body2" color="text.secondary">Почта: {job.email}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
    </Box>
  );
};

export default PostJob;
