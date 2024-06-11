import React, { useContext } from "react";
import { counterContext } from "../contextAPI/Context";

export const Tanishka = () => {
  const sandeep = useContext(counterContext);
  return <div>Tanishka :{sandeep.count} </div>;
};
