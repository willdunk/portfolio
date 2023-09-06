import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./src/utils";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./src/theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {routes.map((route, key) => (
            <Route {...{ key, ...route }} />
          ))}
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
