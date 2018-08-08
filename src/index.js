import React, { Component } from "react";
import ReactDom from "react-dom";
import App from "./App";

const render = C => {
  ReactDom.render(<C />, document.getElementById("root"));
};

render(App);

if (module.hot) {
  module.hot.accept(() => {
    console.log("Accepting the updated module hot !");
    render(App);
  });
}
