import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Class1 } from "./Components/Class1";
import "bootstrap/dist/css/bootstrap.css";
import { Clock } from "./Components/Clock";
import Class2 from "./Components/Class2";
import { Class3 } from "./Components/Class3";

function App() {
  const [count, setCount] = useState(0);
  let a = "react js ";
  let img1 = (
    <img src="https://img.freepik.com/free-photo/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks_1340-23674.jpg?t=st=1718178207~exp=1718181807~hmac=462c327a65a7df92362253adf5794fa28de5d381459e76412c64d83f5ba7a805&w=900"></img>
  );
  let img2 = (
    <img src="https://img.freepik.com/free-photo/vibrant-peacock-feather-displays-iridescent-beauty-nature-generated-by-ai_188544-43394.jpg?t=st=1718179207~exp=1718182807~hmac=d2974d4a039a647d7746e8d620f4284238ac2a4b428d06f8651f5c0995d48c6b&w=1060"></img>
  );
  let img3 = (
    <img src="https://img.freepik.com/free-photo/two-rabbits-are-sitting-blue-pot-with-painted-egg_1340-30347.jpg?t=st=1718179196~exp=1718182796~hmac=4064d50c6ba57032a522eeb9607490bf1a635ad63fb23ab0c6ba25ae755ff1cb&w=740"></img>
  );

  let card1 = "Card 1";
  let card2 = "Card 2";
  let card3 = "Card 3";

  let para1 = `  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus obcaecati omnis et, quasi aliquid ipsam recusandae ipsa rerum non laborum quis aut nesciunt asperiores voluptatum delectus repudiandae debitis exercitationem deleniti.`;

  return (
    <>
      {/* <div className="container d-flex justify-content-around">
        <Class1 title={card1} image={img1} para={para1} />
        <Class1 title={card2} image={img2} para={para1} />
        <Class1 title={card3} image={img3} para={para1} />
      </div> */}

      {/* <div>{b} : Tanishka </div>
      <div>{img}</div> */}
      {/* <Clock /> */}
      {/* <Class2 /> */}
      <Class3 />
    </>
  );
}

export default App;
