import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";


const Banner = () => {
    const {screenmode}  = useContext(AuthContex)
    const shadowborderlight = window.innerWidth <= 640 ? {
      color: 'rgba(0, 0, 0, 0)',
      WebkitTextStroke: '0.75px black',
    } : {
      color: 'rgba(0, 0, 0, 0)',
      WebkitTextStroke: '1.5px black',
    };
    
    const shadowborderdark = window.innerWidth <= 640 ? {
      color: 'rgba(0, 0, 0, 0)',
      WebkitTextStroke: '0.75px white',
    } : {
      color: 'rgba(0, 0, 0, 0)',
      WebkitTextStroke: '1px white',
    };
    
  
      const shadownone = {
        WebkitTextStroke: '0px',
      }
     
    return (
        <div>

            <div className=" relative  lg:h-[980px] h-80 md:h-[650px]">
                {
                    screenmode ? <img className="w-full  lg:h-[980px] h-80 md:h-[650px] -mt-40 opacity-30" src="https://i.postimg.cc/d0zsrbWB/Banner-Dark-optimized.webp"/> :
                            <img className="w-full  lg:h-[980px] h-80 md:h-[650px] -mt-40 opacity-20" src="https://i.postimg.cc/cHwsmF2N/Banner-white-optimized.webp" alt="" />
                }
    
            </div>

<div className="absolute  lg:top-72 top-28  md:top-52 md:left-36  lg:left-80   md:w-2/3  text-center space-y-2 md:space-y-6">
            <div >
      <h1 className="lg:text-[80px] md:text-4xl text-3xl font-logo font-semibold " style={screenmode? shadowborderdark : shadowborderlight} ><span className={screenmode? 'text-dmgreen' : 'text-lmblue'} style={shadownone}>tech</span>heaven </h1>
    </div>
            <div>
                <h1 className="font-title text-3xl leading-normal md:text-5xl  lg:text-[120px] ">Your Ultimate Destination for All Things Tech</h1>
            </div>

        </div>


        </div>
    );
};

export default Banner;