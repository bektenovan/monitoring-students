import React from "react";

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Routing from './Routing';
import Footer from './components/Footer';
import ProductContextProvider from './context/productContext';
import AuthContextProvider from "./context/authContext";
import CartContextProvider from "./context/cartContext";

const App  = () => {
  return (
<AuthContextProvider>
<ProductContextProvider>
    <BrowserRouter >
  <CartContextProvider>
  <Navbar/>
 {/* <Video /> */}
    <Routing/>
    {/* <HomePage/> */}
    <Footer />
  </CartContextProvider>
    </BrowserRouter>
  </ProductContextProvider>
</AuthContextProvider>


  );
}
export default App;


