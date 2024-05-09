import React from 'react'

export const Section2 = () => {
  return (
    <div>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/premium-photo/api-integration-software-development_810293-123648.jpg?w=1060" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-photo/api-integration-software-development_810293-123648.jpg?w=1060" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-photo/api-integration-software-development_810293-123648.jpg?w=1060" className="d-block w-100" alt="..." />
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

  </div>
  )
}
