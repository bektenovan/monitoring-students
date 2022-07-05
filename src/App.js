import React from "react";

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Routing from './Routing';
import Footer from './components/Footer';
import ProductContextProvider from './context/productContext';
import AuthContextProvider from "./context/authContext";
import CartContextProvider from "./context/cartContext";
import FavoriteContextProvider from "./context/favoriteContext";

const App  = () => {
  
  return (
<AuthContextProvider>
<ProductContextProvider>
    <BrowserRouter >
  <CartContextProvider>
    <FavoriteContextProvider>
    <Navbar/>
 {/* <Video /> */}
    <Routing/>
    {/* <HomePage/> */}
    <Footer />
    </FavoriteContextProvider>
  </CartContextProvider>
    </BrowserRouter>
  </ProductContextProvider>
</AuthContextProvider>


  );
}
export default App;


