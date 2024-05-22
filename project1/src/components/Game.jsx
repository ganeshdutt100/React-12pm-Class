import React , {useState} from 'react'

export const Game = () => {
 const gameChoice = ['rock','paper','scissor'];

    const [user, setUser] = useState(null);
    const [computer, setComputer] = useState(null);
    const [result, setresult] = useState(null);


     const fun = (choice) =>{
        setUser(choice);    // user value

        const comChoice =  gameChoice[Math.floor(Math.random()*gameChoice.length)]
        setComputer(comChoice);   // computer value 


        funSandeep(choice,comChoice );
     }

     const funSandeep = (userChoice , computer) => {
  if(userChoice == computer){
    setresult("It's a tie!");
  }

  else if( (userChoice === "rock" && computer === "scissor") || (userChoice === "paper" && computer === "rock") || (userChoice === "scissor" && computer === "paper")){
      setresult('you win!');
  }
  else{
    setresult('Computer win!')
  }
     }

    
  return (
    <div>
        <button onClick={()=>fun('rock')}>Rock</button>
        <button onClick={()=>fun('paper')}>Paper</button>
        <button onClick={()=>fun('scissor')}>Scissor</button>


        <p>User Choice {user}</p>
        <p> Computer Choice  {computer}</p>
        <p> Result {result}</p>
    </div>
  )
}
