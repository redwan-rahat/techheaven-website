import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useContext, useEffect,  } from "react";
import { AuthContex } from "./AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";



const Root = () => {
    const {screenmode} = useContext(AuthContex)

  
  
    const colormode = JSON.parse(localStorage.getItem('screen'))
   

    const style = {
        backgroundColor: screenmode ? '#080e10' : '#eff4fd',
        color: screenmode? 'white' : '#333333',

    }

    const local = JSON.parse(localStorage.getItem('screen'))
  
    return (
        
        
        <div className="" >
           
           <div className={` font-page ${screenmode ? 'text-white bg-[#080e10]' : 'text-slate-800 bg-[#eff4fd]'}`}>
            <div className="z-20 relative">
            <Navbar></Navbar>
            </div>
          <div className="z-10 pt-32 ">
          <Outlet></Outlet>
          </div>
          
          <div className="">
            <Footer></Footer>
          </div>
          </div>
        </div>
    );
};

export default Root;