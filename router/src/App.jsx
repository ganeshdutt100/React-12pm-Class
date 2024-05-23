// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// npm i react-router-dom   

import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Offcanvas } from "./components/Offcanvas";
import { SideNav } from "./components/SideNav";
import { Website } from "./components/Website";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
  
        <Navbar />

        <Routes>
           <Route path="/home" element={<Home/>}></Route>
           <Route path="/about" element={<About/>}></Route>
           <Route path="/contact" element={<Contact/>}></Route>
           <Route path="/sidebar" element={<Offcanvas/>}></Route>
           <Route path="/web" element={<Website/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
