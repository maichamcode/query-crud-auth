import { createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import AddProduct from "./page/AddProduct";
import AdminProduct from "./page/AdminProduct";
import UpdateProduct from "./page/UpdateProduct";
import Signup from "./page/auth/Signup";
import Signin from "./page/auth/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWebsite />,
    children: [
      { path: "signup", element: <Signup /> },
      { path: "signin", element: <Signin /> },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      { path: "dashboard", element: <div>DashBoard</div> },
      { path: "product", element: <AdminProduct /> },
      { path: "product/add", element: <AddProduct /> },
      { path: "product/:idProduct/update", element: <UpdateProduct /> },
    ],
  },
]);
