import React from "react";
import "./Greeting.css";

export default function Greeting({ name, age }) {
  return (
    <div className="morning">
      Morning
      <h3 className="lorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita a
        nobis, libero voluptate sequi deleniti ipsum doloremque iure porro
        voluptatem?
      </h3>
      <p>
        my name is {name} and {age}
      </p>
    </div>
  );
}
