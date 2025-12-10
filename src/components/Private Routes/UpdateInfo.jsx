import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../AuthProvider/AuthProvider";
import Toast from "../Toast";

const UpdateInfo = () => {
  const UpdateData = useLoaderData();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const { screenmode } = useContext(AuthContex);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [FormData, setFormData] = useState(UpdateData);

  useEffect(() => {
    setSelectedBrand(UpdateData.brand);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`https://tech-heaven-server-seven.vercel.app/productDB`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((res) => res.json())
      .then((data) => {
        setToastMessage("Product Info Was Updated");
        setToastType("success");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 1500);
      });
  };

  const nowebkit = {
    WebkitAppearance: "none",
    MozAppearance: "textfield",
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...FormData, [name]: value });
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-auto mb-16 md:mb-20 md:mt-16 -mt-8 font-menu">
      <div>
        <div className="text-center mb-8 md:mb-16">
          <h2
            className={`${
              screenmode ? " text-dmgreen" : "text-lmblue"
            } md:text-xl md:mb-3 mb-1`}
          >
            Update product
          </h2>
          <h1 className="md:text-5xl text-2xl font-menu font-medium">
            Let's update existing products!
          </h1>
        </div>

        <div
          className={`md:w-1/2 w-72 m-auto ${
            screenmode ? "bg-[#192022]" : "bg-white"
          } rounded-tl-3xl rounded-br-3xl`}
        >
          <div className="w-10/12 m-auto md:pt-3">
            <h1 className="md:text-xl pt-8 md:pb-4">
              Give the Updated Product Details Here:
            </h1>
            <form action="" className="text-center" onSubmit={handleUpdate}>
              <div className={`grid md:grid-cols-2 text-left`}>
                <div className="md:space-y-2 space-y-1 mt-3 md:mt-6">
                  <label
                    htmlFor=""
                    className="block text-[11px] md:text-[16px]  uppercase"
                  >
                    Product Name{" "}
                    <span
                      className={`${
                        screenmode ? "text-dmgreen" : "text-lmblue"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <input
                    required
                    value={`${FormData.name}`}
                    name="name"
                    placeholder="Name"
                    type="text"
                    onChange={handleChange}
                    className={`bg-white md:text-[15px] text-[11px] outline font-menu rounded-sm outline-1 py-2 px-2 w-4/5 ${
                      screenmode
                        ? "focus:outline-dmgreen text-black"
                        : "focus:outline-lmblue outline-slate-400"
                    }`}
                  />
                </div>
                <div className="md:space-y-2 space-y-1 mt-3 md:mt-6">
                  <label
                    htmlFor=""
                    className="block text-[11px] md:text-[16px]  uppercase"
                  >
                    Type{" "}
                    <span
                      className={`${
                        screenmode ? "text-dmgreen" : "text-lmblue"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <input
                    required
                    value={`${FormData.type}`}
                    name="type"
                    placeholder="Device type"
                    type="text"
                    onChange={handleChange}
                    className={`bg-white md:text-[15px] text-[11px] outline font-menu rounded-sm outline-1 py-2 px-2 w-4/5 ${
                      screenmode
                        ? "focus:outline-dmgreen text-black"
                        : "focus:outline-lmblue outline-slate-400"
                    }`}
                  />
                </div>
                <div className="md:space-y-2 space-y-1 mt-3 md:mt-6">
                  <label
                    htmlFor=""
                    className="block text-[11px] md:text-[16px]  uppercase"
                  >
                    Price{" "}
                    <span
                      className={`${
                        screenmode ? "text-dmgreen" : "text-lmblue"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <input
                    required
                    value={`${FormData.price}`}
                    name="price"
                    placeholder="Price"
                    type="text"
                    pattern="[0-9]*[.,]?[0-9]*"
                    style={nowebkit}
                    onChange={handleChange}
                    className={`bg-white md:text-[15px] text-[11px] outline font-menu rounded-sm outline-1 py-2 px-2 w-4/5 ${
                      screenmode
                        ? "focus:outline-dmgreen text-black"
                        : "focus:outline-lmblue outline-slate-400"
                    }`}
                  />
                </div>

                <div className="md:space-y-2 space-y-1 mt-3 md:mt-6">
                  <label
                    htmlFor=""
                    className="block text-[11px] md:text-[16px]  uppercase"
                  >
                    Brand{" "}
                    <span
                      className={`${
                        screenmode ? "text-dmgreen" : "text-lmblue"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      name="brand"
                      className={`${
                        screenmode
                          ? "focus:border-dmgreen"
                          : "focus:border-lmblue border-slate-400 "
                      }  bg-white text-black py-2 px-2 border rounded-sm md:text-[15px] text-[11px] `}
                      value={selectedBrand}
                      onChange={handleBrandChange}
                      id=""
                    >
                      <option value="" disabled>
                        Select a brand
                      </option>
                      <option className="" value="Apple">
                        Apple
                      </option>
                      <option className="" value="Samsung">
                        Samsung
                      </option>
                      <option className="" value="Google">
                        Google
                      </option>
                      <option className="" value="Sony">
                        Sony
                      </option>
                      <option className="" value="Microsoft">
                        Microsoft
                      </option>
                      <option className="" value="Intel">
                        Intel
                      </option>
                    </select>
                  </div>
                </div>

                <div className="md:space-y-2 space-y-1 mt-3 md:mt-6">
                  <label
                    htmlFor=""
                    className="block text-[11px] md:text-[16px]  uppercase"
                  >
                    Rating ?/10{" "}
                    <span
                      className={`${
                        screenmode ? "text-dmgreen" : "text-lmblue"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <input
                    required
                    value={`${FormData.rating}`}
                    name="rating"
                    placeholder="Product rating"
                    type="text"
                    max="10"
                    min="0"
                    pattern="[0-9]*[.,]?[0-9]*"
                    onChange={handleChange}
                    className={`bg-white md:text-[15px] text-[11px] outline font-menu rounded-sm outline-1 py-2 px-2 w-4/5 ${
                      screenmode
                        ? "focus:outline-dmgreen text-black"
                        : "focus:outline-lmblue outline-slate-400"
                    }`}
                  />
                </div>
                <div className="md:space-y-2 space-y-1 mt-3 md:mt-6">
                  <label
                    htmlFor=""
                    className="block text-[11px] md:text-[16px]  uppercase"
                  >
                    Description{" "}
                    <span
                      className={`${
                        screenmode ? "text-dmgreen" : "text-lmblue"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <input
                    required
                    value={`${FormData.description}`}
                    name="description"
                    placeholder="Short description"
                    type="text"
                    onChange={handleChange}
                    className={`bg-white md:text-[15px] text-[11px] outline font-menu rounded-sm outline-1 py-2 px-2 w-4/5 ${
                      screenmode
                        ? "focus:outline-dmgreen text-black"
                        : "focus:outline-lmblue outline-slate-400"
                    }`}
                  />
                </div>
                <div className="md:space-y-2 space-y-1 mt-3 md:mt-6">
                  <label
                    htmlFor=""
                    className="block text-[11px] md:text-[16px]  uppercase"
                  >
                    Image url{" "}
                    <span
                      className={`${
                        screenmode ? "text-dmgreen" : "text-lmblue"
                      }`}
                    >
                      *
                    </span>
                  </label>
                  <input
                    required
                    value={`${FormData.url}`}
                    name="url"
                    placeholder="url"
                    type="text"
                    onChange={handleChange}
                    className={`bg-white md:text-[15px] text-[11px] outline font-menu rounded-sm outline-1 py-2 px-2 w-4/5 ${
                      screenmode
                        ? "focus:outline-dmgreen text-black"
                        : "focus:outline-lmblue outline-slate-400"
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`md:my-12 my-8 md:px-2 md:py-3 py-1 md:text-lg rounded-md md:rounded-lg font-medium w-1/3  m-auto  ${
                  screenmode
                    ? "bg-dmgreen text-black duration-200 hover:bg-emerald-400"
                    : "duration-200 bg-lmblue text-white hover:bg-blue-600"
                }`}
              >
                Submit
              </button>
              {showToast && (
                <Toast
                  message={toastMessage}
                  type={toastType}
                  onClose={() => setShowToast(false)}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
