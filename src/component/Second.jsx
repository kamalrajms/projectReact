import React, { useState, useEffect } from "react";

export default function Second() {
  const [Second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h2>Seconds :{Second}</h2>
    </div>
  );
}
