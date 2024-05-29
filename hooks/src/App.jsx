import { useEffect, useState } from "react";

import "./App.css";
import { UseRef } from "./Components/UseRef";
// import { UseEffect } from "./Components/UseEffect";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   alert(`i am changed :  ${count}`);
  // }, [count]);
  return (
    <>
      <h1>hello world</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {/* <UseEffect /> */}
      <UseRef />
    </>
  );
}

export default App;
