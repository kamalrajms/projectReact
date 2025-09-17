import React, { useState } from "react";

export default function ConditionalRender() {
  const [isLogged, setIslogged] = useState(true);
  return (
    <div>
      {/* ternary operator */}
      {isLogged ? <p>welcome back</p> : <p>please login...</p>}
      <button onClick={() => setIslogged(!isLogged)}>
        {isLogged ? "Sign out" : "signed in"}
      </button>
      {/* logical operator */}

      {isLogged && <p>user data name,address,email</p>}
    </div>
  );
}
