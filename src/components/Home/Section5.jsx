import { useContext, useRef } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Section5 = () => {
    const {screenmode} = useContext(AuthContex)
    const ref = useRef(null)
    const handleMessage=(e)=>{
        e.preventDefault()
        ref.current.reset()
        toast.info('Message Sent Successfully!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
    return (
        <div className="lg:w-2/5 w-4/5 m-auto lg:pb-36 md:pb-20 pb-16 text-center">
            <ToastContainer
                 position="top-right"
                 autoClose={1500}
                 hideProgressBar={false}
                 newestOnTop={false}
                 closeOnClick
                 rtl={false}
                 pauseOnFocusLoss
                 draggable
                 pauseOnHover
                 theme="light"
                 
                 />

<ToastContainer />
            <div >
                <h2 className={`${screenmode ? "text-dmgreen" : "text-lmblue"} font-menu md:text-2xl lg:text-4xl mb-3 md:mb-4 lg:mb-8`}>Make Quick Contact with Us</h2>
                <h1 className="lg:text-3xl md:text-2xl font-menu font-semibold md:mb-8 lg:mb-12 mb-4">Have a question or need help? Fill out the form below, and we'll get back to you soon!</h1>

            </div>
            <div>
            <form ref={ref} onSubmit={handleMessage} className="lg:max-w-4xl md:max-w-3xl w-11/12 md:w-11/12 lg:w-auto  mx-auto md:p-8 p-2 bg-white shadow-lg rounded-xl md:rounded-lg grid grid-cols-1 md:grid-cols-2 md:gap-6 font-menu">
                  <div className="col-span-1">
                    <div className="mb-3 md:mb-5 mt-5 md:mt-0">
                      <label className="block text-gray-700 md:text-sm text-[12px]   md:text-center font-medium mb-1 md:mb-2" htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" className={`md:w-full w-3/4 p-2 md:p-3 text-[10px] md:text-[15px] border border-gray-300 rounded-sm md:rounded-lg focus:outline-none ${screenmode ? "focus:border-dmgreen " : 'focus:border-lmblue'} text-black bg-white focus:ring-1  `} placeholder="Your email address" required />
                    </div>
                    <div className="mb-3 md:mb-5">
                      <label className="block text-gray-700 md:text-sm text-[12px]   md:text-center font-medium mb-1 md:mb-2" htmlFor="subject">Subject</label>
                      <input type="text" id="subject" name="subject" className={`md:w-full w-3/4 p-2 md:p-3 text-[10px] md:text-[15px] border border-gray-300 rounded-sm md:rounded-lg focus:outline-none ${screenmode ? "focus:border-dmgreen " : 'focus:border-lmblue'} text-black bg-white focus:ring-1  `} placeholder="Subject of your message" required />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="md:mb-6 mb-4">
                      <label className="block text-gray-700 md:text-sm text-[12px]   md:text-center font-medium mb-1 md:mb-2" htmlFor="description">Description</label>
                      <textarea id="description" name="description" className={`md:w-full w-3/4 p-2 md:p-3 h-24 md:h-40 text-[10px] md:text-[15px] border border-gray-300 rounded-sm md:rounded-lg focus:outline-none ${screenmode ? "focus:border-dmgreen " : 'focus:border-lmblue'} text-black bg-white focus:ring-1  `} placeholder="Describe your query or concern" required></textarea>
                    </div>
                  </div>
                  <button type="submit" className={`${screenmode ? "bg-dmgreen hover:bg-emerald-400" : 'bg-lmblue hover:bg-blue-600'} duration-100 mb-5 md:mb-0 w-2/5 text-[10px] md:text-[15px] mx-auto md:w-full py-2 md:py-3  text-white font-semibold rounded-md md:rounded-lg shadow-md  focus:outline-none focus:ring-2  focus:ring-offset-1 md:col-span-2`}>Send Message</button>
                </form>

            </div>
            
        </div>
    );
};

export default Section5;