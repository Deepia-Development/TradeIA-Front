import React from "react";
import App from "./../app.jsx";
import { Navigate } from "react-router-dom";

import PagesError from "./../pages/pages/error.js";
import PagesLogin from "./../pages/pages/login.js";
import PagesRegister from "./../pages/pages/register.js";
import Home from "./../pages/home/home.js";

const AppRoute = [
  {
    path: "*",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
      {
        path: "pages/*",
        children: [
          { path: "error", element: <PagesError /> },
          { path: "login", element: <PagesLogin /> },
          // { path: "register", element: <PagesRegister /> },
        ],
      },
    ],
  },
];

export default AppRoute;
