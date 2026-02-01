import { useState } from "react";

let Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>

      <strong>{count}</strong>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};
export default Counter;
