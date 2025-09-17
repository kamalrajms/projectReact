import React, { useState } from "react";
import UsestateHook from "./component/UsestateHook";
import ConditionalRender from "./component/ConditionalRender";
import ListRendering from "./component/ListRendering";
import Darkmode from "./component/Darkmode";

export default function App() {
  const [log, setLog] = useState(false);
  return (
    <div>
      {/* {log ? <UsestateHook /> : <ConditionalRender />} */}
      <ConditionalRender />
      <UsestateHook />
      <ListRendering />
      <Darkmode />
    </div>
  );
}
