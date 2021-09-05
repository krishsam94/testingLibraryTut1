import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1 data-testid="helloCls">Hello CodeSandbox</h1>
      <h2
        onClick={() => {
          setCounter(counter + 1);
        }}
        data-testid="h2Clk"
      >
        Start editing to see some magic happen!
      </h2>

      <div data-testid="result">{counter}</div>
    </div>
  );
}
