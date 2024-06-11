import React, { useContext } from "react";
import { counterContext } from "../contextAPI/Context";

export const Tanishka = () => {
  const { count } = useContext(counterContext);
  return <div>Tanishka : {count}</div>;
};
