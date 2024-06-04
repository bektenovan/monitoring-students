import React, { useContext }  from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddProductForm from './components/AddProductForm';
import Cart from './components/Cart';
import EditProductForm from './components/EditProductForm';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import RegisterForm from './components/RegisterForm';
import Video from './components/Video';
import { authContext } from './context/authContext';

import ExportToExcelButton from './components/ExportToExcelButton';
// import Chat from './components/Chat';

 import Survey from './components/Survey';
 import SurveyData from './components/SurveyData';
import PostResume from './PostResume';
import ResumeDetail from './ResumeDetail';
import Resumes from './Resumes';
import PostJob from './PostJob';
const Routing = () => {
   
    const { isAdmin } = useContext(authContext);
  // console.log(isAdmin);
    return (
  
       
<Routes>
       <Route path='/' element={<> <Video /><  HomePage /></>}/>
       <Route path='/login' element={<> <LoginForm /> </>} />
       <Route path='/register' element={<RegisterForm />} />
       <Route
      
        element={isAdmin ?  <ExportToExcelButton />: <Navigate replace to="*" />} // только админ увидет данные
      />
       <Route path='/products' element={<ProductsList />}/>
       <Route path='/products/:id' element={<ProductDetails />}/>
       <Route
        path="/edit/:id"
        element={isAdmin ? <EditProductForm /> : <Navigate replace to="*" />}
      />
       <Route path='/cart' element={<Cart />}/>  
       

       <Route path="*" element={<NotFound />} />

       <Route path="/survey-page" element={<Survey />} />
       <Route path="/surveyData" element={<SurveyData />} />

       <Route path="/post-resume" element={<PostResume />} />
        <Route path="/resumes" element={<Resumes />} />
        <Route path="/resume/:id" element={<ResumeDetail />} />
    
        <Route path="/post-job" element={<PostJob />} /> {/* Добавляем маршрут */}



        </Routes>
 
    
    );
};

export default Routing;