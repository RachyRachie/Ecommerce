import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
//import { Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductsDetails from "./pages/ProductsDetails";
import Cartitem from "./components/Cartitem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
    <div className="overflow-hidden">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
        </Routes>
        <Sidebar/>
        <Footer/>
        {/* <Product/> */}
     

     
    </div>
    </BrowserRouter>
  );
};

export default App;
