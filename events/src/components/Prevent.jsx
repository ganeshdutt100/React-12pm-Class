import React from "react";

export const Prevent = () => {
  const handleClick = (event) => {
    event.preventDefault();
    // alert("Link clicked ");
    alert("Link clicked but navigation prevented");
  };
  return (
    <div>
      <a
        href="https://ganeshdutt100.github.io/Ganesh_Portfolio/"
        target="_blank"
        onClick={handleClick}
      >
        Click me
      </a>
    </div>
  );
};
