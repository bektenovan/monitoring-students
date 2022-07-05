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

import Favorite from './components/Favorite';

// import Chat from './components/Chat';
import AboutUs from './components/AboutUs'
import PaymentForm from './components/PaymentForm';
import Comments from './components/Comments/Comments';


 


const Routing = () => {
   
    const { isAdmin } = useContext(authContext);
  // console.log(isAdmin);
    return (
        
<Routes>
       <Route path='/' element={<> <Video /><  HomePage /></>}/>
       <Route path='/login' element={<> <LoginForm /> </>} />
       <Route path='/register' element={<RegisterForm />} />
       <Route
        path="/add-product"
        element={isAdmin ? <AddProductForm /> : <Navigate replace to="*" />}
      />
       <Route path='/products' element={<ProductsList />}/>
       <Route path='/products/:id' element={<><ProductDetails /> <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      /></>}/>
       <Route
        path="/edit/:id"
        element={isAdmin ? <EditProductForm /> : <Navigate replace to="*" />}
      />
       <Route path='/cart' element={<><Cart /><PaymentForm></PaymentForm></>}/>  
       <Route path='/favorite' element={<Favorite />}/>  

       <Route path="*" element={<NotFound />} />
       <Route path="/about-us" element={<AboutUs />} />

    
   


        </Routes>
 
    

      
    );
};

export default Routing;