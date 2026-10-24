import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages";
import BlogPost from "./pages/blog";
import NotFound from "./pages/notFound";
import "./App.css";
// Test
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
