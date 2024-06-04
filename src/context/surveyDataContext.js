import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { exportToExcel } from '../exportToExcel';

export const SurveyDataContext = createContext();

export const SurveyDataProvider = ({ children }) => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axios.get('http://localhost:8000/contacts');
        setSurveys(response.data);
      } catch (error) {
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys();
  }, []);

  return (
    <SurveyDataContext.Provider value={{ surveys, exportToExcel }}>
      {children}
    </SurveyDataContext.Provider>
  );
};
