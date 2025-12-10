import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage";
import Login from "../AuthProvider/Login";
import Register from "../AuthProvider/Register";
import PrivateRoute from "../Private Routes/PrivateRoute";
import ShowProducts from "../Home/ShowProducts";
import ViewDetails from "../Private Routes/ViewDetails";
import AddtoCart from "../Navbar/AddtoCart";
import Contact from "../Contacts/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage>,</ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/showproducts/:brand",
        element: <ShowProducts></ShowProducts>,
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <AddtoCart></AddtoCart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
