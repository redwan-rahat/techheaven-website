import { useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { spiral } from 'ldrs'

spiral.register()




const PrivateRoute = ({children}) => {
    
    const {user,loader,screenmode} = useContext(AuthContex)
    
    
    if(loader) return <div className="h-screen text-center mt-32 text-blue-400"><l-spiral  size="70" speed="0.9"  color={`${screenmode ? '#5ceabb' : '#267fff'} `} ></l-spiral></div>
    
    if(user) return children
    

    else return <Navigate to={'/login'}></Navigate>


   
};

export default PrivateRoute;