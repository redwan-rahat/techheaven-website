import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import app from "../../firebase.config";

export const AuthContex = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setuser] = useState(null)
    const [loader,setloader] = useState(true)
    const [totalCart,settotalCart] = useState(0)
    const [userInfo,setUserInfo] = useState('')
    const[useremail,setemail] = useState()
    const [userData, setUserData] = useState(null);

    const fetchUserByEmail = async (email) => {
      try {
        const res = await fetch(
          `http://localhost/api/getUserByEmail.php?email=${email}`
        );
    
        const data = await res.json();
    
        // Save user data to localStorage
        localStorage.setItem("userdata", JSON.stringify(data));
    
        console.log("User stored in localStorage:", data);
        return data; // optional if you want to use it after calling
      } catch (err) {
        console.error("Error fetching user:", err);
        return null;
      }
    };
    
    
    useEffect(()=>{
      localStorage.getItem('email') ? setemail(localStorage.getItem('email')) : ''
    },[])
    


    const handleGetEmail = (email,username)=>{
          localStorage.setItem('email',JSON.stringify(email))
          localStorage.setItem('username',JSON.stringify(username))
          setemail(email)
    }

    
    const getmode = () =>{
        const  temp = JSON.parse( localStorage.getItem('mode'))

      if (temp !== null) {
        return temp;
      }
       else {
        localStorage.setItem('mode', false);
        localStorage.setItem('screen', JSON.stringify("lmblue"));
        return false;
      }

    }
    const [screenmode,setscreenmode] = useState(getmode)
    const changeScreen = (val)=>{
        
        val ? setscreenmode(true) : setscreenmode(false)
        val ? localStorage.setItem('mode',true) : localStorage.setItem('mode',false)
        val ? localStorage.setItem('screen',JSON.stringify('dmgreen')) : localStorage.setItem('screen',JSON.stringify('lmblue'))

      
    }


      const handleSignUp = (email,password) =>{

        setloader(true)
        return createUserWithEmailAndPassword(auth,email,password)

      }

      const handleSignIn =(email,password)=>{
        setloader(true)
        return signInWithEmailAndPassword(auth,email,password)

      }

      const handleSignOut =()=>{
        setloader(true)
        settotalCart(0)
        localStorage.clear();
            window.location.reload();
        return signOut(auth)
      }

      const handleGoogleSignIn = () =>{
        setloader(true)
        return signInWithPopup(auth,provider)
      }
      useEffect(()=>{

        const unscubsribe = onAuthStateChanged(auth, (user) =>{
          setuser(user)
          setloader(false)
        })

        return ()=> unscubsribe()

      },[])



    const UserData = {fetchUserByEmail, userInfo,setUserInfo,screenmode,changeScreen,handleSignUp,user,loader,handleSignIn,handleSignOut,handleGoogleSignIn,handleGetEmail,useremail,settotalCart,totalCart}
    return (
        <div>
            <AuthContex.Provider value = {UserData}>{children}</AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;