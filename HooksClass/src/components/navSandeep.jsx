import React ,{useState} from 'react'

export const NavSandeep = () => {
    const [darkMode, setDarkMode] = useState(false)
    function fun(){
        setDarkMode(!darkMode)
    }
window.onscroll = () => {
    let nav = document.querySelector('.navbar');
    if(nav && window.scrollY >  20){
        nav.classList.add('onScrollNav')
    }
    else{
        nav.classList.remove('onScrollNav')

    }
}


  return (
    <div>
    <nav className={` navbar navbar-expand-sm fixed-top  ${darkMode && window.scrollY > 20 ? 'onScrollNav': ''}`} >
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Action 2</a>
        </div>
      </li>
    </ul>
    
    
 <div className="form-check form-switch">
  <input onClick={fun} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>


  </div>
</nav>


    </div>
  )
}
