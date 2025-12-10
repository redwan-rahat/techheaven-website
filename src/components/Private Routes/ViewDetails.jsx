import { FaCartArrowDown } from "react-icons/fa";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";
import Toast from "../Toast";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { screenmode, settotalCart } = useContext(AuthContex);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("info");


  const getLocalUser = () => {
    const raw = localStorage.getItem("userdata");
    return raw ? JSON.parse(raw) : null;
  };

  const { id } = useParams();
  const [viewData, setviewData] = useState({});

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProduct = async () => {
      try {
        const url = `http://localhost/api/productDetails.php?id=${id}`;

        const res = await fetch(url, { signal });
        const data = await res.json();

        setviewData(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log("Fetch error:", err);
          setviewData({});
        }
      }
    };

    fetchProduct();

    return () => controller.abort();
  }, [id]);


  const persistCartToBackend = async (email, cart) => {
    if (!email) return;
    try {
      await fetch("http://localhost/api/updateCartByEmail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, cart }),
      });
    } catch (err) {
      console.error("Persist cart error:", err);
    }
  };

  const handleCart = async (e) => {
    e.preventDefault();


    const prodID = viewData.id;
    const prodBrand = viewData.brand;
    const prodName = viewData.name;
    const prodPrice = viewData.price;
    const prodUrl = viewData.url || viewData.image_url || "";
    const prodRating = viewData.rating;

    const prodItem = {
      productId: prodID,
      name: prodName,
      url: prodUrl,
      price: prodPrice,
      qty: 1,
      brand: prodBrand,
      rating: prodRating,
    };


    let user = getLocalUser();
    if (!user) {
      
      user = { email: "", username: "", cart: [] };
    }

    if (!Array.isArray(user.cart)) user.cart = [];


    const idx = user.cart.findIndex(
      (it) => String(it.productId) === String(prodItem.productId)
    );

    if (idx === -1) {
      user.cart.push(prodItem);
    } else {
      user.cart[idx].qty = (Number(user.cart[idx].qty) || 0) + 1;
    }


    localStorage.setItem("userdata", JSON.stringify(user));


    if (user.email) {
      await persistCartToBackend(user.email, user.cart);
    } else {

      console.log("No email in userdata — cart saved locally only.");
    }


    settotalCart(user.cart.length || 0);
    window.location.reload();
    setToastMessage("Successfully Added To Cart");
    setToastType("success");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto mb-16 md:mb-20 md:mt-32">
      <div className="w-10/12 m-auto md:flex justify-between gap-20">
        <img
          className={`md:w-1/2 rounded-tl-3xl rounded-br-3xl`}
          src={viewData?.url}
          alt={viewData?.name || "product"}
        />

        <div className="md:w-1/2 mt-8 ">
          <div className="pt-2  justify-between md:flex  ">
            <h1 className={`font-semibold text-2xl mb-4 md:mb-0 md:text-5xl `}>
              {viewData?.name}
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
              {viewData?.rating}/10
            </h2>
            <h1>
              <span className="font-bold">Category:</span> {viewData?.type}
            </h1>
            <h2>
              <span className="font-bold">Brand:</span> {viewData?.brand}
            </h2>
            <h2>
              <span className="font-bold">Price: </span>
              <span className={`${screenmode ? "text-dmgreen" : "text-lmblue"}`}>
                ${viewData?.price}{" "}
              </span>{" "}
            </h2>
            <h3 className="w- opacity-80 text- ">{viewData?.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
