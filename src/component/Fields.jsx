import React, { useState } from "react";

export default function Fields() {
  const [name, setName] = useState("");
  const [isCheched, setIsChecked] = useState(true);
  return (
    <div>
      <h2>Text input</h2>
      <input
        type="text"
        value={name}
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Check box</h2>
      <input
        type="checkbox"
        checked={isCheched}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <h1>{name}</h1>
    </div>
  );
}
