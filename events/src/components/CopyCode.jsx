import React, { useState } from "react";

export const CopyCode = () => {
  const [text, setText] = useState("");

  const uppercase = () => {
    let textValue = text.toUpperCase();
    setText(textValue);
  };

  const CopyCode = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("text copied successfully");
      })
      .catch(() => {
        alert(" text not copied ");
      });
  };
  return (
    <div>
      <textarea
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here.."
      ></textarea>{" "}
      <br />
      <button onClick={uppercase} style={{ marginRight: "8px" }}>
        click me{" "}
      </button>
      <button onClick={CopyCode}>Copy code</button>
    </div>
  );
};
