import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Events1 } from "./components/Events1";
import { Prevent } from "./components/Prevent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Events1 />
      <Prevent />
    </>
  );
}

export default App;
