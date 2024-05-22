// import React from 'react'

export const Contact = () => {
  return (
    <div>
        <h1 className='text-center'>i am Contact</h1>
        <div className="row">
            <div className="col">
                <img className=' img-fluid' src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?t=st=1716363265~exp=1716366865~hmac=9daa2bf70b9de05311d04e52240bc7828a192bb547203fd75e48613e8ff33ec5&w=996" alt="" />
            </div>
            <div className="col">
                <h1>Lorem ipsum dolor sit.</h1>
               <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

            </div>
        </div>
    </div>
  )
}
