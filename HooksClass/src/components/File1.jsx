import { useState } from 'react'
export const File1 = () => {
    const [count, setCount] = useState(0)

    function add(){
     setCount(count+1)
    }
    function sub(){
     setCount(count-1)
    }
  return (
    <div className='file2css'>
         
        <button onClick={add} className='btn  btn-outline-success' >
          ADD
        </button>

        <input type="text" value={count} size={5} style={{padding:'9px' ,  margin:'0px 10px' }} disabled/>

        <button onClick={sub} className=' btn btn-outline-danger'>
         SUB
        </button>
      
      
    </div>
  )
}
