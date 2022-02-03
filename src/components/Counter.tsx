import React, { useState } from "react";

interface CounterProps {}

export const Counter: React.FC<CounterProps> = ({}) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "70vh",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ textAlign: "center", margin: 20 }}>
          <h1>{counter}</h1>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => setCounter(counter + 1)}
            disabled={counter >= 100}
          >
            ☝️ Increment
          </button>
          <button
            onClick={() => setCounter(counter - 1)}
            disabled={counter <= 0}
          >
            👇 Decrement
          </button>
          <button onClick={() => setCounter(0)} disabled={counter <= 0}>
            🆑 Reset
          </button>
        </div>
      </div>
    </div>
  );
};
