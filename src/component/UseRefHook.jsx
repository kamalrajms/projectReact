import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();
  const focusinput = () => {
    inputRef.current.focus();
  };
  //eg2
  const [sec, setSec] = useState(0);
  const intervalref = useRef();

  useEffect(() => {
    intervalref.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalref.current);
  }, []);

  return (
    <div>
      {/* //eg1 */}
      <input type="text" placeholder="enter name" ref={inputRef} />
      <button onClick={focusinput}>Focus input</button>
      {/* //eg2 */}
      <h2>TImer:{sec}</h2>
      <button onClick={() => clearInterval(intervalref.current)}>Stop</button>
    </div>
  );
}
