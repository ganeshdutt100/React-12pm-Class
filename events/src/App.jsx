import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Events1 } from "./components/Events1";
import { Prevent } from "./components/Prevent";
import { Events2 } from "./components/Events2";
import { Events3 } from "./components/Events3";
import { CopyCode } from "./components/CopyCode";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Events1 /> */}
      {/* <Prevent /> */}
      {/* <Events2 /> */}
      {/* <Events3 /> */}
      <CopyCode />
    </>
  );
}

export default App;
