import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [surveys, setSurveys] = useState([]);

  const submitSurvey = async (survey) => {
    try {
      await axios.post('http://localhost:8000/contacts', survey);
      setSurveys([...surveys, survey]);
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  return (
    <SurveyContext.Provider value={{ surveys, submitSurvey }}>
      {children}
    </SurveyContext.Provider>
  );
};
