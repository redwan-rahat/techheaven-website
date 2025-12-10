import { BsTrash3Fill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const ViewCart = ({ data, setIsOpen, DeleteFromCart }) => {
  const { productId, name, brand, price, url, qty } = data;

  return (
    <div className="rounded-lg md:flex border-y-2 shadow-sm space-x-2 md:space-x-6 p-2">
      <NavLink to={`/details/${brand}/${productId}`}>
        <img
          src={url}
          className="rounded-tl-lg rounded-tr-lg md:w-56 h-full object-cover"
          alt={name}
        />
      </NavLink>

      <div className="md:flex mt-2 font-page justify-between md:w-full w-full">
        <NavLink to={`/details/${brand}/${productId}`} className="flex-1">
          <div className="md:space-y-4 ml-3 md:ml-0 md:mb-2">
            <h1 className="font-bold text-sm md:text-[16px]">{name}</h1>
            <h2 className="text-sm md:text-[16px]">{brand}</h2>
            <h3 className="text-orange-600 text-sm md:text-[16px]">
              ${Number(price).toFixed(2)}
            </h3>
          </div>
        </NavLink>

        <div className="h-full ml-3 md:ml-0 md:space-y-11 space-y-2 md:mr-2 flex flex-col items-end justify-between">
          <div className="text-sm md:text-[16px]">Quantity: {qty}</div>

          <div className="md:m-auto w-7 justify-end flex md:w-1/2">
            <button
              onClick={() => {
                setIsOpen(true);
                DeleteFromCart(productId);
              }}
              className="text-xl mb-3 md:mb-0 text-red-500 outline outline-1 outline-slate-300 hover:bg-red-100 duration-200 rounded-sm p-1"
              title="Delete item"
            >
              <BsTrash3Fill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
