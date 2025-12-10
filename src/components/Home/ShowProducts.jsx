import { useLoaderData, useParams } from "react-router-dom";
import ViewProducts from "./ViewProducts";
import NoProduct from "./NoProduct";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { reload } from "firebase/auth";

const ShowProducts = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
    const [images,setimages] = useState([])
    const {screenmode} = useContext(AuthContex)
    const brandData = useLoaderData()
    const brand = useParams()

    

    useEffect(()=>{

      const arr = []
      brandData.forEach(data =>
        {
           if(data?.url && arr.length<3) arr.push(data?.url)
        
        }
        )
      setimages(arr)
      
    },[brandData])

    useEffect(() => {
      const goToNextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
  
      const interval = setInterval(goToNextSlide, 3000);
  
      return () => clearInterval(interval);
    }, [currentIndex, images.length]);

   

   
    useLayoutEffect(()=>{
        window.scrollTo(0,0)
    },[brandData])


    const handlePrev = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const handleNext = () => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
    return (
        <div className="">
           
            {
              brandData.length>0 ?  
              
              <>

              <div className="text-center md:mt-12 font-menu">

              <div className="max-w-6xl mx-auto ">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} className="md:w-full  object-cover" />
          ))}
        </div>
        <button className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70" onClick={handlePrev}>‹</button>
        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70" onClick={handleNext}>›</button>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full ${currentIndex === index ? screenmode ? 'bg-dmgreen' : 'bg-lmblue' : 'bg-gray-400'}`} />
        ))}
      </div>
    </div>
    
    <h1 className={`text-xl ${screenmode ? 'text-dmgreen': 'text-lmblue'}  mt-12 md:mt-20`}>Showcasing {brand.brand} Products</h1>
        

              </div>


              <div className="grid md:grid-cols-3 m-auto w-3/5 gap-6 mb-16 md:mb-20 mt-10 ">
              {
                brandData.map(data =><ViewProducts data ={data}></ViewProducts>)
              }
              </div>
              </>
               
              
              
              : <NoProduct></NoProduct>
            }
        </div>
    );
};

export default ShowProducts;