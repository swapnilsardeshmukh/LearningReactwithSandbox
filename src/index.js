import React from "react";
//var React = require("react");
import ReactDOM from "react-dom";
//var ReactDOM = require("react-dom");

//This works
//ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));\

//following state will give error
//ReactDOM.render(<h1>Hello World</h1><p>paragraph</p>, document.getElementById("root"));

//soln:
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>paragraph</p>
  </div>,
  document.getElementById("root")
);
