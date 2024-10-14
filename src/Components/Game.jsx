import React, { useState, useEffect } from 'react';
import Feedback from './/FeedBack';
import Navbar from './/Navbar';
import Footer from './/Footer'; 

function Game({ playerName }) {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [won, setWon] = useState(false);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const guessNumber = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (guessNumber > randomNumber) {
      setFeedback('Muy alto');
    } else if (guessNumber < randomNumber) {
      setFeedback('Muy bajo');
    } else {
      setFeedback('¡Correcto!');
      setWon(true);
    }
  };

  return (
<>    
 <Navbar/>
  <div className="game">
      <h2>Hola {playerName}, Adivina el número</h2>
      <div className="number-box">
        {won ? <span>{randomNumber}</span> : <span>?</span>}
      </div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={won}
      />
      <button onClick={handleGuess} disabled={won}>
        Adivinar
      </button>
      <Feedback message={feedback} />
      <p>Intentos: {attempts}</p>
    </div>
    <Footer />
</>
  );
}

export default Game;
