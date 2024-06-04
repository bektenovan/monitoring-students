import React, { useContext } from 'react';
import { Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';
import { SurveyDataContext } from '../context/surveyDataContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import grad from '../files/wp.jpg'
import ExportToExcelButton from './ExportToExcelButton'; // импортируем компонент с кнопкой

const SurveyData = () => {
    const { surveys, exportToExcel } = useContext(SurveyDataContext);

    const totalSurveys = surveys.length;
    const employed = surveys.filter(s => s.isEmployed === 'yes').length;
    const employedBySpeciality = surveys.filter(s => s.isEmployedBySpeciality === 'yes').length;

    const data = [
        { name: 'Total Surveys', value: totalSurveys },
        { name: 'Employed', value: employed },
        { name: 'Employed By Speciality', value: employedBySpeciality },
    ];

    return (
        <Box >
            <img width="100%" className='img' src={grad} alt='' />
            <Container>
                <Box mt={5} mb={5}>
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <Typography variant="h4" gutterBottom color="primary" >
                                Данные опроса:
                            </Typography>
                            <Typography variant="h6">
                                Общее количество: {totalSurveys}
                            </Typography>
                            <Typography variant="h6">
                                Трудоустроены: {employed}
                            </Typography>
                            <Typography variant="h6">
                                Трудоустроены по специальности: {employedBySpeciality}
                            </Typography>
                        </Box>


                        <Box display="flex" justifyContent="center" mb={4}>
                            <ExportToExcelButton />
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="space-between" >

                        <BarChart width={600} height={600} data={data}>
                            <XAxis dataKey="name" tick={{ fontSize: 20 }} label={{ value: 'Category', position: 'insideBottom', fontSize: 50, offset: -50 }} />
                            <YAxis tick={{ fontSize: 35 }} label={{ value: 'Count', angle: -90, position: 'insideLeft', fontSize: 4 }} />

                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>

                        <Box >
                            <PieChart width={700} height={700}>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={150}
                                    fill="#8884d8"
                                    label={{ value: 'Category', position: 'insideBottom', fontSize: 50 }}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} label={{ value: 'Category' }} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>


                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default SurveyData;
