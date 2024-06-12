import React from "react";

export const Clock = () => {
  let currentDate = new Date();
  return (
    <>
      <h1 className=" text-danger">Clock</h1>
      <div>{`Date  :  ${currentDate.toLocaleDateString()} - Time :  ${currentDate.toLocaleTimeString()}`}</div>
    </>
  );
};
