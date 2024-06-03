import { useState, useEffect, useRef } from "react";

export const UseRefClass2 = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;
  return (
    <>
      <h1>Current value : {count} </h1>
      <h2>Previous value : {prevCount} </h2>
      <button onClick={() => setCount(count + 1)}>Click me </button>
    </>
  );
};
