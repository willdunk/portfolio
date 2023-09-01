import React from "react";

import Home from "../screens/Home";

export const routes = [
  {
    path: "/",
    text: "Home",
    exact: true,
    mainLink: true,
    noTitle: true,
    element: <Home />,
  },
];
