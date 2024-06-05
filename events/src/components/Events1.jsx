import React, { useState } from "react";

export const Events1 = () => {
  const [value, setValue] = useState("");
  // const handleClick = () => {
  //   alert("Button clicked");
  // };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted With Value : " + value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <input type="text" value={value} onChange={handleChange} />

        <button type="submit">Click me</button>
      </form>
    </>
  );
};
