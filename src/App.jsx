import React, { useState } from "react";
import UsestateHook from "./component/UsestateHook";
import ConditionalRender from "./component/ConditionalRender";
import ListRendering from "./component/ListRendering";
import Darkmode from "./component/Darkmode";
import Fields from "./component/Fields";
import MultipleFields from "./component/MultipleFields";
import Form from "./component/Form";
import UseeffectHook from "./component/UseeffectHook";

export default function App() {
  const [log, setLog] = useState(false);
  return (
    <div>
      {/* {log ? <UsestateHook /> : <ConditionalRender />} */}
      <ConditionalRender />
      <UsestateHook />
      <ListRendering />
      <Darkmode />
      <Fields />
      <MultipleFields />
      <Form />
      <UseeffectHook />
    </div>
  );
}
