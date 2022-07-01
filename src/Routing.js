import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Video from './components/Video';


const Routing = () => {
    return (

          <Routes>
       <Route path='/' element={<  HomePage />}></Route>
        </Routes>

      
    );
};

export default Routing;