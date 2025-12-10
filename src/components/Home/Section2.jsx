import { useContext } from "react";
import { GrUserExpert } from "react-icons/gr";
import { MdDescription,MdPhonelink,MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

import { AuthContex } from "../AuthProvider/AuthProvider";

const Section2 = () => {

    const {screenmode}  = useContext(AuthContex)

    return (

        <div className="w-2/3 m-auto pt-12 lg:pt-44 md:pt-24 lg:pb-52  pb-16">

            <div className="lg:w-4/5 m-auto text-center">
                <h2 className={`${screenmode ? "text-dmgreen" : "text-lmblue"} md:text-3xl  lg:text-4xl mb-2 md:mb-8`}>Features & Innovations</h2>
                <h1 className= " lg:text-5xl md:text-4xl text-xl font-menu font-semibold mb-3 md:mb-5 lg:mb-12">The Only Tech Place You'll Ever Need</h1>
                <h3 className="lg:text-2xl md:text-xl text-[10px] opacity-80">Discover an unparalleled selection of the latest technology, all curated to meet your needs. Our extensive experience ensures you get top-notch quality and reliable support. Dive into the world of tech with confidence.</h3>

            </div>

            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-2 ml-8 md:mt-8 lg:mt-20 lg:ml-24 md:ml-20 ">

            <div className="md:space-y-4 space-y-1 mt-4 lg:mt-0  ">
            <MdOutlineProductionQuantityLimits  className={`md:text-3xl text-${screenmode ? 'dmgreen' : 'lmblue'}`}/>
            <h1 className="lg:text-2xl md:text-[12px] text-[10px]  font-menu font-semibold">Detailed Product Descriptions</h1>
            </div>
            <div className="md:space-y-4 space-y-1 mt-4 lg:mt-0">
            <MdPhonelink className={`md:text-3xl text-${screenmode ? 'dmgreen' : 'lmblue'}`}/>
            <h1 className="lg:text-2xl md:text-[12px] text-[10px]  font-menu font-semibold">Vast Selection of Technology</h1>
            </div>
            <div className="md:space-y-4 space-y-1 mt-4 lg:mt-0">
            <RiCustomerService2Fill className={`md:text-3xl text-${screenmode ? 'dmgreen' : 'lmblue'}`}/>
            <h1 className="lg:text-2xl md:text-[12px] text-[10px]  font-menu font-semibold">Customer-Centric Support</h1>
            </div>
            <div className="md:space-y-4 space-y-1 mt-4 lg:mt-0">
            <GrUserExpert className={`md:text-3xl text-${screenmode ? 'dmgreen' : 'lmblue'}`}/>
            <h1 className="lg:text-2xl md:text-[12px] text-[10px]  font-menu font-semibold">Three Years of Industry Expertise</h1>
            </div>
           

            </div>
        </div>
    );
};

export default Section2;