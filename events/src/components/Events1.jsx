import React from "react";

export const Events1 = () => {
  const handleClick = () => {
    alert("Button clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
