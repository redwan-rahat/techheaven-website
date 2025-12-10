import { useContext } from "react";
import { MdChat } from "react-icons/md";
import { AuthContex } from "./AuthProvider/AuthProvider";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
    const {screenmode} = useContext(AuthContex)

    return (
        <div className="" >
            <hr className={`md:border-dotted ${screenmode ? 'border-dmgreen' : 'border-lmblue'}`} />
            
            <div className={`w-10/12 ml-6 lg:ml-64 md:ml-32 mt-12 md:pt-10 lg:pt-20  grid grid-cols-2 md:grid-cols-4 `}>

            <div className="space-y-1 md:space-y-4 md:text-[15px] text-[9px] mt-4 md:mt-0  ml-11 md:ml-0">
                <div className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer flex items-center space-x-1`}>
                    <h2 > <MdChat /></h2>
                    <h1>Have a chat with us</h1>
                </div>
                <div className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer flex items-center space-x-1`}>
                    <h2 ><PiPhoneCallFill /></h2>
                    <h1>+1-208-581-3262</h1>
                </div  >
                <div className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer flex items-center space-x-1`}>
                    <h2 ><IoIosMail /></h2>
                    <h1 className="text-[9px] md:text-sm">contact@techheaven.com</h1>
                </div>
            </div>


            <div className="-mt-1  md:space-y-4 space-y-2 mb-7 md:mb-0 text-center md:text-left  ">
                <h1 className={`font-bold text-sm md:text-lg ${screenmode? "text-dmgreen" : "text-lmblue"}`}>Solutions</h1>
                <div className="space-y-1 md:space-y-4 md:text-[15px] text-[9px] ">
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Dynamic Product Management</h2>
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Real-Time Data Synchronization</h2>
              
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Advanced Search and Filtering</h2>
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Secure Payment Integration</h2>
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Cross-Platform Compatibility</h2>
                </div>
            </div>

            <div className="-mt-1  md:space-y-4 space-y-2 mb-7 md:mb-0 text-center md:text-left  ">
                <h1 className={`font-bold text-sm md:text-lg ${screenmode? "text-dmgreen" : "text-lmblue"}`}>Company</h1>
                <div className="space-y-1 md:space-y-4 md:text-[15px] text-[9px] ">
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>About Us</h2>
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Apple</h2>
              
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Samsung</h2>
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Google</h2>
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Microsoft</h2>
                </div>
            </div>

            <div className="-mt-1  md:space-y-4 space-y-2 mb-7 md:mb-0 text-center md:text-left  ">
                <h1 className={`font-bold text-sm md:text-lg ${screenmode? "text-dmgreen" : "text-lmblue"}`}>Resources</h1>
                <div className="space-y-1 md:space-y-4 md:text-[15px] text-[9px] ">
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Blogs</h2>
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Add Products</h2>
              
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Your Cart</h2>
                    <h2 className={`${screenmode? "hover:text-dmgreen" : "hover:text-lmblue"} cursor-pointer`}>Login</h2>
                </div>
            </div>

            </div>

            <div  className="flex  md:mt-16  md:space-x-8 md:w-10/12 m-auto justify-center pb-12 md:pb-24 lg:pb-32">
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent md:border w-12 hover:text-white cursor-pointer duration-300 ease-in-out ${screenmode ? 'hover:bg-dmgreen text-dmgreen border-dmgreen ' : 'hover:bg-lmblue text-lmblue border-lmblue'}`}>
                    <h1 className={`md:text-2xl `}><IoLogoYoutube /></h1>
                    </div>
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent md:border w-12 hover:text-white cursor-pointer duration-300 ease-in-out ${screenmode ? 'hover:bg-dmgreen text-dmgreen border-dmgreen ' : 'hover:bg-lmblue text-lmblue border-lmblue'}`}>
                    <h1 className={`md:text-2xl `}><FaXTwitter /></h1>
                    </div>
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent md:border w-12 hover:text-white cursor-pointer duration-300 ease-in-out ${screenmode ? 'hover:bg-dmgreen text-dmgreen border-dmgreen ' : 'hover:bg-lmblue text-lmblue border-lmblue'}`}>
                    <h1 className={`md:text-2xl `}><FaFacebook /></h1>
                    </div>
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent md:border w-12 hover:text-white cursor-pointer duration-300 ease-in-out ${screenmode ? 'hover:bg-dmgreen text-dmgreen border-dmgreen ' : 'hover:bg-lmblue text-lmblue border-lmblue'}`}>
                    <h1 className={`md:text-2xl `}><RiInstagramFill /></h1>
                    </div>
                </div>


            <h5 className="font-menu text-[8px] md:text-sm opacity-50 text-center pb-4">@Copyright reserved by techheaven. Build by Redwan Hasan Rahat</h5>
        </div>
    );
};

export default Footer;