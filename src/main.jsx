import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Mint from "./pages/Mint.jsx";
import Stake from "./pages/Stake.jsx";
import Faucet from "./pages/Faucet.jsx";
import Earn from "./pages/Earn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "mint",
        Component: Mint,
      },
      {
        path: "stake",
        Component: Stake,
      },
      {
        path: "earn",
        Component: Earn,
      },
      {
        path: "faucet",
        Component: Faucet,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
