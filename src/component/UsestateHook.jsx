import React, { useState } from "react";

export default function UsestateHook() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increse</button>
      <button onClick={() => setCount(count - 1)}> dec</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
