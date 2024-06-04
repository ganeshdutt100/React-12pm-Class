import React from "react";

export const Home = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col mt-3 ">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              laudantium qui eligendi, eos omnis et rem nihil adipisci error
              architecto ut quod modi odio quae? Facilis perferendis vitae hic
              repellat?
            </p>
            <button className="btn btn-danger">call 🤙</button>
          </div>

          <div className="col">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/28/23/00/swan-2107052_1280.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
