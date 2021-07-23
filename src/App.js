import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
