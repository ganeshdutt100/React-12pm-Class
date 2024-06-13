import React from "react";

export const Food2 = () => {
  let foodArray = [
    "Momos",
    "Tandoori Momos",
    "Briyani",
    "Coffee",
    "Rice",
    "Frech Fries",
    "Cheese",
    "Hot Dog",
    "Burger",
    "Pizza",
    "Dal",
    "Roti",
    "Apple",
  ];
  return (
    <>
      <div
        className="container text-center bg-primary-subtle py-3 rounded"
        style={{ width: "300px" }}
      >
        <h1>Food</h1>

        <ul className="list-group">
          {foodArray.map((x) => {
            return (
              <li className="list-group-item">
                {x} <button className="btn btn-outline-success">Buy</button>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
