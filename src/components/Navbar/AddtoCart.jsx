import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import ViewCart from "./ViewCart";

const AddtoCart = () => {
  const hiddenStyle = { opacity: 0, transform: "scale(0.95)" };
  const visibleStyle = { opacity: 1, transform: "scale(1)" };

  const [style, setStyle] = useState(hiddenStyle);
  const [isOpen, setIsOpen] = useState(false);
  const { screenmode, settotalCart } = useContext(AuthContex);
  const [cartData, setcartData] = useState([]);
  const [deleteId, setdeleteID] = useState(null);

  const readLocalUser = () => {
    const raw = localStorage.getItem("userdata");
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const user = readLocalUser();
    if (user && Array.isArray(user.cart)) setcartData(user.cart);

    const onStorage = (e) => {
      if (e.key === "userdata") {
        const newUser = e.newValue ? JSON.parse(e.newValue) : null;
        setcartData(newUser && Array.isArray(newUser.cart) ? newUser.cart : []);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    setStyle(isOpen ? visibleStyle : hiddenStyle);
  }, [isOpen]);

  useLayoutEffect(() => {
    window.scrollTo(0, 80);
  }, []);

  const openConfirmDelete = (id) => {
    setdeleteID(id);
    setIsOpen(true);
  };

  const persistCart = async (email, cart) => {
    if (!email) return;
    try {
      const res = await fetch("http://localhost/api/updateCartByEmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, cart }),
      });
      const updated = await res.json();

      if (updated && updated.email) {
        localStorage.setItem("userdata", JSON.stringify(updated));
        setcartData(Array.isArray(updated.cart) ? updated.cart : []);
        settotalCart(Array.isArray(updated.cart) ? updated.cart.length : 0);
        return;
      }
    } catch (err) {
      console.error("persistCart error:", err);
    }

    const localUser = readLocalUser() || { email: "", username: "", cart: [] };
    localUser.cart = cart;
    localStorage.setItem("userdata", JSON.stringify(localUser));
    setcartData(cart);
    settotalCart(cart.length);
  };

  const handleDelete = async () => {
    const currentUser = readLocalUser() || { email: "", cart: [] };
    const newCart = cartData.filter((item) => String(item.productId) !== String(deleteId));

    if (currentUser.email) {
      await persistCart(currentUser.email, newCart);

    } else {
      currentUser.cart = newCart;
      localStorage.setItem("userdata", JSON.stringify(currentUser));
      setcartData(newCart);
      settotalCart(newCart.length);

    }
    setIsOpen(false);
    setdeleteID(null);
    window.location.reload();
  };

  const handleCancel = () => {
    setIsOpen(false);
    setdeleteID(null);
  };

  const total = (cartData.reduce((acc, it) => acc + Number(it.price ?? it.prodPrice ?? 0) * (Number(it.qty ?? 1) || 1), 0) || 0).toFixed(2);

  return (
    <div className="h-auto font-menu">
      <div className="md:mt-20 -mt-8">
        <div className={`flex items-center space-x-2 justify-center text-xl md:text-4xl ${screenmode ? "text-dmgreen" : "text-lmblue"}`}>
          <h1 className="font-semibold font-page">Your Cart</h1>
          <FaCartArrowDown />
        </div>

        <div className={`flex rounded-md mb-16 md:mb-20 mt-8 md:mt-12 w-10/12 md:w-2/3 justify-between m-auto shadow-lg bg-white ${screenmode ? "shadow-dmgreen text-black" : "shadow-lmblue "}`}>
          <div className="md:flex md:w-11/12 space-y-8 md:space-y-0 m-auto mt-4 md:mt-8 py-4 md:mb-20">
            <div className=" md:w-2/3 w-10/12 m-auto space-y-4 md:space-y-12">
              <h1 className="md:text-xl">Total Products</h1>

              <div className="md:space-y-7 space-y-8 ">
                {cartData && cartData.length ? (
                  cartData.map((data) => (
                    <ViewCart
                      key={data.productId}
                      data={{
                        productId: data.productId,
                        name: data.name || data.prodName,
                        brand: data.brand || data.prodBrand,
                        price: data.price ?? data.prodPrice,
                        url: data.url || data.prodUrl,
                        qty: data.qty ?? 1,
                      }}
                      setIsOpen={setIsOpen}
                      DeleteFromCart={openConfirmDelete}
                    />
                  ))
                ) : (
                  <div className="text-center py-8">No items in cart</div>
                )}
              </div>
            </div>

            <div className="md:w-1/4 pt-8 md:pt-0 w-3/4 mx-auto">
              <h1 className={`text-center py-2 md:py-4 ${screenmode ? "bg-dmgreen" : "bg-lmblue"} text-white text-lg md:text-xl`}>Checkout</h1>
              <ul className="list-disc list-inside mt-6 space-y-4 font-page">
                {cartData.map((data) => (
                  <div key={data.productId}>
                    <div className="flex justify-between text-sm md:text-[16px] w-11/12 m-auto">
                      <div className="flex items-center space-x-1 md:space-x-2 ">
                        <li className=" items-center ">{data.name || data.prodName}</li>
                        <div className="flex items-center font-bold">
                          <h1 className="text-sm text-black "><RxCross2 /></h1>
                          <h2>{data.qty ?? 1}</h2>
                        </div>
                      </div>

                      <div>
                        <h1 className="font-bold">${(data.price ?? data.prodPrice).toFixed ? (data.price ?? data.prodPrice).toFixed(2) : (data.price ?? data.prodPrice)}</h1>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
                <div className="w-11/12 m-auto pt-8 flex justify-between font-bold">
                  <h1>Total Price : </h1>
                  <h2>${total}</h2>
                </div>
              </ul>
              <button className={`md:w-1/3 text-white py-1 rounded-md md:rounded-full hover:scale-125 ease-in-out duration-300 m-auto block mt-8 px-4 md:px-2 ${screenmode ? "bg-dmgreen" : "bg-lmblue"}`}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center text-black bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-64 md:w-full max-w-sm transition-transform duration-100 ease-in-out" style={style}>
            <h2 className="md:text-lg font-semibold md:font-bold mb-2 md:mb-4">Confirm Delete</h2>
            <p className="md:text-[16px] text-sm mb-6">Are you sure you want to delete this item?</p>
            <div className="flex justify-end space-x-4">
              <button onClick={handleCancel} className="bg-gray-300 text-gray-700 px-4 py-1 md:py-2 text-sm md:text-[16px] rounded">Cancel</button>
              <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-1 md:py-2 text-sm md:text-[16px] rounded">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddtoCart;
