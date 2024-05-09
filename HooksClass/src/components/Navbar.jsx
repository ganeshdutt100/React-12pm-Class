import {useState}from 'react'


export const Navbar = () => {
    const [darkMode , setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
       
    }
  return (
    <div>
     <nav className="navbar navbar-expand-sm" style={{background : darkMode ? 'black' : 'white' , color : darkMode ?  'white': 'black'}}>
  <a className="navbar-brand" href="#" style={{color : darkMode ?  'white': 'black'}}>Navbar</a>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link active" href="#" aria-current="page"  style={{color : darkMode ?  'white': 'black'}}>Home <span className="visually-hidden">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"  style={{color : darkMode ?  'white': 'black'}}>Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  style={{color : darkMode ?  'white': 'black'}}>Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Action 2</a>
        </div>
      </li>
    </ul>
   
 <div className="form-check form-switch">
  <input onClick={toggleDarkMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{darkMode ?'Enable Dark Mode' :  'Enable light Mode'}</label>
</div>


  </div>
</nav>


    </div>
  )
}
