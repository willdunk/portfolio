import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import theme from "./theme";
import { routes } from "./utils";

const App = () => {
  console.log(process.env.HASH);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            {routes.map((route, key) => (
              <Route {...{ key, ...route }} />
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
