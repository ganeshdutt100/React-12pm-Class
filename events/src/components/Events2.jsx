import React from "react";

export const Events2 = () => {
  const handleMouseEnter = () => {
    // alert("Mouse Entered..");
    console.log("Mouse Entered..");
  };
  const handleMouseLeave = () => {
    // alert("Mouse Leave..");
    console.log("Mouse leave..");
  };
  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ border: "1px solid white", padding: "30px", margin: "10px" }}
      >
        Hover over this box
      </div>
    </>
  );
};
