import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(60);

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

  // Dependencies Array
  // useEffect(() => {
  //   alert(` current value  : ${count} `);
  // }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((x) => x - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {/* <h1>i am Ganesh Dutt</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>ADD</button>
      <input type="text" value={count} size={4} />
      <button onClick={() => setCount(count - 1)}>SUB</button> */}

      <p>Seconds : {count}</p>
    </>
  );
}

export default App;
