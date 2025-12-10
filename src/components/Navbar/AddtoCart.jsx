import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import ViewCart from "./ViewCart";

const AddtoCart = () => {
  const hiddenStyle = {
    opacity: 0,
    transform: "scale(0.95)",
  };

  const visibleStyle = {
    opacity: 1,
    transform: "scale(1)",
  };

  const [style, setStyle] = useState(hiddenStyle);
  const [isOpen, setIsOpen] = useState(false);
  const { screenmode, useremail, settotalCart } = useContext(AuthContex);
  const [cartData, setcartData] = useState([]);
  const [deleteId, setdeleteID] = useState(null);
  const [userID, setuserId] = useState("");

  useEffect(() => {
    fetch(`https://tech-heaven-server-seven.vercel.app/users/${useremail}`)
      .then((res) => res.json())
      .then((data) => {
        setcartData(data.cart);
        setuserId(data._id);
      });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setStyle(visibleStyle);
    } else {
      setStyle(hiddenStyle);
    }
  }, [isOpen]);

  const DeleteFromCart = (id) => {
    setdeleteID(id);
  };

  const handleDelete = () => {
    let duplicate = false;

    const newCart = cartData.filter((data) => {
      if (data.prodID === deleteId && !duplicate) {
        duplicate = true;

        return false;
      }
      return true;
    });

    setcartData(newCart);
    fetch(`https://tech-heaven-server-seven.vercel.app/addtocart/${userID}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCart),
    });
    settotalCart(newCart.length);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 80);
  }, []);
  const total = cartData
    .reduce((accu, data) => accu + Number(data.prodPrice), 0)
    .toFixed(2);

  return (
    <div className="h-auto font-menu">
      <div className="md:mt-20 -mt-8">
        <div
          className={`flex items-center space-x-2 justify-center text-xl md:text-4xl  ${
            screenmode ? "text-dmgreen" : "text-lmblue"
          }`}
        >
          <h1 className="font-semibold font-page">Your Cart</h1>
          <FaCartArrowDown />
        </div>

        <div
          className={`flex rounded-md mb-16 md:mb-20 mt-8 md:mt-12 w-10/12 md:w-2/3 justify-between m-auto shadow-lg bg-white ${
            screenmode ? "shadow-dmgreen text-black" : "shadow-lmblue "
          }`}
        >
          <div className="md:flex  md:w-11/12 space-y-8 md:space-y-0 m-auto mt-4 md:mt-8 py-4 md:mb-20">
            <div className=" md:w-2/3 w-10/12 m-auto space-y-4 md:space-y-12">
              <h1 className="md:text-xl">Total Products</h1>

              <div className="md:space-y-7 space-y-8 ">
                {cartData &&
                  cartData.map((data) => (
                    <ViewCart
                      data={data}
                      setIsOpen={setIsOpen}
                      DeleteFromCart={DeleteFromCart}
                    ></ViewCart>
                  ))}
              </div>
            </div>

            <div
              className={`md:w-1/4 pt-8 md:pt-0 w-3/4  mx-auto ${
                screenmode ? "" : ""
              }`}
            >
              <h1
                className={`text-center  py-2 md:py-4 ${
                  screenmode ? "bg-dmgreen" : "bg-lmblue"
                } text-white text-lg md:text-xl`}
              >
                Checkout
              </h1>
              <ul className="list-disc list-inside mt-6 space-y-4 font-page">
                {cartData.map((data) => (
                  <>
                    <div className="flex justify-between text-sm md:text-[16px] w-11/12 m-auto">
                      <div className="flex items-center space-x-1 md:space-x-2 ">
                        <li key={data.prodID} className=" items-center ">
                          {data.prodName}{" "}
                        </li>
                        <div className="flex items-center font-bold">
                          <h1 className="text-sm text-black ">
                            <RxCross2 />
                          </h1>
                          <h2>1</h2>
                        </div>
                      </div>

                      <div>
                        <h1 className="font-bold">{data.prodPrice}</h1>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
                <div className="w-11/12 m-auto pt-8 flex justify-between font-bold">
                  <h1>Total Price : </h1>
                  <h2>{total}</h2>
                </div>
              </ul>
              <button
                className={`md:w-1/3 text-white py-1 rounded-md md:rounded-full hover:scale-125 ease-in-out duration-300 m-auto block mt-8 px-4 md:px-2 ${
                  screenmode ? "bg-dmgreen" : "bg-lmblue"
                }`}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center text-black bg-black bg-opacity-50">
          <div
            className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-64 md:w-full max-w-sm transition-transform  duration-100 ease-in-out"
            style={style}
          >
            <h2 className="md:text-lg font-semibold md:font-bold mb-2 md:mb-4">
              Confirm Delete
            </h2>
            <p className="md:text-[16px] text-sm mb-6">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 px-4 py-1 md:py-2 text-sm md:text-[16px]  rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-1 md:py-2 text-sm md:text-[16px]  rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddtoCart;
