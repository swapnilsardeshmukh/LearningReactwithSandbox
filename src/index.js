//adding constant hello swapnil and same with paragraph
//with back ticks 
import React from "react";
import ReactDOM from "react-dom";

const fname = "Swapnil";
const lname = "Sardeshmukh";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {`${fname} ${lname}`} and your favno is {num}
    </h1>
    <p>But Your lucky number for now is {Math.round(Math.random() * 10)}</p>
    <p> Thank you</p>
    <p> {fname + "" +lname}</p>
  </div>,
  document.getElementById("root")
);
