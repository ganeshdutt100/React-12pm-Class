import { useState, useEffect, useRef } from "react";

export const UseRef = () => {
  let number = useRef(0);
  useEffect(() => {
    number.current = number.current + 1;
    ("");
    console.log(`page reloaded...${number.current}`);
  });
  const [count, setCount] = useState(0);
  return <></>;
};
