import React from "react";

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Routing from './Routing';
import Footer from './components/Footer';
import ProductContextProvider from './context/productContext';
import AuthContextProvider from "./context/authContext";
import CartContextProvider from "./context/cartContext";
import Survey from './components/Survey';
import SurveyData from './components/SurveyData';
import { SurveyProvider } from './context/surveyContext';
import { SurveyDataProvider } from './context/surveyDataContext';
const App  = () => {
  
  return (
<AuthContextProvider>
<ProductContextProvider>
    <BrowserRouter >
    <SurveyProvider>
      <SurveyDataProvider>
  <CartContextProvider>
    
 
    <Navbar/>
 {/* <Video /> */}
    <Routing/>
    {/* <HomePage/> */}
    <Footer />

   
  </CartContextProvider>
  </SurveyDataProvider>
    </SurveyProvider>
    </BrowserRouter>
  </ProductContextProvider>
</AuthContextProvider>


  );
}
export default App;



