import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "../src/Pages/Main/Main";
import List from "../src/Pages/List/List";
import Detail from "../src/Pages/Detail/Detail";
import Login from "../src/Pages/Sign/Login";
import SignUp from "../src/Pages/Sign/SignUp";
import About from "../src/Pages/About/About";
import Shoppingbag from "../src/Pages/Shoppingbag/Shoppingbag";
import Checkout from "../src/Pages/Checkout/Checkout";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list/:hello" component={List} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/list/:hello/:id" component={Detail} />
          <Route exact path="/shoppingbag" component={Shoppingbag} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
