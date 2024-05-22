import React, { useState } from 'react'

export const Buttons = () => {
    const [color, setColor] = useState('orange')
   

  return (
    <div className=' ' style={{height:'5
0vh' ,backgroundColor:color}} >



     <h1>colors</h1>

  <div className="btn-group" role="group" aria-label="Basic mixed styles example">

  <button onClick={() =>setColor('red')} type="button" className="btn btn-danger">Red</button>

  <button onClick={() => setColor('yellow')} type="button" className="btn btn-warning">Yellow</button>

  <button onClick={() => setColor('green')} type="button" className="btn btn-success">Green</button>
  <button onClick={() => setColor('blue')} type="button" className="btn  btn-primary">blue</button>
</div>

    </div>
  )
}
