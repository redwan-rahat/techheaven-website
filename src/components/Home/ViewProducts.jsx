import { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { AuthContex } from "../AuthProvider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

const ViewProducts = ({ data }) => {
  const { screenmode } = useContext(AuthContex);
  const navigate = useNavigate();

  const { _id, id, brand, name, price, rating, type, url } = data;
  const productId = id ?? _id;

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const admins = (import.meta.env.VITE_ADMIN || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);


  const local = localStorage.getItem("userdata");
  const userEmail = local ? (JSON.parse(local).email || "").toLowerCase() : "";

  const isAdmin = userEmail && admins.includes(userEmail);

  const openConfirm = () => setConfirmOpen(true);
  const closeConfirm = () => setConfirmOpen(false);

  const handleDelete = async () => {
    if (!productId) return;
    setDeleting(true);
    try {
      const res = await fetch("http://localhost/api/deleteProduct.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: productId }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        window.location.reload();
      } else {
        console.error("Delete failed", json);
        alert(json.error || "Delete failed");
      }
    } catch (err) {
      console.error(err);
      alert("Delete error");
    } finally {
      setDeleting(false);
      closeConfirm();
    }
  };

  return (
    <div className={`${screenmode ? "border-dmgreen" : "border-lmblue border-opacity-50"} border rounded-br-3xl rounded-tl-3xl mt-4`}>
      <div className="space-y-2">
        <NavLink to={`/details/${productId}`}>
          <img src={url} className="rounded-tl-3xl w-full object-cover" alt={name} />
        </NavLink>

        <div className="w-11/12 m-auto space-y-1">
          <div className="pt-2 flex justify-between">
            <h1 className="font-semibold">{name}</h1>
            <div className="flex items-center space-x-1">
              <GoStarFill className="text-yellow-500" />
              <h2 className="flex">{rating}/10</h2>
            </div>
          </div>

          <h1>Category: {type}</h1>
          <h3>
            PRICE : <span className={`${screenmode ? "text-dmgreen" : "text-lmblue"}`}>${price}</span>
          </h3>

          <div className="flex justify-between pb-5">
            <div className={`flex items-center space-x-1 hover:space-x-2 ease-in-out duration-200 ${screenmode ? "text-gray-300 hover:text-white" : "hover:text-gray-800 text-gray-500"}`}>
              <NavLink to={`/details/${productId}`}>
                <button>Show Details</button>
              </NavLink>
              <FaArrowRight />
            </div>

            <div>
              {isAdmin && (
                <button
                  onClick={openConfirm}
                  className={`bg-red-600 text-white px-2 py-1 rounded-sm hover:scale-110 duration-200`}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {confirmOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-6">Are you sure you want to delete <strong>{name}</strong>?</p>
            <div className="flex justify-end gap-3">
              <button onClick={closeConfirm} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProducts;
