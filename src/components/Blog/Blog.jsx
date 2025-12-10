import { useContext, useLayoutEffect } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { BsPatchQuestionFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
const Blog = () => {

        const {screenmode} = useContext(AuthContex)
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="h-auto mb-16 md:mb-20 md:mt-20">
            <div className="w-10/12 m-auto">
                <h1 className={`text-center text-xl md:text-4xl ${screenmode ? "text-dmgreen ": "text-lmblue"}`}>Blogs & FAQS</h1>
            
                <div className={`md:w-3/6 m-auto mt-12 space-y-6`}>
                
                <div className={`border-t border-b  shadow-sm rounded-tl-xl rounded-br-xl ${screenmode? 'shadow-dmgreen' : 'shadow-lmblue'}`}>
                <div className={`space-y-2 my-4 m-2`}>
                    <div className={` ${screenmode? "text-dmgreen" : 'text-lmblue'} md:text-lg flex items-center space-x-2 font-bold`}>
                    <h1  ><BsPatchQuestionFill /></h1>
                    <h2>How do I create an account on TechHeaven?</h2>
                    </div>
                    <div className="flex  space-x-2 text-sm md:text-[16px]  ml-6">
                        <h1 className={`mt-1 ${screenmode ? "text-dmgreen" : 'text-lmblue'}`}><FaArrowRight /></h1>
                       <h3 className="">You can create an account on TechHeaven using Firebase Authentication by signing up with your email and password or by using social login options like Google. Simply click on the "Sign Up" button and follow the prompts.</h3>
                    </div>
                </div>
                </div>

                <div className={`border-t border-b  shadow-sm rounded-tl-xl rounded-br-xl ${screenmode? 'shadow-dmgreen' : 'shadow-lmblue'}`}>
                <div className={`space-y-2 my-4 m-2`}>
                    <div className={` ${screenmode? "text-dmgreen" : 'text-lmblue'} md:text-lg flex items-center space-x-2 font-bold`}>
                    <h1  ><BsPatchQuestionFill /></h1>
                    <h2>Can I update my cart after adding products?</h2>
                    </div>
                    <div className="flex  space-x-2  ml-6">
                        <h1 className={`mt-1 ${screenmode ? "text-dmgreen" : 'text-lmblue'}`}><FaArrowRight /></h1>
                       <h3 className="">Yes, you can easily update your cart on TechHeaven. You can add new products, change quantities, or remove items from your cart at any time before completing your purchase.</h3>
                    </div>
                </div>
                </div>

                <div className={`border-t border-b  shadow-sm rounded-tl-xl rounded-br-xl ${screenmode? 'shadow-dmgreen' : 'shadow-lmblue'}`}>
                <div className={`space-y-2 my-4 m-2`}>
                    <div className={` ${screenmode? "text-dmgreen" : 'text-lmblue'} md:text-lg flex items-center space-x-2 font-bold`}>
                    <h1  ><BsPatchQuestionFill /></h1>
                    <h2>How do admins manage products on TechHeaven?</h2>
                    </div>
                    <div className="flex  space-x-2  ml-6">
                        <h1 className={`mt-1 ${screenmode ? "text-dmgreen" : 'text-lmblue'}`}><FaArrowRight /></h1>
                       <h3 className="">Admins can add, update, and manage products directly from the admin dashboard. They have the ability to edit product details, adjust pricing, and manage inventory seamlessly.</h3>
                    </div>
                </div>
                </div>

                <div className={`border-t border-b  shadow-sm rounded-tl-xl rounded-br-xl ${screenmode? 'shadow-dmgreen' : 'shadow-lmblue'}`}>
                <div className={`space-y-2 my-4 m-2`}>
                    <div className={` ${screenmode? "text-dmgreen" : 'text-lmblue'} md:text-lg flex items-center space-x-2 font-bold`}>
                    <h1  ><BsPatchQuestionFill /></h1>
                    <h2>Is my personal information safe on TechHeaven?</h2>
                    </div>
                    <div className="flex  space-x-2  ml-6">
                        <h1 className={`mt-1 ${screenmode ? "text-dmgreen" : 'text-lmblue'}`}><FaArrowRight /></h1>
                       <h3 className="">Absolutely! TechHeaven uses Firebase Authentication and securely stores your data in a MongoDB database. We follow best practices to ensure your personal information is protected and never shared without your consent.</h3>
                    </div>
                </div>
                </div>

                </div>
            </div>

           

        </div>
    );
};

export default Blog;