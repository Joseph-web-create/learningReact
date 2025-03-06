import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../layout/Root";

import React from "react";
import Home from "../pages/Home";
import Auth from "../layout/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";


const AppRoutes = () => {
  const Routes = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "auth",
      element: <Auth />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register/>,
        },
      ],
    },
  ];
  const route = createBrowserRouter(Routes);
  return <RouterProvider router={route} />;
};

export default AppRoutes;
