import React, { useState, useRef } from "react";

export const CopyCode = () => {
  const [text, setText] = useState("");
  const inuptRef = useRef(null);

  const uppercase = () => {
    let textValue = text.toUpperCase();
    setText(textValue);
  };

  const CopyCode = () => {
    // navigator.clipboard
    //   .writeText(text)
    //   .then(() => {
    //     alert("text copied successfully");
    //   })
    //   .catch(() => {
    //     alert(" text not copied ");
    //   });
    if (inuptRef.current) {
      inuptRef.current.select();
      document.execCommand("copy");

      alert("text copied successfully");
    }
  };
  return (
    <div>
      <textarea
        ref={inuptRef}
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
