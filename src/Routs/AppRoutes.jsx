import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../layout/Root";

import React from "react";
import Home from "../pages/Home";
import Auth from "../layout/Auth";
import Login from "../pages/Login";

const AppRoutes = () => {
  const AppRoutes = [
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
      children: [{
          path:'login',
          element:<Login/>
      },{
          path:'register',
          element:<Login/>
      }
     ],
    },
  ];
  const router = createBrowserRouter(AppRoutes)
  return (
     <RouterProvider router={router}/>
  )

};

export default AppRoutes;
