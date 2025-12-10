import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthContex } from "./AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Toast from "../Toast";
import axios from "axios";

const Login = () => {
  const {
    screenmode,
    handleSignIn,
    handleGoogleSignIn,
    handleGetEmail,

  } = useContext(AuthContex);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showpass, setshowpass] = useState(false);

  const [errormessage, seterrormess] = useState("");
  const nav = useNavigate();

  const handleGDB = async (GUserInfo) => {
          
   await axios.get(
        `https://tech-heaven-server-seven.vercel.app/users/${GUserInfo.email}`
      )
          .then(data=>{
                
         if(data.data == null || data.data == undefined || data.data == '') {
   
      axios.post("https://tech-heaven-server-seven.vercel.app/users", GUserInfo)
        .then((data) => {})
        .catch((error) => {});
      
    }
  
          })

  };

  // const handleDB = (UserData) => {
  //   fetch(`https://tech-heaven-server-seven.vercel.app/users/${UserData.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!data) {
  //         fetch("https://tech-heaven-server-seven.vercel.app/users", {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(UserData),
  //         });
  //       }
  //     });
  // };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e) => {
    seterrormess("");
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    handleSignIn(email, password)
      .then((result) => {
        handleGetEmail(email);
        setToastMessage("Login successful");
        setToastType("success");
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
          setTimeout(() => {
            nav("/");
            window.location.reload();
          }, 1000);
        }, 1200);
      })
      .catch((error) => {
        if (error.message == "Firebase: Error (auth/invalid-credential).")
          seterrormess("Your credentials are invalid");
      });
  };

  const handleGSignIn = (e) => {
    e.preventDefault();

    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        const username = user.displayName;
        const email = user.email;
        const gurl = user.photoURL;
        const gSignin = true;
        const gverify = user.emailVerified;
        handleGetEmail(email);
        const UserInfog = {
          username,
          email,
          gurl,
          gSignin,
          gverify,
        };

        handleGDB(UserInfog);
        setToastMessage("Login successful");
        setToastType("success");
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
          setTimeout(() => {
            nav("/");
            window.location.reload();
          }, 1000);
        }, 1200);
      })
      .catch((error) => {});
  };

  return (
    <div className="h-auto mb-16 md:mb-20 ">
      <div
        className={` md:mt-20 border-2 md:text-left shadow-lg md:rounded-tr-3xl md:rounded-bl-2xl rounded-tr-xl rounded-bl-xl w-4/5   md:w-3/5 lg:w-2/5 m-auto ${
          screenmode
            ? "border-dmgreen text-dmgreen bg-slate-800 shadow-dmgreen "
            : "text-lmblue border-lmblue bg-white shadow-lmblue"
        }  `}
      >
        <div className="mt-8 text-3xl md:text-5xl text-center font-semibold font-logo">
          <h1>Login</h1>
        </div>
        <hr
          className={`mt-4 ${
            screenmode ? "bg-dmgreen" : "bg-lmblue "
          } border-dashed`}
        />
        <form
          onSubmit={handleLogin}
          action=""
          className="md:w-[390px] m-auto  md:mt-12   mt-6 space-y-2 md:space-y-4 "
        >
          <div className="md:space-x-28 w-4/5 md:w-auto m-auto space-y-1 md:space-y-0 md:flex items-center">
            <label htmlFor="" className="font-semibold font-menu ">
              <span>Email</span>
            </label>
            <div className="flex md:space-x-2 items-center">
              <h3 className="font-semibold hidden md:flex lg:flex font-menu ">:</h3>
              <input
                type="email"
                name="email"
                required
                
                className={` ${
                  screenmode
                    ? "bg-slate-700 border-white text-white focus:border-dmgreen"
                    : "bg-[#eff4fd] border-slate-300 text-black focus:border-lmblue "
                } py-1 border-2 px-2  font-menu focus:outline-none md:m-auto rounded-md `}
              />
            </div>
          </div>

          <div className=" md:space-x-[78px] w-4/5 md:w-auto m-auto space-y-1 md:space-y-0 md:flex items-center">
            <label htmlFor="" className="font-semibold font-menu ">
              <span>Password</span>
            </label>
            <div className="flex  md:space-x-2 items-center relative">
              <h3 className="font-semibold font-menu hidden md:flex ">:</h3>
              <input
                type={`${showpass ? "text" : "password"}`}
                name="password"
                required
                className={` ${
                  screenmode
                    ? "bg-slate-700 border-white text-white focus:border-dmgreen"
                    : "bg-[#eff4fd] border-slate-300 text-black focus:border-lmblue "
                } py-1 border-2 px-2  font-menu focus:outline-none rounded-md`}
              />
              <div
                className="absolute left-48 cursor-pointer text-lg"
                onClick={() => setshowpass(!showpass)}
              >
                {showpass ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>}
              </div>
            </div>
          </div>

          <div className="relative py-1">
            <h1 className=" w-1/2 right-6 absolute -my-4 text-sm text-red-600 ease-in-out lowercase">
              {errormessage ? errormessage : ""}
            </h1>
          </div>

          <div className="flex md:block justify-center md:ml-[136px] pt-4 ">
            <input
              type="submit"
              value="Sign In"
              className={`${
                screenmode
                  ? "bg-dmgreen text-black hover:bg-slate-700 hover:text-dmgreen hover:border-dmgreen "
                  : "bg-lmblue text-white hover:bg-white hover:text-lmblue hover:border-lmblue"
              } px-6  py-1 border-2 cursor-pointer duration-200 rounded-tr-lg rounded-bl-lg  font-menu `}
            />
          </div>
        </form>

        <div className="flex justify-center mt-8 space-x-1 font-menu text-sm">
          <h1>Don't have an account?</h1>
          <NavLink to={"/register"}>
            <h1 className="underline font-semibold hover:brightness-150">
              Register Here!
            </h1>
          </NavLink>
        </div>

        <hr
          className={`md:my-8 my-7 w-2/4 m-auto ${
            screenmode ? "bg-dmgreen" : "bg-lmblue "
          } border-dashed `}
        />

        <div
          onClick={handleGSignIn}
          className={`hover:cursor-pointer  items-center flex w-4/5 md:w-2/5 m-auto border-2 py-2 rounded-tr-lg rounded-bl-lg space-x-4  md:mb-20 mb-12 justify-center hover:shadow-lg duration-200 hover:scale-105 ${
            screenmode
              ? "bg-slate-700 border-white hover:text-white hover:bg-dmgreen hover:bg-opacity-40 hover:shadow-dmgreen hover:shadow-md"
              : "bg-[#eff4fd] border-slate-300 hover:bg-lmblue hover:text-white hover:bg-opacity-60 hover:shadow-lmblue hover:shadow-md"
          }`}
        >
          {showToast && (
            <Toast
              message={toastMessage}
              type={toastType}
              onClose={() => setShowToast(false)}
            />
          )}

          <img
            src="https://i.postimg.cc/MZbxcsJG/google-png-small.png"
            className="w-6"
            alt=""
          />
          <div>
            <h1 className="">
              Sign In With <span className="font-semibold">Google</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
