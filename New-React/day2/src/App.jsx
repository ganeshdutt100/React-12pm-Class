import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Food from "./components/Food";
import "bootstrap/dist/css/bootstrap.min.css";
import { Food2 } from "./components/Food2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>i am app.js</p>
      {/* <Food /> */}
      <Food2 />
    </>
  );
}

export default App;
