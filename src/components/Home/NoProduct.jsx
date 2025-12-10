import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";

const NoProduct = () => {

    const {screenmode} = useContext(AuthContex)

    return (
        <div className="md:mt-20 h-screen">
            <div className="text-center text-xl ">
            <img className={`md:w-48 w-24 m-auto ${screenmode ? 'bg-black brightness-150 saturate-150' : 'bg-transparent'}`} src="https://i.postimg.cc/02GSWhBw/oops-logo-final.webp" alt="" />
           <div className="mt-8 font-menu text-sm md:text-xl ">
            <h1>Oops!!!No Product Available</h1>
            <h2>Come Back Later.....</h2>
            </div>
            </div>
        </div>
    );
};

export default NoProduct;