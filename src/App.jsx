
import Footer from "./componetents/user/footer/Footer";
import Header from "./componetents/user/header/Header";
// import Home from "./componetents/user/home/Home";
import { Outlet } from "react-router-dom";



function App() {
  return( 
  <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default App;
