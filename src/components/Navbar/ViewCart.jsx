import { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const ViewCart = ({ data,setIsOpen,DeleteFromCart }) => {
  const { prodID, prodName, prodBrand, prodPrice, prodUrl, prodRating } = data;

 


  return (
    <div>
      <div className="rounded-lg md:flex border-y-2 shadow-sm space-x-2  md:space-x-6">
        <NavLink to={`/details/${prodBrand}/${prodID}`}>
        <img src={prodUrl} className={`rounded-tl-lg rounded-tr-lg md:w-56 h-full`} alt="" />
        </NavLink>
        <div className="md:flex mt-2 font-page justify-between  md:w-full">
        <NavLink to={`/details/${prodBrand}/${prodID}`}>
          <div className="md:space-y-4 ml-3 md:ml-0 md:mb-2  ">
            <h1 className="font-bold text-sm md:text-[16px] ">{prodName}</h1>
            <h2 className="text-sm md:text-[16px]">{prodBrand}</h2>
            <h3 className="text-orange-600 text-sm md:text-[16px]">${prodPrice}</h3>
          </div>
          </NavLink>
          <div className="h-full ml-3 md:ml-0    md:space-y-11 space-y-2 md:mr-2">
            <h1 className="text-sm md:text-[16px]">Quantity: 1</h1>
            <div className="md:m-auto w-7 justify-end flex md:w-1/2" onClick={() => setIsOpen(true)}>
              <h2 onClick={()=>(setIsOpen(true), DeleteFromCart(prodID))} className="text-xl mb-3 md:mb-0 text-red-500 outline outline-1 outline-slate-300 hover:bg-red-100 hover:cursor-pointer duration-200 rounded-sm  p-1 md:ml-[6px]">
                <BsTrash3Fill />
              </h2>
            
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ViewCart;
