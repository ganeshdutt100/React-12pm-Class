import React from "react";
import { Govind } from "./Govind";

export const Context = ({ count }) => {
  return (
    <>
      <div>Context</div>
      <Govind count={count} />
    </>
  );
};
