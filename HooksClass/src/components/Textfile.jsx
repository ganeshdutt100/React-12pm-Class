import { useState } from "react"

export const Textfile = () => {
    const [darkMode, setdarkMode] = useState(false);

    const toggleDarkMode = () =>{
        setdarkMode(!darkMode)
       
           }
  return (
    <div>
<div className="mb-3 container">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>



<div className="alert alert-warning alert-dismissible fade show" role="alert">
 {darkMode ? 'Enabled dark mode' : 'Enabled light mode'}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
</div>

 {/* (con) ? true : false */}
  <textarea style={{background : darkMode ? 'black' :  'white'  ,  color : darkMode ? 'white': 'black'}} className="form-control" id="exampleFormControlTextarea1" rows={7} defaultValue={""} cols={5} value={darkMode ? 'Enabled dark mode' : 'Enabled light mode'} />

  <button className="btn btn-danger mt-4" onClick={toggleDarkMode}>{darkMode ? 'Disable dark mode' : 'Enable Dark mode'}</button>
</div>

    </div>
  )
}
