import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddProductForm from './components/AddProductForm';
import Cart from './components/Cart';
import EditProductForm from './components/EditProductForm';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import RegisterForm from './components/RegisterForm';
import Video from './components/Video';


const Routing = () => {
    return (

<Routes>
       <Route path='/' element={<> <Video /><  HomePage /></>}/>
       <Route path='/login' element={<LoginForm />} />
       <Route path='/register' element={<RegisterForm />} />
       <Route path='/add-product' element={<AddProductForm/>}/>
       <Route path='/products' element={<ProductsList />}/>
       <Route path='/products/:id' element={<ProductDetails />}/>
       <Route path='/edit/:id' element={<EditProductForm />}/>  
       <Route path='/cart' element={<Cart />}/>  


        </Routes>
 
    

      
    );
};

export default Routing;