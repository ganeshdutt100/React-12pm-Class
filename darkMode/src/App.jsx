import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "Black";
      document.body.style.color = "white";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
    </>
  );
}

export default App;
