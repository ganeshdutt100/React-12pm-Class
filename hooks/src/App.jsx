import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  useEffect(() => {
    alert("i am Deepika ");
    console.log("i am Deepika.....!");
  }, []); // load

  useEffect(() => {
    alert("i am changed ");
  }, [count]);

  return (
    <>
      <h1>i am Ganesh Dutt</h1>
      <button onClick={() => setCount(count + 1)}>ADD</button>
      <input type="text" value={count} size={4} />
      <button onClick={() => setCount(count - 1)}>SUB</button>
    </>
  );
}

export default App;
