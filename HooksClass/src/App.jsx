
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { Textfile } from './components/Textfile';
import { Navbar } from './components/Navbar';
// import { File1 } from './components/File1'
// import { File2 } from './components/File2'
// import { File3 } from './components/File3';
// import { File4 } from './components/File4';

function App() {

  return (
    <>  
    <Navbar/>
    <Textfile/>
    {/* <File1/>
     <File2/>
     <File3/>
     <File4/> */}
    </>
  )
}

export default App
