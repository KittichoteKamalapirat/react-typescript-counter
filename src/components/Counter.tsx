import React, { useRef, useState } from "react";
import { useCountRenders } from "../hooks/useCountRenders";

interface CounterProps {}

export const Counter: React.FC<CounterProps> = ({}) => {
  const [counter, setCounter] = useState<number>(0);

  const renders = useCountRenders();

  // const renders = useRef(0);
  // console.log("Rendered", renders.current++, "times");

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

        <div>
          <h3>{renders.current}</h3>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => {
              setCounter(counter + 1);

              setCounter(counter + 1);
              //increase only 1
            }}
            disabled={counter >= 100}
          >
            ☝️ Increment normal
          </button>

          <button
            onClick={() => {
              setCounter((curr) => curr + 1);
              setCounter((curr) => curr + 1);
              //increase 2
            }}
            disabled={counter >= 100}
          >
            ☝️ Increment updater
          </button>

          <button
            onClick={() => setCounter(counter + 10)}
            disabled={counter > 90}
          >
            🚀 Increment by 10!
          </button>

          <button
            onClick={() => setCounter(counter - 1)}
            disabled={counter <= 0}
          >
            👇 Decrement
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <button onClick={() => setCounter(0)} disabled={counter <= 0}>
            🆑 Reset
          </button>
        </div>
      </div>
    </div>
  );
};
