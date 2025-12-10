import { useContext, useLayoutEffect } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiInformation2Line } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Contact = () => {
    const {screenmode} = useContext(AuthContex)
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="h-auto md:mt-24 w-11/12 mb-16 md:mb-20 m-auto">
                <div >
                    <h1 className={`text-center text-xl md:text-3xl ${screenmode ? " text-dmgreen" : "text-lmblue "}`}>Contact Us</h1>
                </div>

                <div className={`grid md:grid-cols-4 mt-8 md:mt-20 w-4/5 space-y-4 md:space-y-0 ml-16 md:ml-52 `}>

                <div className="text-xl w-10/12 scale-90 md:scale-100 ">
                    <div className="space-y-2">
                    <h1 className={`text-4xl ${screenmode ? "text-dmgreen" : 'text-lmblue'}`}><BiPhoneCall /></h1>
                    <h2>+1-208-581-3262</h2>
                    </div>
                    <h1 className="text-lg opacity-70">Call us: Monday-Friday (8:00-17:00)  </h1>
                </div>
                <div className="text-xl w-10/12 scale-90 md:scale-100 ">
                    <div className="space-y-2">
                    <h1 className={`text-4xl ${screenmode ? "text-dmgreen" : 'text-lmblue'}`}><HiOutlineLocationMarker /></h1>
                    <h2>New York</h2>
                    </div>
                    <h1 className="text-lg opacity-70">1234 Oakwood Drive, Austin, TX 78701, USA</h1>
                </div>
                <div className="text-xl w-10/12 scale-90 md:scale-100 ">
                    <div className="space-y-2">
                    <h1 className={`text-4xl ${screenmode ? "text-dmgreen" : 'text-lmblue'}`}><RiInformation2Line /></h1>
                    <h2>contact@techheaven.com</h2>
                    </div>
                    <h1 className="text-lg opacity-70">Drop a message anytime you want </h1>
                </div>
                <div className="text-xl w-10/12 scale-90 md:scale-100 ">
                    <div className="space-y-2">
                    <h1 className={`text-3xl ${screenmode ? "text-dmgreen" : 'text-lmblue'}`}><ImProfile /></h1>
                    <h2>jobs@techheaven.com</h2>
                    </div>
                    <h1 className="text-lg opacity-70">Join us in shaping a brighter tomorrow </h1>
                </div>

                </div>
                <div  className="flex mt-16 space-x-6 w-10/12 m-auto justify-center">
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent border w-12 hover:text-white cursor-pointer duration-300 ease-in-out ${screenmode ? 'hover:bg-dmgreen text-dmgreen border-dmgreen ' : 'hover:bg-lmblue text-lmblue border-lmblue'}`}>
                    <h1 className={`text-2xl `}><IoLogoYoutube /></h1>
                    </div>
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent border w-12 hover:text-white cursor-pointer duration-300 ease-in-out ${screenmode ? 'hover:bg-dmgreen text-dmgreen border-dmgreen ' : 'hover:bg-lmblue text-lmblue border-lmblue'}`}>
                    <h1 className={`text-2xl `}><FaXTwitter /></h1>
                    </div>
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent border w-12 hover:text-white cursor-pointer duration-300 ease-in-out ${screenmode ? 'hover:bg-dmgreen text-dmgreen border-dmgreen ' : 'hover:bg-lmblue text-lmblue border-lmblue'}`}>
                    <h1 className={`text-2xl `}><FaFacebook /></h1>
                    </div>
                    <div className={`flex rounded-tl-lg rounded-br-lg justify-center h-12 items-center bg-transparent border w-12 hover:text-white cursor-pointer duration-300 ease-in-out ${screenmode ? 'hover:bg-dmgreen text-dmgreen border-dmgreen ' : 'hover:bg-lmblue text-lmblue border-lmblue'}`}>
                    <h1 className={`text-2xl `}><RiInstagramFill /></h1>
                    </div>
                </div>
        </div>
    );
};

export default Contact;