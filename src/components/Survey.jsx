import React, { useState, useContext } from 'react';
import { Container, TextField, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Typography, Box } from '@mui/material';
import { SurveyContext } from '../context/surveyContext';
import grad from '../files/wp.jpg'
import { Link } from 'react-router-dom';
const Survey = () => {
    const { submitSurvey } = useContext(SurveyContext);
    const [form, setForm] = useState({
        fullName: '',
        graduationYear: '',
        diplomaSpeciality: '',
        residence: '',
        phoneNumber: '',
        isEmployed: '',
        isEmployedBySpeciality: '',
        position: '',
        workplace: '',
        isContinuingEducation: '',
        educationPlace: '',
        usefulCourses: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSurvey(form);
    };


    return (
        <Box >
            <img width="100%" className='img' src={grad} alt='' />
            <Container >
                <Box mt={5} mb={5}>
                    <Typography variant="h4" gutterBottom color="primary" textAlign="center">
                        Пройти опрос
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField label="ФИО" name="fullName" value={form.fullName} onChange={handleChange} fullWidth margin="normal" />
                        <TextField label="Год выпуска" name="graduationYear" value={form.graduationYear} onChange={handleChange} fullWidth margin="normal" />
                        <TextField label="Специальность по диплому" name="diplomaSpeciality" value={form.diplomaSpeciality} onChange={handleChange} fullWidth margin="normal" />
                        <TextField label="Место жительство" name="residence" value={form.residence} onChange={handleChange} fullWidth margin="normal" />
                        <TextField label="Номер телефона" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} fullWidth margin="normal" />

                        <FormControl component="fieldset" margin="normal">
                            <FormLabel component="legend">Трудоустроены?</FormLabel>
                            <RadioGroup name="isEmployed" value={form.isEmployed} onChange={handleChange}>
                                <FormControlLabel value="yes" control={<Radio />} label="Да" />
                                <FormControlLabel value="no" control={<Radio />} label="Нет" />
                            </RadioGroup>
                        </FormControl>

                        {form.isEmployed === 'Да' && (
                            <>
                                <FormControl component="fieldset" margin="normal">
                                    <FormLabel component="legend">Трудоустроены по специальности?</FormLabel>
                                    <RadioGroup name="isEmployedBySpeciality" value={form.isEmployedBySpeciality} onChange={handleChange}>
                                        <FormControlLabel value="yes" control={<Radio />} label="Да" />
                                        <FormControlLabel value="no" control={<Radio />} label="Нет" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField label="Position" name="position" value={form.position} onChange={handleChange} fullWidth margin="normal" />
                                <TextField label="Workplace" name="workplace" value={form.workplace} onChange={handleChange} fullWidth margin="normal" />
                            </>
                        )}

                        <FormControl component="fieldset" margin="normal">
                            <FormLabel component="legend">Вы продолжили/продолжите обучение?</FormLabel>
                            <RadioGroup name="isContinuingEducation" value={form.isContinuingEducation} onChange={handleChange}>
                                <FormControlLabel value="yes" control={<Radio />} label="Да" />
                                <FormControlLabel value="no" control={<Radio />} label="Нет" />
                            </RadioGroup>
                        </FormControl>

                        {form.isContinuingEducation === 'Да' && (
                            <TextField label="Место обучения" name="educationPlace" value={form.educationPlace} onChange={handleChange} fullWidth margin="normal" />
                        )}

                        <TextField
                            label="Что из преподававшегося по специальности наиболее полезно в вашей сегодняшней работе?"
                            name="usefulCourses"
                            value={form.usefulCourses}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <Link to='/surveyData'>
                            <Button type="submit" variant="contained" color="success" fullWidth style={{
                                padding: '12px 24px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }}>
                                Submit
                            </Button>
                        </Link>

                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Survey;
