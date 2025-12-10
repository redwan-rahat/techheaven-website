import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const Practise = () => {
            const [laoddata,setloaddata] = useState([])
        const { isPending,practData:pract} = useQuery({
            queryKey:['practise'],
            queryFn: async ()=>{
               await axios.get(`https://tech-heaven-server-seven.vercel.app/showproducts/Apple`)
               .then(data=>
               {
               setloaddata(data.data)
                console.log(data)
               }
                )
                     
              

               
            }
        })
        console.log(pract)
        if(isPending)     
            return <span className="loading loading-spinner loading-lg"></span>
    return (
        <div>
            <h1>Practise here </h1>
            <h2>{
           laoddata && laoddata.map(data => console.log(data))
            
            }</h2>
        </div>
    );
};

export default Practise;