import React from "react";
import Styles from "./Hello.module.css";

export default function Hello() {
  const theme = {
    color: "yellow",
    padding: "50px",
  };
  return (
    <div>
      <h1 className={Styles.lorem}>Vijay</h1>
      <h3 style={theme}>today class introduction</h3>
    </div>
  );
}
