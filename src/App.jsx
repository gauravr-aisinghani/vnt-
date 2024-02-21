
import Footer from "./components/user/footer/Footer";
import Header from "./components/user/header/Header";
import { Outlet } from "react-router-dom";
import { ProductProvider } from "./contexts/productContext";
import { useState } from "react";



function App() {

  const [product,setProduct]=useState({})
  
  const addproduct = () =>{
    
  }
  
  return( 
   <ProductProvider value={{product,addproduct}} >
   
    <Header/>
    <Outlet/>
    <Footer/>
    </ProductProvider>
  )
}

export default App;
