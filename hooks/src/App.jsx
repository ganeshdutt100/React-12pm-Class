// import { useEffect, useState } from "react";

import "./App.css";
import { UseRefClass2 } from "./Components/UseRefClass2";
// import { UseRef } from "./Components/UseRef";
// import { UseEffect } from "./Components/UseEffect";

function App() {
  // let sandeep = 0;
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   sandeep = sandeep + 2;
  //   alert(`i am changed :  ${sandeep}`);
  // });
  return (
    <>
      {/* <h1>hello world</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      <UseRefClass2 />
    </>
  );
}

export default App;
