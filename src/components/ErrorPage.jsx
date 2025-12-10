import { useContext } from "react";
import { AuthContex } from "./AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";


const ErrorPage = () => {
        const {screenmode} = useContext(AuthContex)

    return (
        <div className={`text-center  pt-20 md:pt-32 h-screen ${screenmode ? 'bg-black' : 'bg-[#eff4fd]' }`}>
            <div>
            <h1 className={`md:text-7xl w-11/12 m-auto text-3xl ${screenmode? 'text-dmgreen' : 'text-lmblue'}`}>OOPS !!! SOMETHING WENT WRONG</h1>
            </div>

            <div className="md:mt-20 mt-6 ">
                <button className={`px-4 rounded-md scale-75 md:scale-100 text-xl py-2  border-2  ${screenmode ? 'border-white text-white hover:bg-dmgreen hover:text-black' : 'text-black border-lmblue border-opacity-60 hover:text-white hover:bg-lmblue'} `}>
                    <NavLink to={'/'}>
                    <h1>Go Back</h1>
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;