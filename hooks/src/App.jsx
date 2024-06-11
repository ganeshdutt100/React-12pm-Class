import { useState } from "react";

import "./App.css";
import { Context } from "./Components/Context";
import { UseRefClass2 } from "./Components/UseRefClass2";
import { UseRefClass3 } from "./Components/UseRefClass3";
// import { UseRef } from "./Components/UseRef";
// import { UseEffect } from "./Components/UseEffect";
import { counterContext } from "./contextAPI/Context";

function App() {
  // let sandeep = 0;
  const [count, setCount] = useState(0);

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
      {/* <UseRefClass2 /> */}
      {/* <UseRefClass3 /> */}

      <counterContext.Provider value={{ count, setCount }}>
        <button onClick={() => setCount(count + 1)}>Button : {count}</button>

        {/* <div>Tanishka : {count}</div> */}
        <Context />
      </counterContext.Provider>
    </>
  );
}

export default App;
