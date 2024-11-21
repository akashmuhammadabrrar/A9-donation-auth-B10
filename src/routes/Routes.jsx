import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Help from "../pages/Help";
import Campaign from "../pages/Campaign";
import About from "../pages/About";
import Details from "../pages/Details";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/campaign",
        element: <Campaign></Campaign>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
    ],
  },
]);

export default routes;
