import React from 'react'

export const Home = () => {
  return (
    <>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/easter-bunny-eggs-with-dark-background_1340-24021.jpg?t=st=1716363292~exp=1716366892~hmac=f672f522b57bf6589f36a365962512f05670073090347322cac7e32fe24c6c6e&w=996" className="d-block w-100" alt="..."height={400} />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/two-rabbits-are-sitting-blue-pot-with-painted-egg_1340-30347.jpg?t=st=1716363280~exp=1716366880~hmac=64b5bd24040b2f0f11055e9a1de60bc34c855c03bd8acb29efdc3aa7c442235b&w=740" className="d-block w-100" alt="..."height={400} />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?t=st=1716363265~exp=1716366865~hmac=9daa2bf70b9de05311d04e52240bc7828a192bb547203fd75e48613e8ff33ec5&w=996" className="d-block w-100" alt="..." height={400} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



<div className="container mt-5">
  <div className="row">
    <div className="col mt-5">
      <h1>Lorem ipsum dolor sit amet.
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sit a doloremque dicta, facere nisi soluta dolor ab? Voluptatem, illo voluptate autem sunt quod facilis debitis quo rem hic repellat!</p>

      <button className='btn btn-danger'>click me </button>
    </div>

    <div className="col">
    <img src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?t=st=1716363265~exp=1716366865~hmac=9daa2bf70b9de05311d04e52240bc7828a192bb547203fd75e48613e8ff33ec5&w=996" className=" img-fluid" alt="..."  />
    </div>
  </div>
</div>

    </>
  )
}
