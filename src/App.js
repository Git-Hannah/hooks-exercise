import "./App.css";
import React, { useState, useEffect } from "react";

const Code = ({ code }) => (
  <pre>
    <code>{JSON.stringify(code, null, 4)}</code>
  </pre>
);

const useMouseposition = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return position;
};

function App() {
  const [state, setState] = useState(42);
  const position = useMouseposition();
  useEffect(() => {
    if (state === 50) {
      console.log("hallo");
    }
  }, [state]);
  return (
    <div>
      <button onClick={() => setState((previousState) => previousState - 1)}>
        -
      </button>

      <span>{state}</span>
      <button onClick={() => setState((previousState) => previousState + 1)}>
        {" "}
        +{" "}
      </button>
      <br />
      <div>
        <Code code={position} />
      </div>
    </div>
  );
}

export default App;
