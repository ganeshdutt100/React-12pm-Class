import { useState } from 'react'

import './App.css'
// import { Buttons } from './components/Buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Sec1 } from './components/Sec1';
import { Game } from './components/Game';
import { Demo } from './components/Demo';

function App() {
  const[dark,setDark] = useState(false);
  
  const darkModeFun =() =>{
      setDark(!dark)
  }


  return (
    <div className=' ' style={{background : dark ? 'black':'white' , color : dark?'white':'black'}}>

    <div className="form-check form-switch float-end">
  <input onClick={darkModeFun} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{dark? 'Dark mode Enable' : 'Light Mode Enable'}</label>
</div>

      {/* <Buttons/> */}

   
      <Game/>

      <Demo/>

    </div>
  )
}

export default App
