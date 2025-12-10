import { useLoaderData } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext, useLayoutEffect, useState } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import Toast from "../Toast";

const ViewDetails = () => {
  const viewData = useLoaderData();
  const { screenmode, settotalCart } = useContext(AuthContex);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");

  const useremail = JSON.parse(localStorage.getItem("email"));

  const handleCart = async (e) => {
    e.preventDefault();

    const prodID = viewData._id;
    const prodBrand = viewData.brand;
    const prodName = viewData.name;
    const prodPrice = viewData.price;
    const prodUrl = viewData.url;
    const prodRating = viewData.rating;

    const prodData = {
      prodID,
      prodBrand,
      prodName,
      prodPrice,
      prodUrl,
      prodRating,
    };

    const temparr = [];
    // let username = "";

    const response = await fetch(
      `https://tech-heaven-server-seven.vercel.app/users/${useremail}`
    );

    const data = await response.json();

    // setloadUser(data);

    // username = data._id;
    // if (loadUser?.cart.length > 0) temparr.push(...loadUser.cart);

    data.cart ? temparr.push(...data.cart, prodData) : temparr.push(prodData);

    // if (loadUser?.cart) temparr.push(...loadUser.cart);
    // else temparr.push(prodData);

    fetch(`https://tech-heaven-server-seven.vercel.app/addtocart/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(temparr),
    })
      .then((res) => res.json())
      .then((data) => {
        settotalCart(temparr.length);
        setToastMessage("Successfully Added To Cart");
        setToastType("success");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000);
      });
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-auto mb-16 md:mb-20 md:mt-32">
      <div className="w-10/12 m-auto md:flex justify-between gap-20">
        <img
          className={`md:w-1/2 rounded-tl-3xl rounded-br-3xl`}
          src={viewData.url}
          alt=""
        />

        <div className="md:w-1/2 mt-8 ">
          <div className="pt-2  justify-between md:flex  ">
            <h1 className={`font-semibold text-2xl mb-4 md:mb-0 md:text-5xl `}>
              {viewData.name}
            </h1>

            <div className="items-center flex mr-2">
              <button
                onClick={handleCart}
                className={`flex items-center px-3 py-2  space-x-2 rounded-md hover:shadow-lg duration-200 hover:scale-105 hover:font-semibold hover:bg-white hover:border-2 ${
                  screenmode
                    ? "bg-dmgreen text-black hover:border-dmgreen "
                    : "bg-lmblue hover:border-lmblue hover:text-lmblue text-white"
                }`}
              >
                <h1>Add to Cart</h1>
                <FaCartArrowDown />
              </button>
              {showToast && (
                <Toast
                  message={toastMessage}
                  type={toastType}
                  onClose={() => setShowToast(false)}
                />
              )}
            </div>
          </div>

          <div className="md:mt-12 mt-6 space-y-2 md:text-lg">
            <h2 className=" ">
              <span className="font-bold">Rating: </span>
              {viewData.rating}/10
            </h2>
            <h1>
              <span className="font-bold">Category:</span> {viewData.type}
            </h1>
            <h2>
              <span className="font-bold">Brand:</span> {viewData.brand}
            </h2>
            <h2>
              <span className="font-bold">Price: </span>
              <span
                className={`${screenmode ? "text-dmgreen" : "text-lmblue"}`}
              >
                ${viewData.price}{" "}
              </span>{" "}
            </h2>
            <h3 className="w- opacity-80 text- ">{viewData.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
