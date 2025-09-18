import React, { useEffect, useState } from "react";

export default function UseeffectHook() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("component mounted");
  }, [count]);
  useEffect(() => {
    console.log(`Count changed to : ${count}`);
  }, [count]);
  return (
    <div>
      hello
      <h2>count :{count}</h2>
      <button onClick={() => setcount(count + 1)}>inc</button>
    </div>
  );
}
