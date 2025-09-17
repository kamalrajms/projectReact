import React, { useState } from "react";

export default function Darkmode() {
  const [dark, setDark] = useState(true);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "40px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        switch to{dark ? "light mode" : "Dark mode"}{" "}
      </button>
      <p>you are in {dark ? "Dark" : "light"} mode</p>
    </div>
  );
}
