import { createBrowserRouter } from "react-router";

import AppLayout from "@/components/Layouts/AppLayout";
import Home from "@/pages/HomePage/Home";
import Products from "@/pages/ProductsPage/Products";
import Basket from "@/pages/BasketPage/Basket";
import Blog from "@/pages/BlogPage/Blog";
import ContactUs from "@/pages/ContactUsPage/ContactUs";
import Auth from "@/pages/AuthPage/Auth";
import AdminDashboard from "@/pages/AdminPage/AdminDashboard";
import ProductDetails from "@/pages/ProductDetailsPage/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "vlog",
        element: <Blog />,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "product/:slug",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "auth",
    element: <Auth />,
  },
  {
    path: "admin",
    element: <AdminDashboard />,
  },
  { basename: "/mobo-land-shop" },
]);

export default router;
