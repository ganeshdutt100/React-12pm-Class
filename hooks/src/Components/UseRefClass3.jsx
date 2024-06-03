import React, { useRef } from "react";

export const UseRefClass3 = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input type="text" />
      <input type="text" />
      <input type="text" ref={inputRef} />
      <input type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
};
