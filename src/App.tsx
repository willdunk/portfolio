import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utils";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const App = () => {
  console.log(process.env.HASH);
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            {routes.map((route, key) => (
              <Route {...{ key, ...route }} />
            ))}
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
};

export default App;
