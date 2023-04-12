import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Basket from "./pages/basket/Basket";
import Catalog from "./pages/catalog/Catalog";
import Checkout from "./pages/checkout/Checkout";
import Main from "./pages/main/Main";
import ProductPage from "./pages/product/ProductPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      { path: "basket", element: <Basket /> },
      { path: "catalog", element: <Catalog /> },
      { path: "checkout", element: <Checkout /> },
      { path: "products/:id", element: <ProductPage /> },
    ],
  },
]);

export const Routs = () => {
  return <RouterProvider router={router} />;
};
