import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePI, triplePI } from "./math";
// '*' wildcard is not recommended import what is needed
//import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePI()}</li>
    <li>{triplePI()}</li>
    <li>{pi / pi}</li>
  </ul>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <ul>
//     <li>{pi.default}</li>
//     <li>{pi.doublePI()}</li>
//     <li>{pi.triplePI()}</li>

//   </ul>,
//   document.getElementById("root")
// );
