import { useState } from "react";

function App() {
  const [computer, setComputer] = useState(null);
  const [player, setPlayer] = useState(null);
  const [result, setResult] = useState("Shuru Karo Jitne Pe Chocholate Milegi");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  

  const emojis = {
    0: "🪨",
    1: "📄",
    2: "✂️"
  };

  const playGame = (myChoice) => {
    const compChoice = Math.floor(Math.random() * 3);

    setComputer(compChoice);
    setPlayer(myChoice);

    if (compChoice === myChoice) {
      setResult("Draw");
    } 
    else if (
      (compChoice === 0 && myChoice === 1) ||
      (compChoice === 1 && myChoice === 2) ||
      (compChoice === 2 && myChoice === 0)
    ) {
      setResult("Jit Gaya!!!....Aur Khelo");
      setPlayerScore(i => i + 1); 
    } 
    else {
      setResult("Haar Gaye....better luck next time");
      setComputerScore(i => i + 1);
    }
  };
  const resetGame = () => {
  setComputer(null);
  setPlayer(null);
  setResult("Naya Game Shuru Kre");
  setPlayerScore(0);
  setComputerScore(0);
  };

  return (
    <div>
      <div >
        <h1>Rock Paper Scissors</h1>
        <p>----------------------------</p>

        <h2>
          Computer: {emojis[computer]}
        </h2>VS
        <h2>YOU: {emojis[player]}
        </h2>

        <h2><i>{result}</i></h2>
        <p>----------------------------</p>
      </div>
      <div style={{}}>

        <h2>Score</h2>
        <p>You: {playerScore}</p>
        <p>Computer: {computerScore}</p>
        <p>----------------------------</p>

        <button  onClick={() => playGame(0)}>🪨</button>
        <button  onClick={() => playGame(1)}>📄</button>
        <button  onClick={() => playGame(2)}>✂️</button>
        <br />
        <button  onClick={resetGame}>Reset Game</button>
      </div>
    </div>

  );
}

export default App;