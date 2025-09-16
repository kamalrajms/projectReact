import React from "react";
import Greeting from "./components/Greeting";
import Hello from "./components/Hello";

export default function App() {
  const name = "Dinesh";
  const age = 20;

  return (
    <div>
      <Greeting name={name} age={age}/>
      <Hello />
      <h1 style={{ backgroundColor: "pink", padding: "100px" }}>
        Hello everyone
      </h1>

      <Hello />

      {/* <p>my name is {name}</p> */}
    </div>
  );
}
