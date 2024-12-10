import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Help from "../pages/Help";
import Campaign from "../pages/Campaign";
import About from "../pages/About";
import Details from "../pages/Details";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
      },
      {
        path: "/campaign",
        element: (
          <PrivetRoute>
            <Campaign></Campaign>
          </PrivetRoute>
        ),
        loader: () => fetch("../data.json"),
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
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: async ({ params }) => {
          const result = await fetch("/data.json");
          const data = await result.json();
          const singleData = data.find((donation) => donation.id == params.id);
          return singleData;
        },
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default routes;
