import React from "react";

export const Events3 = () => {
  const handleOnKeyDown = (event) => {
    console.log("key press.. " + event.key);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your text here..."
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
};
