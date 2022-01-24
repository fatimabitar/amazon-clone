import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/Login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
