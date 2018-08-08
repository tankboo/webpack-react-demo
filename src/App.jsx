import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Home from "./pages/Home";

import "./app.less";

class App extends Component {
  componentWillMount() {
    if (process.env.NODE_ENV !== "production") {
      console.log("Looks like we are in development mode!");
    }
  }

  render() {
    return <Home className="app" />;
  }
}

export default hot(module)(App);
