import React from "react";

export const Food2 = () => {
  let foodArray = [
    "Briyani",
    "Coffee",
    "Rice",
    "Frech Fries",
    "Cheese",
    "Hot Dog",
    "Burger",
    "Pizza",
  ];
  return (
    <>
      <div
        className="container text-center bg-primary-subtle py-3 rounded"
        style={{ width: "300px" }}
      >
        <h1>Food</h1>

        <ul className="list-group">
          {foodArray.map((a) => {
            <li key={a} className="list-group-item">
              {a}
              <button className="btn  btn-outline-success ">Buy</button>{" "}
            </li>;
          })}

          {/* {foodArray} */}
        </ul>

        {/* <ul className="list-group">
          <li className="list-group-item">
            Pizza <button className="btn  btn-outline-success ">Buy</button>{" "}
          </li>
          <li className="list-group-item">
            Burger <button className="btn  btn-outline-success ">Buy</button>{" "}
          </li>
          <li className="list-group-item">
            Hot Dog <button className="btn  btn-outline-success ">Buy</button>{" "}
          </li>
          <li className="list-group-item">
            Cheese <button className="btn  btn-outline-success ">Buy</button>{" "}
          </li>
          <li className="list-group-item">
            Frech Fries{" "}
            <button className="btn  btn-outline-success ">Buy</button>{" "}
          </li>
          <li className="list-group-item">
            Ice Cream <button className="btn  btn-outline-success ">Buy</button>{" "}
          </li>
          <li className="list-group-item">
            Rice <button className="btn  btn-outline-success ">Buy</button>{" "}
          </li>
          <li className="list-group-item">
            Coffee <button className="btn  btn-outline-success ">Buy</button>{" "}
          </li>
          <li className="list-group-item">
            Briyani <button className="btn  btn-outline-success ">Buy</button>{" "}
          </li>
        </ul> */}
      </div>
    </>
  );
};
