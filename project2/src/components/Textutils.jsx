import {useState}from 'react'

export const Textutils = () => {
    const [text , setText] = useState("Enter your text here...")

    const lowerTextFun =  () =>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        
    }

    const UpperTextFun =  () =>{
        let UpperText = text.toUpperCase();
        setText(UpperText);
        
    }
  return (
    <div className='container'>
    <h1 className='text-center'>TextUtils</h1>
  <div className="mb-3 mt-5">
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} value={text} onChange={(e) =>setText(e.target.value) } />
</div>

<div className='d-flex gap-3'>
 <button onClick={lowerTextFun} className='btn btn-danger'>Lower case</button>


 <button onClick={UpperTextFun} className='btn btn-success'>Upper case</button>
</div>


 <p>{text}</p>
 <p> Char  { text.length}</p>
 <p>  words {text.split(" ").length}</p>
    </div>
  )
}
