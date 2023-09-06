import React from "react";
import Home from "../screens/Home";
import Blog from "../screens/Blog";

export const routes = [
  {
    path: "/",
    text: "Home",
    exact: true,
    mainLink: true,
    noTitle: true,
    element: <Home />,
  },
  {
    path: "/blog",
    text: "Blog",
    exact: true,
    mainLink: true,
    noTitle: true,
    element: <Blog />,
  }
];
