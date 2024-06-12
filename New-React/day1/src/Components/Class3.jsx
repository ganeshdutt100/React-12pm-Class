import React from "react";

export const Class3 = () => {
  const buttonArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",

    "-",
    "*",
    "/",
    "=",
  ];

  return (
    <div className=" bg-dark-subtle py-4" style={{ width: "300px" }}>
      <input type="text" disabled className=" fs-4 rounded" />
      <div className=" d-flex flex-wrap gap-5 px-4 py-3 justify-content-around">
        {buttonArray.map((x) => (
          <button>{x}</button>
        ))}
        {/* <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>-</button>
        <button>+</button>
        <button>*</button>
        <button>/</button>
        <button> = </button> */}
      </div>
    </div>
  );
};
