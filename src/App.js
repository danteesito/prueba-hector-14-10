import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './/Components/Home';
import Game from './/Components/Game';
import './App.css';

function App() {
  const [playerName, setPlayerName] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setPlayerName={setPlayerName} />} />
        <Route path="/game" element={<Game playerName={playerName} />} />
      </Routes>
    </Router>
  );
}

export default App;
