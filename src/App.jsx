
import Header from "./componetents/user/header/Header";
import Footer from "./componetents/user/footer/Footer";
import { Outlet } from "react-router-dom";
// import Home from "./componetents/user/home/Home";


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
