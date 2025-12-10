import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Products = () => {

    const {screenmode} = useContext(AuthContex)


   
    return (
        

        <div className="w-2/3 m-auto lg:pt-20 md:pt-8 pb-12 md:pb-20 lg:pb-32" >
            <style>
                {
                    `
                    .device:hover h1{
                    opacity: 1;
                    
                    }
                    `
                }
            </style>

             <div className="lg:w-4/5 w-4/5 md:w-full m-auto text-center">
                <h1 className="lg:text-5xl md:text-4xl text-[17px] leading-normal font-menu font-semibold mb-4 md:mb-8 lg:mb-12">Discover the Latest and Greatest Tech Just for You</h1>
                <h3 className="lg:text-2xl md:text-xl text-[12px] opacity-80">Choose from a curated selection of cutting-edge technology tailored to your needs.</h3>
                
            </div>
          

            <div className="  lg:grid-cols-3 grid md:grid-cols-2 grid-cols-2  lg:pt-10 m-auto ">
            <div className="device relative w-24 md:w-60 lg:w-80 m-auto  md:space-y-4 md:mt-12 space-y-1 mt-6 cursor-pointer">
            <NavLink to='/showproducts/Apple' >
            <img  className=" lg:rounded-xl md:rounded-lg rounded-sm h-16 w-28 md:h-40 lg:h-48 md:w-72 lg:w-80 hover:saturate-100 hover:contrast-[.6] hover:scale-110 hover:ease-in-out duration-300 " src="https://i.postimg.cc/LsgFcBPt/iphone-15-pro-max.webp" alt="" />
            <h1 className={`absolute text-xl md:top-16 md:right-[120px] lg:top-[80px] lg:right-[105px] hidden  md:flex items-center font-menu font-medium tracking-wider ml-2  ${screenmode ? 'text-dmgreen ' : 'text-white '} opacity-0 tracking-widest ` }>View More</h1>
            </NavLink>
            <h2 className={`font-menu md:text-xl text-[8px]  opacity-90  tracking-wider ml-2  ${screenmode? "text-dmgreen": "text-lmblue"} ` }>Apple</h2>
            </div>
            <div className="device relative w-24 md:w-60 lg:w-80 m-auto  md:space-y-4 md:mt-12 space-y-1 mt-6 cursor-pointer">
            <NavLink to='/showproducts/Google'>
            <img  className=" lg:rounded-xl md:rounded-lg rounded-sm h-16 w-28 md:h-40 lg:h-48 md:w-72 lg:w-80 hover:saturate-100 hover:contrast-[.6] hover:scale-110 hover:ease-in-out duration-300 " src="https://i.postimg.cc/cL9484rZ/google-pixel-8-pro.webp" alt="" />
            <h1 className={`absolute text-xl md:top-16 md:right-[120px] lg:top-[80px] lg:right-[105px] hidden  md:flex items-center font-menu font-medium tracking-wider ml-2  ${screenmode ? 'text-dmgreen ' : 'text-white '} opacity-0 tracking-widest ` }>View More</h1>
            </NavLink>
            <h2 className={`font-menu md:text-xl text-[8px]  opacity-90  tracking-wider ml-2  ${screenmode? "text-dmgreen": "text-lmblue"} ` }>Google</h2>
            </div>
            <div className="device relative w-24 md:w-60 lg:w-80 m-auto  md:space-y-4 md:mt-12 space-y-1 mt-6 cursor-pointer">
            <NavLink to='/showproducts/Samsung'>
            <img  className=" lg:rounded-xl md:rounded-lg rounded-sm h-16 w-28 md:h-40 lg:h-48 md:w-72 lg:w-80 hover:saturate-100 hover:contrast-[.6] hover:scale-110 hover:ease-in-out duration-300 " src="https://i.postimg.cc/nV4D6r65/galaxy-s24-ultra.webp" alt="" />
            <h1 className={`absolute text-xl md:top-16 md:right-[120px] lg:top-[80px] lg:right-[105px] hidden  md:flex items-center font-menu font-medium tracking-wider ml-2  ${screenmode ? 'text-dmgreen ' : 'text-white '} opacity-0 tracking-widest ` }>View More</h1>
            </NavLink>
            <h2 className={`font-menu md:text-xl text-[8px]  opacity-90  tracking-wider ml-2  ${screenmode? "text-dmgreen": "text-lmblue"} ` }>Samsung</h2>
            </div>
            <div className="device relative w-24 md:w-60 lg:w-80 m-auto  md:space-y-4 md:mt-12 space-y-1 mt-6 cursor-pointer">
            <NavLink to='/showproducts/Sony'>
            <img  className=" lg:rounded-xl md:rounded-lg rounded-sm h-16 w-28 md:h-40 lg:h-48 md:w-72 lg:w-80 hover:saturate-100 hover:contrast-[.6] hover:scale-110 hover:ease-in-out duration-300 " src="https://i.postimg.cc/GmkHkLXz/sony.jpg" alt="" />
            <h1 className={`absolute text-xl md:top-16 md:right-[120px] lg:top-[80px] lg:right-[105px] hidden  md:flex items-center font-menu font-medium tracking-wider ml-2  ${screenmode ? 'text-dmgreen ' : 'text-white '} opacity-0 tracking-widest ` }>View More</h1>
            </NavLink>
            <h2 className={`font-menu md:text-xl text-[8px]  opacity-90  tracking-wider ml-2  ${screenmode? "text-dmgreen": "text-lmblue"} ` }>Sony</h2>
            </div>
            <div className="device relative w-24 md:w-60 lg:w-80 m-auto  md:space-y-4 md:mt-12 space-y-1 mt-6 cursor-pointer">
            <NavLink to='/showproducts/Microsoft'>
            <img  className=" lg:rounded-xl md:rounded-lg rounded-sm h-16 w-28 md:h-40 lg:h-48 md:w-72 lg:w-80 hover:saturate-100 hover:contrast-[.6] hover:scale-110 hover:ease-in-out duration-300 " src="https://i.postimg.cc/28LqSFvs/microsoft.jpg" alt="" />
            <h1 className={`absolute text-xl md:top-16 md:right-[120px] lg:top-[80px] lg:right-[105px] hidden  md:flex items-center font-menu font-medium tracking-wider ml-2  ${screenmode ? 'text-dmgreen ' : 'text-white '} opacity-0 tracking-widest ` }>View More</h1>
            </NavLink>
            <h2 className={`font-menu md:text-xl text-[8px]  opacity-90  tracking-wider ml-2  ${screenmode? "text-dmgreen": "text-lmblue"} ` }>Microsoft</h2>
            </div>
            <div className="device relative w-24 md:w-60 lg:w-80 m-auto  md:space-y-4 md:mt-12 space-y-1 mt-6 cursor-pointer">
            <NavLink to='/showproducts/Intel'>
            <img  className=" lg:rounded-xl md:rounded-lg rounded-sm h-16 w-28 md:h-40 lg:h-48 md:w-72 lg:w-80 hover:saturate-100 hover:contrast-[.6] hover:scale-110 hover:ease-in-out duration-300 " src="https://i.postimg.cc/gk2dpb2Z/core-i7-13th-gen.webp" alt="" />
            <h1 className={`absolute text-xl md:top-16 md:right-[120px] lg:top-[80px] lg:right-[105px] hidden  md:flex items-center font-menu font-medium tracking-wider ml-2  ${screenmode ? 'text-dmgreen ' : 'text-white '} opacity-0 tracking-widest ` }>View More</h1>
            </NavLink>
            <h2 className={`font-menu md:text-xl text-[8px]  opacity-90  tracking-wider ml-2  ${screenmode? "text-dmgreen": "text-lmblue"} ` }>Intel</h2>
            </div>

            </div>


            
        </div>

    );
};

export default Products;