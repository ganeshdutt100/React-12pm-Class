// import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { Buttons } from "./components/Buttons";

function App() {
  const [mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar navSan={mode} />
      <Buttons />
    </>
  );
}

export default App;
