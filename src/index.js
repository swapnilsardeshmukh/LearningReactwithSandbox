//adding className
//changimg javascript to jsx
//contentEditable
//spellCheck
//fix image length
//image const

import React from "react";
import ReactDOM from "react-dom";

const name =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpOjPb6hODqD7dr8cMii_VeBEaJPVtanlSJQ&usqp=CAU";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="flowers" src={name} />
      <img
        className="flowers"
        alt="flower"
        src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      ></img>
      <img
        className="flowers"
        alt="flower"
        src="https://content.thriveglobal.com/wp-content/uploads/2018/11/Flower.jpg"
      ></img>
      <img
        className="flowers"
        alt="flower"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-paper-flowers-1582662788.jpg?crop=0.631xw:0.945xh;0.0128xw,0.0504xh&resize=640:*"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
