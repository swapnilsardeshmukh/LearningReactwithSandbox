//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const m = new Date(2020, 1, 1, 7);
//<h1>{w}</h1>
let greeting = "";

let hours = "";

const customStyle = {
  color: ""
};

if (m.getHours() >= 3 && m.getHours() <= 12) {
  greeting = "Good Morning";
  hours = m.getHours();
  customStyle.color = "red";
} else if (m.getHours() > 12 && m.getHours() <= 18) {
  greeting = "Good Afternoon";
  hours = m.getHours();
  customStyle.color = "green";
} else if (m.getHours() > 18 && m.getHours() <= 21) {
  greeting = "Good Evening";
  hours = m.getHours();
  customStyle.color = "brown";
} else {
  greeting = "Good Night";
  hours = m.getHours();
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting} its {hours} in 24hrs Clock{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
