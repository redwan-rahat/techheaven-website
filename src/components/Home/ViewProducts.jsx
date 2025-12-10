import { useContext } from "react";
import { GoStarFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const ViewProducts = ({data}) => {

    const {_id,brand,name,price,rating,type,url} = data
    const {screenmode} = useContext(AuthContex)
   
    return ( 
        <div className={`${screenmode? 'border-dmgreen' : 'border-lmblue border-opacity-50'} border rounded-br-3xl rounded-tl-3xl mt-4` }>
            <div className="space-y-2 ">
                <NavLink to={`/details/${brand}/${_id}`}>
                <img  src={url} className="rounded-tl-3xl" alt="" />
                </NavLink>
                <div className="w-11/12 m-auto space-y-1">
                <div className="pt-2 flex justify-between  ">
                <h1 className="font-semibold">{name}</h1>

                <div className="flex items-center space-x-1">
                <GoStarFill className="text-yellow-500"/>
                <h2 className="flex ">  {rating}/10</h2>
                </div>

                </div>

                <h1>Category: {type}</h1>
                <h3>PRICE : <span className={`${screenmode ? 'text-dmgreen' : 'text-lmblue'}`}>${price}</span></h3>
                <div className="flex justify-between pb-5">
                   
                    <div className={`flex items-center space-x-1 hover:space-x-2 ease-in-out  duration-200 ${screenmode ? "text-gray-300 hover:text-white" :"hover:text-gray-800 text-gray-500"} `}>
                    <NavLink to={`/details/${brand}/${_id}`}>
                    <button className="">Show Details</button>
                    </NavLink>
                    <FaArrowRight />
                    </div>

                    <div>
                        <NavLink to={`/update/${brand}/${_id}`}><button className={`${screenmode? "bg-dmgreen text-gray-800 hover:text-white" : 'bg-lmblue hover:bg-blue-600'}  text-white px-2 py-1 rounded-sm hover:scale-110 duration-200`}>Update</button></NavLink>
                        
                    </div>
                </div>
                </div>

            </div>
        </div>

        
    );
};

export default ViewProducts;