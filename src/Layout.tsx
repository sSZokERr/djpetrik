import {Outlet} from "react-router-dom";
import './App.css';
import Footer from "./Footer";
import Navbar from './Navbar'

const Layout=()=>{
return(
     <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;